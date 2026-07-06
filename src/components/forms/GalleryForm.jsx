import React from 'react';
import { useForm } from 'react-hook-form';
import { RiSave3Line } from 'react-icons/ri';
import ImageUploader from '../common/ImageUploader';

export default function GalleryForm({ initialData, onSave, onCancel }) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: initialData || {
      title: '',
      category: 'Destinations',
      url: '',
      featured: false,
      status: 'Visible'
    }
  });

  const urlVal = watch('url');

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left font-sans bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)]">
      
      {/* Form header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-lg font-bold text-primary font-display">
            {initialData ? `Edit Gallery Item: ${initialData.title}` : 'Upload Gallery Photo'}
          </h2>
          <span className="text-[10px] text-gray-400 font-semibold">Enter picture title descriptions and categories</span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:bg-slate-50 focus:outline-none cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-gold hover:bg-gold-light text-white text-xs font-bold rounded-xl flex items-center gap-1.5 focus:outline-none cursor-pointer shadow-sm shadow-gold/25"
          >
            <RiSave3Line className="text-base" /> {initialData ? 'Update Photo' : 'Save Photo'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Form: text coordinates */}
        <div className="space-y-4">
          {/* Title */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500">Photo Title / Caption</label>
            <input
              type="text"
              {...register('title', { required: 'Caption is required' })}
              placeholder="e.g. Sunrise at Shore Temple, Mahabalipuram"
              className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
            />
            {errors.title && <span className="text-[10px] text-red-500 font-semibold">{errors.title.message}</span>}
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500">Category</label>
            <select
              {...register('category')}
              className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary cursor-pointer"
            >
              <option value="Cab">Cab</option>
              <option value="Destinations">Destinations</option>
              <option value="Events">Events</option>
            </select>
          </div>

          {/* Status & Featured settings */}
          <div className="bg-slate-50 border border-gray-100 p-4 rounded-xl space-y-3">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input 
                type="checkbox"
                {...register('featured')}
                className="rounded border-gray-300 text-gold focus:ring-0 focus:ring-offset-0 w-4 h-4 cursor-pointer"
              />
              <span className="text-xs font-bold text-gray-600">Featured (Show on Home Page)</span>
            </label>

            <div className="flex items-center gap-2 pt-1.5 border-t border-gray-200/50">
              <span className="text-xs font-bold text-gray-500">Visibility:</span>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="radio" value="Visible" {...register('status')} className="text-gold focus:ring-0 w-4 h-4 cursor-pointer" />
                <span className="text-xs font-semibold text-gray-600">Visible</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="radio" value="Hidden" {...register('status')} className="text-gold focus:ring-0 w-4 h-4 cursor-pointer" />
                <span className="text-xs font-semibold text-gray-600">Hidden</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Form: media uploader */}
        <div>
          <ImageUploader
            value={urlVal}
            onChange={(val) => setValue('url', val)}
            label="Gallery Photo File"
          />
        </div>

      </div>

    </form>
  );
}
