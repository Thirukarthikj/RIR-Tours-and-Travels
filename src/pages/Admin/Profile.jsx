import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { adminService } from '../../services/adminService';
import ImageUploader from '../../components/common/ImageUploader';
import Button from '../../components/common/Button';
import { RiSave3Line, RiCheckboxCircleLine, RiErrorWarningLine } from 'react-icons/ri';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      avatarUrl: ''
    }
  });

  const { register: registerPass, handleSubmit: handleSubmitPass, reset: resetPass, formState: { errors: errorsPass } } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  });

  useEffect(() => {
    adminService.getProfile().then(data => {
      setProfile(data);
      setValue('name', data.name);
      setValue('email', data.email);
      setValue('avatarUrl', data.avatarUrl);
    });
  }, [setValue]);

  const avatarUrlVal = watch('avatarUrl');

  const onSubmitProfile = async (data) => {
    const payload = profile && profile.id ? { id: profile.id, ...data } : data;
    const saved = await adminService.saveProfile(payload);
    setProfile(saved);
    setSaveSuccess(true);
    
    // Dispatch custom event to notify AdminHeader to refresh
    window.dispatchEvent(new Event('profileUpdated'));
    
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const onSubmitPassword = (data) => {
    setPasswordError('');
    setPasswordSuccess(false);

    if (data.oldPassword !== 'trailone') {
      setPasswordError('Invalid old password');
      return;
    }
    if (data.newPassword !== data.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    setPasswordSuccess(true);
    resetPass();
    setTimeout(() => setPasswordSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 text-left font-sans">
      
      {/* Page header title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-primary">Admin Profile</h1>
          <p className="text-xs text-gray-400 mt-1">Manage admin account parameters and access credentials</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Profile form (7 spans) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] space-y-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Account Details</h3>
            {saveSuccess && (
              <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-md flex items-center gap-1 border border-emerald-500/15">
                <RiCheckboxCircleLine /> Profile updated
              </span>
            )}
          </div>

          <form onSubmit={handleSubmit(onSubmitProfile)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              
              {/* Display Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Admin Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Admin Display Name"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
                />
                {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name.message}</span>}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Email Address</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  placeholder="admin@rirtours.com"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
                />
                {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email.message}</span>}
              </div>

              {/* Image Uploader */}
              <div className="col-span-1 md:col-span-2 pt-2 border-t border-gray-100">
                <ImageUploader
                  value={avatarUrlVal}
                  onChange={(val) => setValue('avatarUrl', val)}
                  label="Profile Picture Avatar"
                />
              </div>

            </div>

            <Button
              type="submit"
              variant="gold"
              className="py-2.5 font-bold rounded-xl flex items-center gap-1.5 focus:outline-none cursor-pointer"
            >
              <RiSave3Line className="text-sm" /> Save Changes
            </Button>
          </form>
        </div>

        {/* Right Column: Password form (5 spans) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] space-y-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Change Password</h3>
            {passwordSuccess && (
              <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-md flex items-center gap-1 border border-emerald-500/15">
                <RiCheckboxCircleLine /> Password updated
              </span>
            )}
          </div>

          {passwordError && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl p-3 flex items-center gap-2 text-xs">
              <RiErrorWarningLine className="text-base flex-shrink-0" />
              <span>{passwordError}</span>
            </div>
          )}

          <form onSubmit={handleSubmitPass(onSubmitPassword)} className="space-y-4">
            
            {/* Old Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Current Password</label>
              <input
                type="password"
                {...registerPass('oldPassword', { required: 'Old password is required' })}
                placeholder="Enter old password"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
              />
              {errorsPass.oldPassword && <span className="text-[10px] text-red-500 font-semibold">{errorsPass.oldPassword.message}</span>}
            </div>

            {/* New Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">New Password</label>
              <input
                type="password"
                {...registerPass('newPassword', { required: 'New password is required' })}
                placeholder="Enter new password"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
              />
              {errorsPass.newPassword && <span className="text-[10px] text-red-500 font-semibold">{errorsPass.newPassword.message}</span>}
            </div>

            {/* Confirm New Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Confirm New Password</label>
              <input
                type="password"
                {...registerPass('confirmPassword', { required: 'Confirm new password is required' })}
                placeholder="Confirm new password"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
              />
              {errorsPass.confirmPassword && <span className="text-[10px] text-red-500 font-semibold">{errorsPass.confirmPassword.message}</span>}
            </div>

            <Button
              type="submit"
              variant="primary"
              className="py-2.5 font-bold rounded-xl flex items-center gap-1.5 focus:outline-none cursor-pointer"
            >
              Update Password
            </Button>

          </form>
        </div>

      </div>

    </div>
  );
}
