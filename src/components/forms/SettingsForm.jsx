import React from 'react';
import { useForm } from 'react-hook-form';
import { RiSave3Line } from 'react-icons/ri';
import ImageUploader from '../common/ImageUploader';

export default function SettingsForm({ initialData, onSave }) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: initialData
  });

  const logoUrlVal = watch('logoUrl');
  const faviconUrlVal = watch('faviconUrl');

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left font-sans bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)]">
      
      {/* Header toolbar */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-lg font-bold text-primary font-display">Company Coordinates</h2>
          <span className="text-[10px] text-gray-400 font-semibold">Manage global email accounts, phone numbers, and socials</span>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gold hover:bg-gold-light text-white text-xs font-bold rounded-xl flex items-center gap-1.5 focus:outline-none cursor-pointer shadow-sm shadow-gold/25"
        >
          <RiSave3Line className="text-base" /> Save Settings
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Contact information */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-primary uppercase tracking-wide border-b border-gray-50 pb-2">General Contacts</h3>
          
          {/* Company Name */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500">Company Name</label>
            <input
              type="text"
              {...register('companyName', { required: 'Company name is required' })}
              placeholder="e.g. RIR Tours & Travels"
              className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
            />
            {errors.companyName && <span className="text-[10px] text-red-500 font-semibold">{errors.companyName.message}</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Phone */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Contact Phone</label>
              <input type="text" {...register('phone')} placeholder="+91 44 2456 7890" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
            </div>
            
            {/* WhatsApp */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">WhatsApp support</label>
              <input type="text" {...register('whatsapp')} placeholder="+91 98400 12345" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
            </div>
          </div>

          {/* Support Email */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500">Support Email</label>
            <input type="email" {...register('email')} placeholder="info@rirtours.com" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
          </div>

          {/* Postal Address */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500">Postal Office Address</label>
            <textarea rows="3" {...register('address')} placeholder="Office address coordinates..." className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
          </div>

          {/* Google maps link */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500">Google Maps link</label>
            <input type="text" {...register('googleMaps')} placeholder="Embed url link..." className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
          </div>
        </div>

        {/* Right Column: Socials & Media Upload */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wide border-b border-gray-50 pb-2">Social Profiles & Legal</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Facebook URL</label>
                <input type="text" {...register('facebook')} placeholder="https://facebook.com/..." className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Instagram URL</label>
                <input type="text" {...register('instagram')} placeholder="https://instagram.com/..." className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Footer Copyright Label</label>
              <input type="text" {...register('footerText')} placeholder="© 2026 RIR Travels..." className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
            </div>
          </div>

          {/* Media Logo / Favicon */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
            <ImageUploader
              value={logoUrlVal}
              onChange={(val) => setValue('logoUrl', val)}
              label="Company Logo"
            />
            <ImageUploader
              value={faviconUrlVal}
              onChange={(val) => setValue('faviconUrl', val)}
              label="Favicon Asset"
            />
          </div>
        </div>

      </div>

    </form>
  );
}
