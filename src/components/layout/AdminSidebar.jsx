import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiDashboardLine, RiRoadMapLine, RiTaxiLine, RiGalleryLine, RiMessage2Line, RiSettings4Line, RiUserLine, RiLogoutBoxRLine, RiCloseLine, RiLandscapeLine } from 'react-icons/ri';
import { adminService } from '../../services/adminService';

export default function AdminSidebar({ isOpen, toggleSidebar, isMobile }) {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: RiDashboardLine },
    { label: 'Packages', path: '/admin/packages', icon: RiRoadMapLine },
    { label: 'Kodai Content', path: '/admin/kodai-content', icon: RiLandscapeLine },
    { label: 'Cab Management', path: '/admin/vehicles', icon: RiTaxiLine },
    { label: 'Gallery', path: '/admin/gallery', icon: RiGalleryLine },
    { label: 'Enquiries', path: '/admin/enquiries', icon: RiMessage2Line },
    { label: 'Settings', path: '/admin/settings', icon: RiSettings4Line },
    { label: 'Profile', path: '/admin/profile', icon: RiUserLine },
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to exit the Admin Panel?")) {
      adminService.logout();
      navigate('/admin/login');
    }
  };

  const sidebarClasses = `
    fixed top-0 bottom-0 left-0 z-40 bg-[#002140] text-white flex flex-col justify-between
    transition-all duration-300 ease-in-out border-r border-white/5
    ${isMobile 
      ? `${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full'}` 
      : `${isOpen ? 'w-64' : 'w-20'}`
    }
  `;

  return (
    <>
      {/* Mobile background backdrop overlay shadow */}
      {isMobile && isOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-[1px] transition-opacity duration-300"
        />
      )}

      <aside className={sidebarClasses}>
        
        {/* Top Header Logo Row */}
        <div>
          <div className="h-16 px-5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                RIR
              </div>
              {(!isMobile && !isOpen) ? null : (
                <span className="font-display font-bold text-base tracking-wide whitespace-nowrap">
                  RIR Control Desk
                </span>
              )}
            </div>
            
            {isMobile && (
              <button 
                onClick={toggleSidebar}
                className="text-white hover:text-gold-light focus:outline-none cursor-pointer"
              >
                <RiCloseLine className="text-2xl" />
              </button>
            )}
          </div>

          {/* Sidebar Menu navigation */}
          <nav className="p-4 space-y-1.5 flex-grow">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={isMobile ? toggleSidebar : undefined}
                  className={({ isActive }) => `
                    flex items-center gap-4 px-4 py-3.5 rounded-xl text-xs font-semibold tracking-wide transition-all font-sans
                    ${isActive 
                      ? 'bg-gold text-white shadow-md shadow-gold/20' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }
                  `}
                >
                  <Icon className="text-lg flex-shrink-0" />
                  {(!isMobile && !isOpen) ? null : (
                    <span className="whitespace-nowrap">{item.label}</span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom profile actions / logout action */}
        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-xs font-semibold tracking-wide text-red-300 hover:bg-red-500/10 hover:text-red-100 transition-colors font-sans focus:outline-none cursor-pointer"
          >
            <RiLogoutBoxRLine className="text-lg flex-shrink-0" />
            {(!isMobile && !isOpen) ? null : (
              <span className="whitespace-nowrap">Logout</span>
            )}
          </button>
        </div>

      </aside>
    </>
  );
}
