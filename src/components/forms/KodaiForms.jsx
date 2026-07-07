import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { RiAddLine, RiDeleteBin6Line, RiSave3Line } from 'react-icons/ri';
import ImageUploader from '../common/ImageUploader';

// Generic Header/Toolbar for forms
const FormHeader = ({ title, onCancel, isEdit }) => (
  <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
    <div>
      <h2 className="text-lg font-bold text-primary font-display">{title}</h2>
      <span className="text-[10px] text-gray-400 font-semibold">Manage details and imagery</span>
    </div>
    <div className="flex gap-2">
      <button type="button" onClick={onCancel} className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:bg-slate-50 cursor-pointer">Cancel</button>
      <button type="submit" className="px-4 py-2 bg-gold hover:bg-gold-light text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm shadow-gold/25">
        <RiSave3Line className="text-base" /> {isEdit ? 'Update' : 'Save'}
      </button>
    </div>
  </div>
);

// --- 1. Tour Package Form ---
export function TourPackageForm({ initialData, onSave, onCancel }) {
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm({
    defaultValues: initialData || {
      title: '', badge: '', duration: '', capacity: '', desc: '', image: '', features: ['']
    }
  });
  const { fields, append, remove } = useFieldArray({ control, name: "features" });
  
  const onSubmit = (data) => onSave({ ...data, features: data.features.filter(f => f.trim()) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <FormHeader title={initialData ? `Edit: ${initialData.title}` : 'New Tour Package'} onCancel={onCancel} isEdit={!!initialData} />
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-xs font-semibold text-gray-500">Title</label><input {...register('title', { required: true })} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
          <div><label className="text-xs font-semibold text-gray-500">Badge (Optional)</label><input {...register('badge')} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
          <div><label className="text-xs font-semibold text-gray-500">Duration</label><input {...register('duration')} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
          <div><label className="text-xs font-semibold text-gray-500">Capacity</label><input {...register('capacity')} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
        </div>
        <div><label className="text-xs font-semibold text-gray-500">Description</label><textarea {...register('desc')} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" rows="3"></textarea></div>
        <div><ImageUploader value={watch('image')} onChange={(url) => setValue('image', url)} label="Package Image" /></div>
        
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-2 block">Features / Highlights</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input {...register(`features.${index}`)} className="flex-grow px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" placeholder="e.g. Jeep Safari included" />
              <button type="button" onClick={() => remove(index)} className="px-3 py-2 bg-red-50 text-red-500 rounded-xl cursor-pointer"><RiDeleteBin6Line /></button>
            </div>
          ))}
          <button type="button" onClick={() => append('')} className="text-xs font-bold text-gold flex items-center gap-1 mt-2 cursor-pointer"><RiAddLine /> Add Feature</button>
        </div>
      </div>
    </form>
  );
}

// --- 2. Jeep Safari Form ---
export function JeepSafariForm({ initialData, onSave, onCancel }) {
  const { register, handleSubmit, control, setValue, watch } = useForm({
    defaultValues: initialData || { title: '', subtitle: '', image: '', spots: [''] }
  });
  const { fields, append, remove } = useFieldArray({ control, name: "spots" });
  const onSubmit = (data) => onSave({ ...data, spots: data.spots.filter(f => f.trim()) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <FormHeader title={initialData ? `Edit: ${initialData.title}` : 'New Jeep Safari'} onCancel={onCancel} isEdit={!!initialData} />
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-xs font-semibold text-gray-500">Title</label><input {...register('title', { required: true })} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
          <div><label className="text-xs font-semibold text-gray-500">Subtitle (Capacity)</label><input {...register('subtitle')} placeholder="e.g. Max 6" className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
        </div>
        <div><ImageUploader value={watch('image')} onChange={(url) => setValue('image', url)} label="Safari Image" /></div>
        
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-2 block">Spots Visited</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input {...register(`spots.${index}`)} className="flex-grow px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" />
              <button type="button" onClick={() => remove(index)} className="px-3 py-2 bg-red-50 text-red-500 rounded-xl cursor-pointer"><RiDeleteBin6Line /></button>
            </div>
          ))}
          <button type="button" onClick={() => append('')} className="text-xs font-bold text-gold flex items-center gap-1 mt-2 cursor-pointer"><RiAddLine /> Add Spot</button>
        </div>
      </div>
    </form>
  );
}

