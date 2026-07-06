import React, { useState, useEffect } from 'react';
import { RiAddLine, RiEdit2Line, RiDeleteBin6Line, RiSearchLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { adminService } from '../../services/adminService';
import GalleryForm from '../../components/forms/GalleryForm';
import { GALLERY_EXTENDED } from '../../constants';

export default function Gallery() {
  const [gallery, setGallery] = useState(GALLERY_EXTENDED);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const fetchGallery = () => {
    adminService.getGallery().then(data => {
      setGallery(data);
    });
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleEdit = (photo) => {
    setEditingPhoto(photo);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this gallery photo?")) {
      await adminService.deleteGallery(id);
      fetchGallery();
    }
  };

  const handleCreateNew = () => {
    setEditingPhoto(null);
    setIsFormOpen(true);
  };

  const handleSave = async (data) => {
    await adminService.saveGallery(data);
    setIsFormOpen(false);
    setEditingPhoto(null);
    fetchGallery();
  };

  const categories = ['All', 'Cab', 'Destinations', 'Spiritual'];

  // Filter & Search Logic
  const filteredGallery = gallery.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'All' ? true : item.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6 text-left font-sans">
      
      {/* 1. Header toolbar section */}
      {!isFormOpen && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold font-display text-primary">Gallery Portfolio</h1>
            <p className="text-xs text-gray-400 mt-1">Manage public travel destination collections and taxi vehicle photos</p>
          </div>
          <button
            onClick={handleCreateNew}
            className="px-4 py-2.5 bg-gold hover:bg-gold-light text-white text-xs font-bold rounded-xl flex items-center gap-1.5 focus:outline-none cursor-pointer shadow-sm shadow-gold/25"
          >
            <RiAddLine className="text-base" /> Upload Photo
          </button>
        </div>
      )}

      {/* 2. Editor pane or Listing grids */}
      {isFormOpen ? (
        <GalleryForm
          initialData={editingPhoto}
          onSave={handleSave}
          onCancel={() => setIsFormOpen(false)}
        />
      ) : (
        <div className="space-y-6">
          
          {/* Controls Bar: Search & Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.01)]">
            
            {/* Tab links */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-500 hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  {cat === 'All' ? 'All Images' : cat}
                </button>
              ))}
            </div>

            {/* Caption Search input */}
            <div className="relative">
              <RiSearchLine className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search captions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2.5 bg-slate-50 border border-gray-100 rounded-xl text-xs font-semibold outline-none focus:border-gold transition-colors text-primary min-w-[220px]"
              />
            </div>

          </div>

          {/* Staggered Portfolio Card Grid */}
          {filteredGallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGallery.map((photo) => (
                <div 
                  key={photo.id} 
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] group hover:shadow-md transition-shadow relative"
                >
                  {/* Photo container */}
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Dark gradient mask on bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Visibility indicator tag */}
                    <span className={`absolute top-3 left-3 text-[8px] font-bold px-2 py-0.5 rounded-md uppercase border flex items-center gap-1 ${
                      photo.status === 'Hidden'
                        ? 'bg-gray-100 text-gray-400 border-gray-200'
                        : 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                    }`}>
                      {photo.status === 'Hidden' ? (
                        <><RiEyeOffLine /> Hidden</>
                      ) : (
                        <><RiEyeLine /> Visible</>
                      )}
                    </span>
                  </div>

                  {/* Photo Details panel */}
                  <div className="p-4 space-y-3">
                    <div className="text-left space-y-0.5">
                      <span className="text-[9px] font-bold tracking-widest text-gold uppercase block">{photo.category}</span>
                      <h4 className="text-xs font-bold text-primary block truncate" title={photo.title}>{photo.title}</h4>
                    </div>

                    {/* Inline actions panel */}
                    <div className="flex justify-end gap-1.5 pt-2.5 border-t border-gray-50">
                      <button
                        onClick={() => handleEdit(photo)}
                        className="p-1.5 hover:bg-amber-50 rounded text-amber-500 hover:text-amber-600 transition-colors focus:outline-none cursor-pointer"
                        title="Edit caption"
                      >
                        <RiEdit2Line className="text-xs" />
                      </button>
                      <button
                        onClick={() => handleDelete(photo.id)}
                        className="p-1.5 hover:bg-red-50 rounded text-red-500 hover:text-red-600 transition-colors focus:outline-none cursor-pointer"
                        title="Delete photo"
                      >
                        <RiDeleteBin6Line className="text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-sm mx-auto">
              <p className="text-xs font-semibold text-gray-400">No images match your selection filter</p>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
