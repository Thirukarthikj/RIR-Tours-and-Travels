import React, { useState } from 'react';
import { RiUploadCloudLine, RiLink, RiCheckLine, RiImageAddLine } from 'react-icons/ri';

export default function ImageUploader({ value, onChange, label = "Upload Image" }) {
  const [urlInput, setUrlInput] = useState('');
  const [activeTab, setActiveTab] = useState('upload'); // upload | url | presets

  const presets = [
    { name: 'Temple', url: 'https://images.unsplash.com/photo-1608976450630-18e38ee12f9b?q=80&w=600' },
    { name: 'Red Sedan', url: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=600' },
    { name: 'Tea Estate', url: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=600' }
  ];

  // Read local file as base64 data url for localStorage persistence
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (urlInput.trim()) {
      onChange(urlInput.trim());
      setUrlInput('');
    }
  };

  return (
    <div className="space-y-3 text-left font-sans">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {label}
      </label>

      <div className="bg-slate-50 border border-gray-100 rounded-2xl p-4 space-y-4">
        
        {/* Tab Selection */}
        <div className="flex gap-2.5 border-b border-gray-100 pb-2">
          {['upload', 'url', 'presets'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] font-bold uppercase tracking-wider pb-1 cursor-pointer focus:outline-none ${
                activeTab === tab 
                  ? 'border-b-2 border-gold text-gold' 
                  : 'text-gray-400 hover:text-primary'
              }`}
            >
              {tab === 'upload' ? 'Upload File' : tab === 'url' ? 'Paste URL' : 'Presets'}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="min-h-[110px] flex items-center justify-center">
          
          {/* File Upload Tab */}
          {activeTab === 'upload' && (
            <label className="w-full h-28 border-2 border-dashed border-gray-200 hover:border-gold rounded-xl flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-white transition-colors">
              <RiUploadCloudLine className="text-3xl text-gray-400" />
              <span className="text-xs font-bold text-gray-500">Choose File or Drop Here</span>
              <span className="text-[9px] text-gray-400 uppercase">JPG, PNG, WebP (Max 1MB)</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}

          {/* Direct URL Paste Tab */}
          {activeTab === 'url' && (
            <form onSubmit={handleUrlSubmit} className="w-full flex gap-2">
              <div className="relative flex-grow">
                <RiLink className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-semibold outline-none focus:border-gold transition-colors text-primary"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 bg-gold text-white text-xs font-bold rounded-xl hover:bg-gold-light focus:outline-none cursor-pointer whitespace-nowrap shadow-sm"
              >
                Apply URL
              </button>
            </form>
          )}

          {/* Quick Presets Tab */}
          {activeTab === 'presets' && (
            <div className="grid grid-cols-3 gap-3 w-full">
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => onChange(preset.url)}
                  className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-200 border border-gray-150 cursor-pointer group focus:outline-none shadow-sm"
                >
                  <img
                    src={preset.url}
                    alt={preset.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold tracking-wide">{preset.name}</span>
                  </div>
                  {value === preset.url && (
                    <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-gold text-white rounded-full flex items-center justify-center">
                      <RiCheckLine className="text-xs" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Live Preview Pane */}
        {value && (
          <div className="pt-3 border-t border-gray-100 flex items-center gap-4 text-left">
            <img
              src={value}
              alt="Media Upload Preview"
              className="w-16 h-12 rounded-lg object-cover bg-slate-200 border border-gray-150 flex-shrink-0"
            />
            <div className="text-xs overflow-hidden flex-grow space-y-1">
              <span className="font-bold text-primary block">Thumbnail Preview Loaded</span>
              <span className="text-[9px] text-gray-400 block truncate">{value}</span>
            </div>
            <button
              type="button"
              onClick={() => onChange('')}
              className="text-[9px] font-bold text-red-500 hover:underline focus:outline-none cursor-pointer"
            >
              Clear Image
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