// --- 3. Stays / Accommodation Form ---
export function StayForm({ initialData, onSave, onCancel }) {
  const { register, handleSubmit, control, setValue, watch } = useForm({
    defaultValues: initialData || { tag: '', rating: 4.5, title: '', desc: '', guests: 2, beds: 1, image: '', amenities: [{ label: '' }] }
  });
  const { fields, append, remove } = useFieldArray({ control, name: "amenities" });
  const onSubmit = (data) => onSave({ ...data, amenities: data.amenities.filter(f => f.label.trim()) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <FormHeader title={initialData ? `Edit: ${initialData.title}` : 'New Stay / Accommodation'} onCancel={onCancel} isEdit={!!initialData} />
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-xs font-semibold text-gray-500">Title</label><input {...register('title', { required: true })} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
          <div><label className="text-xs font-semibold text-gray-500">Category Tag</label><input {...register('tag')} placeholder="e.g. Cottage" className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
          <div><label className="text-xs font-semibold text-gray-500">Guests</label><input type="number" {...register('guests')} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
          <div><label className="text-xs font-semibold text-gray-500">Beds</label><input type="number" {...register('beds')} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
        </div>
        <div><label className="text-xs font-semibold text-gray-500">Description</label><textarea {...register('desc')} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" rows="3"></textarea></div>
        <div><ImageUploader value={watch('image')} onChange={(url) => setValue('image', url)} label="Property Image" /></div>
        
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-2 block">Amenities</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input {...register(`amenities.${index}.label`)} className="flex-grow px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" placeholder="e.g. Free WiFi" />
              <button type="button" onClick={() => remove(index)} className="px-3 py-2 bg-red-50 text-red-500 rounded-xl cursor-pointer"><RiDeleteBin6Line /></button>
            </div>
          ))}
          <button type="button" onClick={() => append({ label: '' })} className="text-xs font-bold text-gold flex items-center gap-1 mt-2 cursor-pointer"><RiAddLine /> Add Amenity</button>
        </div>
      </div>
    </form>
  );
}

// --- 4. Sightseeing / Destination Tours Form ---
export function SightseeingForm({ initialData, onSave, onCancel }) {
  const { register, handleSubmit, control, setValue, watch } = useForm({
    defaultValues: initialData || { title: '', footerText: '', image: '', spots: [''] }
  });
  const { fields, append, remove } = useFieldArray({ control, name: "spots" });
  const onSubmit = (data) => onSave({ ...data, spots: data.spots.filter(f => f.trim()) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <FormHeader title={initialData ? `Edit: ${initialData.title}` : 'New Sightseeing Tour'} onCancel={onCancel} isEdit={!!initialData} />
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-xs font-semibold text-gray-500">Title</label><input {...register('title', { required: true })} className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
          <div><label className="text-xs font-semibold text-gray-500">Footer Text</label><input {...register('footerText')} placeholder="e.g. Drop for Lunch" className="w-full px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" /></div>
        </div>
        <div><ImageUploader value={watch('image')} onChange={(url) => setValue('image', url)} label="Sightseeing Image" /></div>
        
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-2 block">Spots Visited (Numbered usually)</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input {...register(`spots.${index}`)} className="flex-grow px-4 py-2 bg-slate-50 border border-gray-150 rounded-xl text-xs" />
              <button type="button" onClick={() => remove(index)} className="px-3 py-2 bg-red-50 text-red-500 rounded-xl cursor-pointer"><RiDeleteBin6Line /></button>
            </div>
          ))}
          <button type="button" onClick={() => append('')} className="text-xs font-bold text-gold flex items-center gap-1 mt-2 cursor-pointer"><RiAddLine /> Add Spot</button>
        </div>
      </div>
    </form>
  );
}
