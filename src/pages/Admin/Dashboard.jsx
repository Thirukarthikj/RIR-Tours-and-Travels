import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiRoadMapLine, RiTaxiLine, RiImageLine, RiMessage2Line, RiArrowRightUpLine, RiUserVoiceLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { adminService } from '../../services/adminService';

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    packages: 0,
    vehicles: 0,
    gallery: 0,
    enquiries: 0
  });
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [recentPackages, setRecentPackages] = useState([]);

  useEffect(() => {
    // Load live counts from local state adminService
    const packsList = adminService.getPackages();
    const cabsList = adminService.getVehicles();
    const galleryList = adminService.getGallery();
    const enquiriesList = adminService.getEnquiries();

    setMetrics({
      packages: packsList.length,
      vehicles: cabsList.length,
      gallery: galleryList.length,
      enquiries: enquiriesList.length
    });

    setRecentEnquiries(enquiriesList.slice(0, 4));
    setRecentPackages(packsList.slice(0, 4));
  }, []);

  const cards = [
    { label: 'Active Packages', value: metrics.packages, icon: RiRoadMapLine, bg: 'bg-blue-500/10 text-blue-600', link: '/admin/packages' },
    { label: 'Cab Fleet Size', value: metrics.vehicles, icon: RiTaxiLine, bg: 'bg-amber-500/10 text-amber-600', link: '/admin/vehicles' },
    { label: 'Gallery Portfolio', value: metrics.gallery, icon: RiImageLine, bg: 'bg-emerald-500/10 text-emerald-600', link: '/admin/gallery' },
    { label: 'Client Enquiries', value: metrics.enquiries, icon: RiMessage2Line, bg: 'bg-indigo-500/10 text-indigo-600', link: '/admin/enquiries' },
  ];

  return (
    <div className="space-y-8 text-left font-sans">
      
      {/* Top Banner section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-primary">Overview Console</h1>
          <p className="text-xs text-gray-400 mt-1">Real-time statistics dashboard for RIR Tours & Travels</p>
        </div>
        <span className="text-xs font-semibold bg-gold/10 text-gold px-3.5 py-2 rounded-xl flex items-center gap-2 border border-gold/15">
          <RiCheckboxCircleLine className="text-sm" /> All systems operational
        </span>
      </div>

      {/* 1. Quick Stats Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <Link
              key={idx}
              to={c.link}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] flex items-center justify-between group hover:border-gold/30 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                  {c.label}
                </span>
                <span className="text-3xl font-bold font-display text-primary leading-tight">
                  {c.value}
                </span>
              </div>
              <div className={`${c.bg} w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                <Icon className="text-2xl" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* 2. Visual Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Line Chart box: Enquiry Volume Trends */}
        <div className="lg:col-span-8 bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-50">
            <div>
              <h3 className="text-base font-bold text-primary">Enquiry Volume Trend</h3>
              <span className="text-[10px] text-gray-400">Monthly submissions graph for {new Date().getFullYear()}</span>
            </div>
            <span className="text-[10px] bg-slate-100 text-gray-500 font-semibold px-2.5 py-1.5 rounded">6 Months View</span>
          </div>

          {/* SVG Line Chart */}
          <div className="h-64 relative flex items-end pt-4">
            <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
              {/* Grid Lines */}
              <line x1="0" y1="50" x2="600" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="100" x2="600" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="150" x2="600" y2="150" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4,4" />
              
              {/* Area Gradient */}
              <defs>
                <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d97706" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Area fill */}
              <path
                d="M 50 160 Q 150 120 250 150 T 450 60 T 550 40 L 550 200 L 50 200 Z"
                fill="url(#chart-grad)"
              />
              
              {/* Chart Line */}
              <path
                d="M 50 160 Q 150 120 250 150 T 450 60 T 550 40"
                fill="none"
                stroke="#d97706"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              
              {/* Nodes dots */}
              <circle cx="50" cy="160" r="5.5" fill="#ffffff" stroke="#d97706" strokeWidth="3" />
              <circle cx="150" cy="120" r="5.5" fill="#ffffff" stroke="#d97706" strokeWidth="3" />
              <circle cx="250" cy="150" r="5.5" fill="#ffffff" stroke="#d97706" strokeWidth="3" />
              <circle cx="350" cy="100" r="5.5" fill="#ffffff" stroke="#d97706" strokeWidth="3" />
              <circle cx="450" cy="60" r="5.5" fill="#ffffff" stroke="#d97706" strokeWidth="3" />
              <circle cx="550" cy="40" r="5.5" fill="#ffffff" stroke="#d97706" strokeWidth="3" />
            </svg>
            
            {/* Chart label overlay axis */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between px-[3%] text-[9px] font-bold text-gray-400 tracking-wider pt-2 font-sans bg-white">
              <span>JAN</span>
              <span>FEB</span>
              <span>MAR</span>
              <span>APR</span>
              <span>MAY</span>
              <span>JUN</span>
            </div>
          </div>
        </div>

        {/* Bar Chart box: Traffic breakdown */}
        <div className="lg:col-span-4 bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] space-y-6">
          <div className="border-b border-gray-50 pb-4">
            <h3 className="text-base font-bold text-primary">Service Performance</h3>
            <span className="text-[10px] text-gray-400">Enquiries breakdown by trip category</span>
          </div>

          <div className="space-y-4 pt-2">
            {/* Spiritual Tours */}
            <div className="space-y-1.5 text-xs text-left">
              <div className="flex justify-between font-semibold text-primary">
                <span>Spiritual Pilgrimage</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-gold h-full rounded-full" style={{ width: '45%' }} />
              </div>
            </div>

            {/* Hill Stations */}
            <div className="space-y-1.5 text-xs text-left">
              <div className="flex justify-between font-semibold text-primary">
                <span>Hill Stations Escapes</span>
                <span>30%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '30%' }} />
              </div>
            </div>

            {/* Coastal Routes */}
            <div className="space-y-1.5 text-xs text-left">
              <div className="flex justify-between font-semibold text-primary">
                <span>Coastal Routes & Leisure</span>
                <span>25%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: '25%' }} />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Detailed Lists Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Enquiries box */}
        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] text-left flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-50 mb-4">
              <h3 className="text-base font-bold text-primary flex items-center gap-2">
                <RiUserVoiceLine className="text-lg text-gold" /> Recent Enquiries
              </h3>
              <Link to="/admin/enquiries" className="text-[10px] font-bold text-gold hover:underline flex items-center gap-1">
                View All <RiArrowRightUpLine />
              </Link>
            </div>

            <div className="space-y-4">
              {recentEnquiries.map((enq) => (
                <div key={enq.id} className="flex justify-between items-start gap-4 p-3 hover:bg-slate-50 rounded-xl border border-transparent hover:border-gray-100 transition-all">
                  <div className="text-xs space-y-1 text-left">
                    <span className="font-bold text-primary block">{enq.name}</span>
                    <span className="text-[10px] text-gray-500 block truncate max-w-xs">{enq.message}</span>
                  </div>
                  <div className="text-right space-y-1">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      enq.status === 'New' 
                        ? 'bg-red-500/10 text-red-500' 
                        : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {enq.status}
                    </span>
                    <span className="text-[9px] text-gray-400 block">{enq.date.split('T')[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recently Added Packages */}
        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] text-left flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-50 mb-4">
              <h3 className="text-base font-bold text-primary flex items-center gap-2">
                <RiRoadMapLine className="text-lg text-gold" /> Latest Packages
              </h3>
              <Link to="/admin/packages" className="text-[10px] font-bold text-gold hover:underline flex items-center gap-1">
                Manage <RiArrowRightUpLine />
              </Link>
            </div>

            <div className="space-y-4">
              {recentPackages.map((pkg) => (
                <div key={pkg.id} className="flex items-center justify-between gap-4 p-3 hover:bg-slate-50 rounded-xl border border-transparent hover:border-gray-100 transition-all">
                  <div className="flex items-center gap-3">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-10 h-10 rounded-lg object-cover bg-slate-100 flex-shrink-0"
                    />
                    <div className="text-xs space-y-0.5 text-left">
                      <span className="font-bold text-primary block">{pkg.title}</span>
                      <span className="text-[10px] text-gray-400 block">{pkg.duration} • {pkg.region}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gold leading-tight">
                    {pkg.price ? `₹${pkg.price}` : 'Featured'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
