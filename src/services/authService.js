export const login = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "admin@rirtours.com" && password === "admin123") {
        resolve({ success: true, user: { email, role: "admin" } });
      } else {
        resolve({ success: false, message: "Invalid credentials." });
      }
    }, 400);
  });
};

export const logout = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 200);
  });
};
