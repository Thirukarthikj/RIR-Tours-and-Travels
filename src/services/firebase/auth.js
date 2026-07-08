import { signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from './config';

// Firebase authentication service implementation with mock fallback
export const loginAdmin = async (email, password) => {
  if (auth) {
    try {
      // Map simple 'admin' to administrative email if needed
      const loginEmail = email.includes('@') ? email : `${email}@rirtours.com`;
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, password);
      localStorage.setItem('rir_admin_auth', 'true');
      return userCredential.user;
    } catch (error) {
      console.error("Firebase Login Error:", error);
      throw error;
    }
  } else {
    // Mock Fallback
    if ((email === 'admin@rirtours.com' || email === 'admin') && password === 'trailone') {
      localStorage.setItem('rir_admin_auth', 'true');
      return { email: 'admin@rirtours.com', name: 'R. Raghuran' };
    }
    throw new Error("Invalid admin credentials.");
  }
};

export const logoutAdmin = async () => {
  if (auth) {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Firebase Logout Error:", error);
    }
  }
  localStorage.removeItem('rir_admin_auth');
};

export const getCurrentUser = () => {
  if (auth) {
    return auth.currentUser;
  }
  return localStorage.getItem('rir_admin_auth') === 'true' 
    ? { email: 'admin@rirtours.com', name: 'R. Raghuran' } 
    : null;
};

export const changeAdminPassword = async (oldPassword, newPassword) => {
  if (auth && auth.currentUser) {
    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      return true;
    } catch (error) {
      console.error("Firebase Password Change Error:", error);
      throw error;
    }
  } else {
    // Mock Fallback
    if (oldPassword === 'trailone') {
      return true;
    }
    throw new Error("Invalid old password");
  }
};

// Listen to auth changes
export const subscribeAuthChanges = (callback) => {
  if (auth) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('rir_admin_auth', 'true');
      } else {
        localStorage.removeItem('rir_admin_auth');
      }
      callback(user);
    });
  }
  // Mock fallback trigger
  const mockUser = getCurrentUser();
  callback(mockUser);
  return () => {};
};
