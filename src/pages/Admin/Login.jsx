import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RiLockLine, RiUserLine, RiEyeLine, RiEyeOffLine, RiErrorWarningLine } from 'react-icons/ri';
import { adminService } from '../../services/adminService';
import Button from '../../components/common/Button';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setAuthError('');
    setIsLoading(true);
    try {
      const success = await adminService.login(data.username, data.password);
      if (success) {
        navigate('/admin/dashboard');
      } else {
        setAuthError('Invalid Username or Password');
      }
    } catch (err) {
      console.error(err);
      setAuthError('An authentication error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Please ask your system administrator to reset your password in Firebase Console.');
  };

  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4 py-12 font-sans"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200')` }}
    >
      {/* Dark Scrim Overlay */}
      <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px]" />

      {/* Glassmorphic Container Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 text-white flex flex-col text-left space-y-8">
        
        {/* Brand/Logo header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-gold-light uppercase tracking-widest">RIR Tours & Travels</span>
          <h2 className="text-3xl font-bold font-display leading-tight">Admin Console</h2>
          <p className="text-xs text-gray-300">Enter credential coordinates to enter control desk</p>
        </div>

        {/* Error Alert Box */}
        {authError && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 flex items-center gap-3 text-xs text-red-200">
            <RiErrorWarningLine className="text-lg flex-shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        {/* Form elements */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Username */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Username</label>
            <div className="relative">
              <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type="text"
                {...register('username', { required: 'Username is required' })}
                placeholder="Enter username"
                className="w-full pl-11 pr-4 py-3.5 bg-white/10 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-400"
              />
            </div>
            {errors.username && (
              <span className="text-[10px] text-red-300 font-semibold">{errors.username.message}</span>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Password</label>
            <div className="relative">
              <RiLockLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type={showPassword ? "text" : "password"}
                {...register('password', { required: 'Password is required' })}
                placeholder="Enter password"
                className="w-full pl-11 pr-11 py-3.5 bg-white/10 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
              >
                {showPassword ? <RiEyeOffLine className="text-base" /> : <RiEyeLine className="text-base" />}
              </button>
            </div>
            {errors.password && (
              <span className="text-[10px] text-red-300 font-semibold">{errors.password.message}</span>
            )}
          </div>

          {/* Helper items (Remember Me / Forgot Password) */}
          <div className="flex justify-between items-center text-xs pt-1.5">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input 
                type="checkbox"
                {...register('rememberMe')}
                className="rounded border-white/20 bg-white/10 text-gold focus:ring-0 focus:ring-offset-0 w-4 h-4 cursor-pointer"
              />
              <span className="text-gray-300">Remember Me</span>
            </label>
            <a 
              href="#" 
              onClick={handleForgotPassword}
              className="text-gold-light hover:underline font-semibold"
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            variant="gold"
            disabled={isLoading}
            className="w-full py-3.5 font-bold rounded-xl mt-4 cursor-pointer transition-transform active:scale-[0.98] disabled:opacity-50"
          >
            {isLoading ? "Signing In..." : "Access Control Panel"}
          </Button>

        </form>

        {/* Console Footnote info */}
        <div className="text-center text-[10px] text-gray-400">
          Demo Access: <span className="text-gold-light">admin</span> / <span className="text-gold-light">trailone</span>
        </div>

      </div>
    </div>
  );
}
