import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { RiMenu2Line, RiBellLine, RiArrowDownSLine, RiUserLine, RiSettings4Line, RiLogoutBoxRLine, RiArrowLeftLine } from 'react-icons/ri';
import { adminService } from '../../services/adminService';

export default function AdminHeader({ toggleSidebar, isMobile }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profile, setProfile] = useState({ name: 'Admin', avatarUrl: '' });

  useEffect(() => {
    const fetchProfile = () => {
      adminService.getProfile().then(data => {
        setProfile(data);
      });
    };

    fetchProfile();

    window.addEventListener('profileUpdated', fetchProfile);
    return () => window.removeEventListener('profileUpdated', fetchProfile);
  }, [location.pathname]);

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('/admin/dashboard')) return 'Dashboard';
    if (path.includes('/admin/packages')) return 'Package Management';
    if (path.includes('/admin/vehicles')) return 'Cab Management';
    if (path.includes('/admin/gallery')) return 'Gallery Management';
    if (path.includes('/admin/enquiries')) return 'Customer Enquiries';
    if (path.includes('/admin/settings')) return 'Global Settings';
    if (path.includes('/admin/profile')) return 'Admin Profile';
    return 'Admin';
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to exit?")) {
      adminService.logout();
      navigate('/admin/login');
    }
  };

  return (
    <header className="sticky top-0 right-0 z-30 w-full h-16 bg-white border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,33,64,0.02)] px-4 md:px-6 flex justify-between items-center font-sans">
      
      {/* Left items: Menu trigger & Breadcrumb Title */}
      <div className="flex items-center gap-1 md:gap-4 min-w-0">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-slate-50 rounded-lg text-primary hover:text-gold transition-colors focus:outline-none cursor-pointer flex-shrink-0"
        >
          <RiMenu2Line className="text-xl" />
        </button>

        {isMobile && location.pathname !== '/admin/dashboard' && (
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 hover:bg-slate-50 rounded-lg text-primary hover:text-gold transition-colors focus:outline-none cursor-pointer flex-shrink-0"
            title="Go Back"
          >
            <RiArrowLeftLine className="text-xl" />
          </button>
        )}

        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide min-w-0">
          <span className="text-gray-400 hidden sm:inline">Control Panel</span>
          <span className="text-gray-300 hidden sm:inline">/</span>
          <span className="text-primary font-bold truncate">{getPageTitle()}</span>
        </div>
      </div>

      {/* Right items: Notifications & ProfileDropdown */}
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        
        {/* Notifications Icon with Indicator */}
        <div className="relative">
          <button 
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2.5 hover:bg-slate-50 rounded-lg text-primary hover:text-gold transition-colors relative focus:outline-none cursor-pointer"
          >
            <RiBellLine className="text-xl" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-[9px] font-bold text-white rounded-full flex items-center justify-center border border-white">
              2
            </span>
          </button>

          {/* Simple notification dropdown card */}
          {notificationsOpen && (
            <>
              <div onClick={() => setNotificationsOpen(false)} className="fixed inset-0 z-20 cursor-default" />
              <div className="absolute right-0 mt-2.5 w-72 sm:w-80 bg-white border border-gray-100 rounded-2xl shadow-xl z-30 p-4 text-left space-y-3.5">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
                  <span className="text-xs font-bold text-primary">Notifications</span>
                  <span className="text-[10px] text-gold font-semibold hover:underline cursor-pointer">Mark all read</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="border-b border-gray-50 pb-2.5 space-y-1">
                    <span className="font-semibold text-primary block">New Enquiry from Karthik Raja</span>
                    <span className="text-[10px] text-gray-400">Received 2 hours ago</span>
                  </div>
                  <div className="pb-1 space-y-1">
                    <span className="font-semibold text-primary block">New Enquiry from Dr. Ananya Sen</span>
                    <span className="text-[10px] text-gray-400">Received 1 day ago</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-gray-100" />

        {/* Profile drop trigger */}
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-2.5 hover:bg-slate-50 p-1.5 rounded-lg transition-colors focus:outline-none cursor-pointer"
          >
            <img
              src={profile.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'}
              alt="Avatar Profile"
              className="w-8 h-8 rounded-lg object-cover shadow-sm bg-slate-100"
            />
            {!isMobile && (
              <div className="flex items-center gap-1.5">
                <div className="text-left">
                  <span className="text-xs font-bold text-primary block">{profile.name}</span>
                  <span className="text-[9px] font-semibold text-gold block uppercase tracking-wider">Administrator</span>
                </div>
                <RiArrowDownSLine className="text-gray-400 text-sm" />
              </div>
            )}
          </button>

          {/* User actions drop menu */}
          {profileDropdownOpen && (
            <>
              <div onClick={() => setProfileDropdownOpen(false)} className="fixed inset-0 z-20 cursor-default" />
              <div className="absolute right-0 mt-2.5 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-30 py-2.5 text-left text-xs font-semibold font-sans">
                
                <Link
                  to="/admin/profile"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-primary hover:bg-slate-50 hover:text-gold transition-colors"
                >
                  <RiUserLine className="text-base text-gray-400" />
                  <span>My Profile</span>
                </Link>

                <Link
                  to="/admin/settings"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-primary hover:bg-slate-50 hover:text-gold transition-colors"
                >
                  <RiSettings4Line className="text-base text-gray-400" />
                  <span>Company Settings</span>
                </Link>

                <div className="border-t border-gray-50 my-1.5" />

                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    handleLogout();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors focus:outline-none cursor-pointer font-semibold text-xs"
                >
                  <RiLogoutBoxRLine className="text-base text-red-400" />
                  <span>Sign Out</span>
                </button>

              </div>
            </>
          )}
        </div>

      </div>

    </header>
  );
}
