import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { RiSave3Line, RiDeleteBin6Line, RiAddLine } from 'react-icons/ri';
import ImageUploader from '../common/ImageUploader';

export default function VehicleForm({ initialData, onSave, onCancel }) {
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm({
    defaultValues: initialData || {
      name: '',
      category: 'SUV',
      tag: 'Executive SUV',
      seats: '6+1 Seats',
      ac: 'Climate Control',
      bags: '3 Large Bags',
      extra: 'Onboard WiFi',
      pills: ['Professional Chauffeur', 'Mineral Water Bottles'],
      image: '',
      status: 'Available',
      featured: false
    }
  });

  const thumbnailVal = watch('image');

  // Dynamic Array Fields for pills (tags)
  const { fields: pillFields, append: appendPill, remove: removePill } = useFieldArray({
    control,
    name: "pills"
  });

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      pills: data.pills.filter(p => p.trim() !== '')
    };
    onSave(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left font-sans bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)]">
      
      {/* Header toolbar */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-lg font-bold text-primary font-display">
            {initialData ? `Edit Cab: ${initialData.name}` : 'Register New Cab'}
          </h2>
          <span className="text-[10px] text-gray-400 font-semibold">Enter taxi parameters and capacity metrics</span>
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
            <RiSave3Line className="text-base" /> {initialData ? 'Update Cab' : 'Register Cab'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side: General metrics */}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            
            {/* Vehicle Name */}
            <div className="col-span-2 space-y-1">
              <label className="text-xs font-semibold text-gray-500">Cab Name</label>
              <input
                type="text"
                {...register('name', { required: 'Cab name is required' })}
                placeholder="e.g. Toyota Innova Crysta"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
              />
              {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name.message}</span>}
            </div>

            {/* Category */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Category</label>
              <select
                {...register('category')}
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary cursor-pointer"
              >
                <option value="Hatchback">Hatchback</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Tempo Traveller">Tempo Traveller</option>
                <option value="Luxury Coach">Luxury Coach</option>
              </select>
            </div>

            {/* Custom Tag badge */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Sub-tag Label</label>
              <input
                type="text"
                {...register('tag')}
                placeholder="e.g. Executive SUV"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
              />
            </div>

            {/* Seats */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Seat Capacity</label>
              <input
                type="text"
                {...register('seats')}
                placeholder="e.g. 6+1 Seats"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
              />
            </div>

            {/* AC */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Air Conditioning</label>
              <input
                type="text"
                {...register('ac')}
                placeholder="e.g. Climate Control"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
              />
            </div>

            {/* Luggage Bags */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Baggage capacity</label>
              <input
                type="text"
                {...register('bags')}
                placeholder="e.g. 3 Large Bags"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
              />
            </div>

            {/* Extra detail */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Additional Features</label>
              <input
                type="text"
                {...register('extra')}
                placeholder="e.g. Onboard WiFi"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
              />
            </div>

          </div>

          {/* Status & Featured */}
          <div className="bg-slate-50 border border-gray-100 p-4 rounded-xl flex items-center justify-between gap-6">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input 
                type="checkbox"
                {...register('featured')}
                className="rounded border-gray-300 text-gold focus:ring-0 focus:ring-offset-0 w-4 h-4 cursor-pointer"
              />
              <span className="text-xs font-bold text-gray-600">Featured Cab</span>
            </label>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500">Status:</span>
              <select
                {...register('status')}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold outline-none focus:border-gold text-primary cursor-pointer"
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Side: Media & Tags */}
        <div className="space-y-6">
          {/* Cover image uploader */}
          <ImageUploader
            value={thumbnailVal}
            onChange={(val) => setValue('image', val)}
            label="Cab Exterior Image"
          />

          {/* Core Feature pills tags */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Key Amenities / Tags</label>
              <button
                type="button"
                onClick={() => appendPill('')}
                className="text-[9px] font-bold bg-slate-100 hover:bg-slate-200 text-gray-600 px-2.5 py-1 rounded cursor-pointer"
              >
                + Add Tag
              </button>
            </div>

            <div className="space-y-2 max-h-[140px] overflow-y-auto pr-2">
              {pillFields.map((field, idx) => (
                <div key={field.id} className="flex gap-2">
                  <input
                    type="text"
                    {...register(`pills.${idx}`)}
                    placeholder="e.g. Uniformed Driver"
                    className="w-full px-3 py-2 bg-slate-50 border border-gray-150 rounded-lg text-xs font-semibold outline-none text-primary"
                  />
                  {idx > 0 && (
                    <button type="button" onClick={() => removePill(idx)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer">
                      <RiDeleteBin6Line />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </form>
  );
}
