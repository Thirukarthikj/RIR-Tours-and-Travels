import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { RiAddLine, RiDeleteBin6Line, RiSave3Line } from 'react-icons/ri';
import ImageUploader from '../common/ImageUploader';

export default function PackageForm({ initialData, onSave, onCancel }) {
  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm({
    defaultValues: initialData || {
      title: '',
      destination: '',
      region: 'Spiritual',
      duration: '',
      price: '',
      startLocation: '',
      endLocation: '',
      vehicleType: '',
      pickup: '',
      drop: '',
      bestSeason: '',
      shortDescription: '',
      description: '',
      highlights: [''],
      inclusions: [''],
      exclusions: [''],
      itinerary: [{ day: 1, title: '', description: '' }],
      status: 'Active',
      featured: false,
      image: '',
      seoTitle: '',
      seoDesc: ''
    }
  });

  const thumbnailVal = watch('image');

  // Dynamic Array Fields for Lists
  const { fields: highlightFields, append: appendHighlight, remove: removeHighlight } = useFieldArray({
    control,
    name: "highlights"
  });

  const { fields: inclusionFields, append: appendInclusion, remove: removeInclusion } = useFieldArray({
    control,
    name: "inclusions"
  });

  const { fields: exclusionFields, append: appendExclusion, remove: removeExclusion } = useFieldArray({
    control,
    name: "exclusions"
  });

  const { fields: itineraryFields, append: appendItinerary, remove: removeItinerary } = useFieldArray({
    control,
    name: "itinerary"
  });

  const onSubmit = (data) => {
    // Process string arrays
    const formattedData = {
      ...data,
      highlights: data.highlights.filter(h => h.trim() !== ''),
      inclusions: data.inclusions.filter(i => i.trim() !== ''),
      exclusions: data.exclusions.filter(e => e.trim() !== ''),
      itinerary: data.itinerary.filter(day => day.title.trim() !== '')
    };
    onSave(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-left font-sans bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)]">
      
      {/* 1. Header Toolbar */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-lg font-bold text-primary font-display">
            {initialData ? `Edit Package: ${initialData.title}` : 'Create New Package'}
          </h2>
          <span className="text-[10px] text-gray-400 font-semibold">Enter packages configurations and features</span>
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
            <RiSave3Line className="text-base" /> {initialData ? 'Update Package' : 'Save Package'}
          </button>
        </div>
      </div>

      {/* 2. All Sections in One Single Page */}
      <div className="space-y-8 divide-y divide-gray-100">
        
        {/* Section A: Basic Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wide border-l-4 border-gold pl-2">Basic Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Title */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Package Name</label>
              <input
                type="text"
                {...register('title', { required: 'Package Name is required' })}
                placeholder="e.g. Rameshwaram Heritage Pilgrimage"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold transition-colors text-primary"
              />
              {errors.title && <span className="text-[10px] text-red-500 font-semibold">{errors.title.message}</span>}
            </div>

            {/* Destination */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Destination</label>
              <input
                type="text"
                {...register('destination', { required: 'Destination is required' })}
                placeholder="e.g. Rameshwaram, Tamil Nadu"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold transition-colors text-primary"
              />
              {errors.destination && <span className="text-[10px] text-red-500 font-semibold">{errors.destination.message}</span>}
            </div>

            {/* Region Category */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Region Category</label>
              <select
                {...register('region')}
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary cursor-pointer"
              >
                <option value="Spiritual">Spiritual</option>
                <option value="Hill Station">Hill Station</option>
                <option value="Coastal">Coastal</option>
              </select>
            </div>

            {/* Duration */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Duration (Days / Nights)</label>
              <input
                type="text"
                {...register('duration', { required: 'Duration is required' })}
                placeholder="e.g. 3 Days / 2 Nights"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold transition-colors text-primary"
              />
              {errors.duration && <span className="text-[10px] text-red-500 font-semibold">{errors.duration.message}</span>}
            </div>



            {/* Best Season */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Best Season to Visit</label>
              <input
                type="text"
                {...register('bestSeason')}
                placeholder="e.g. October to March"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold transition-colors text-primary"
              />
            </div>

            {/* Status toggles & featured */}
            <div className="flex items-center gap-6 pt-6 col-span-1 md:col-span-2">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input 
                  type="checkbox"
                  {...register('featured')}
                  className="rounded border-gray-300 text-gold focus:ring-0 focus:ring-offset-0 w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-bold text-gray-600">Featured Package</span>
              </label>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500">Status:</span>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" value="Active" {...register('status')} className="text-gold focus:ring-0 w-4 h-4 cursor-pointer" />
                  <span className="text-xs font-semibold text-gray-600">Active</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" value="Draft" {...register('status')} className="text-gold focus:ring-0 w-4 h-4 cursor-pointer" />
                  <span className="text-xs font-semibold text-gray-600">Draft</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Section B: Details & Route */}
        <div className="space-y-4 pt-6">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wide border-l-4 border-gold pl-2">Details & Route</h3>
          <div className="space-y-5">
            {/* Logistics row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Start Location</label>
                <input type="text" {...register('startLocation')} placeholder="e.g. Chennai" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">End Location</label>
                <input type="text" {...register('endLocation')} placeholder="e.g. Rameshwaram" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Vehicle Assigned</label>
                <input type="text" {...register('vehicleType')} placeholder="e.g. Innova Hycross" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Pickup coordinates</label>
                <input type="text" {...register('pickup')} placeholder="e.g. Hotel / Airport" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none text-primary" />
              </div>
            </div>

            {/* Short description */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Short Description</label>
              <input
                type="text"
                {...register('shortDescription')}
                placeholder="A brief 1-line tag summary for grids"
                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold transition-colors text-primary"
              />
            </div>

            {/* Detailed description */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500">Detailed Description</label>
              <textarea
                rows="4"
                {...register('description')}
                placeholder="Write description about the spiritual or coastal journey destinations"
                className="w-full px-4 py-3 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold transition-colors text-primary"
              />
            </div>
          </div>
        </div>

        {/* Section C: Itinerary & Lists */}
        <div className="space-y-4 pt-6">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wide border-l-4 border-gold pl-2">Itinerary & Lists</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Day-by-Day Itinerary timeline */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wide">Itinerary Schedule</h4>
                <button
                  type="button"
                  onClick={() => appendItinerary({ day: itineraryFields.length + 1, title: '', description: '' })}
                  className="text-[10px] font-bold bg-gold/10 text-gold px-2.5 py-1 rounded hover:bg-gold/20 flex items-center gap-1 focus:outline-none cursor-pointer"
                >
                  <RiAddLine /> Add Day
                </button>
              </div>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {itineraryFields.map((field, index) => (
                  <div key={field.id} className="bg-slate-50 border border-gray-150 p-4 rounded-xl space-y-2 relative">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-wider block">Day {index + 1}</span>
                    <input
                      type="text"
                      {...register(`itinerary.${index}.title`, { required: 'Day title is required' })}
                      placeholder="e.g. Arrival in Madurai & Temple Visit"
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold outline-none text-primary"
                    />
                    <textarea
                      rows="2"
                      {...register(`itinerary.${index}.description`)}
                      placeholder="Enter description of what guests will do/visit"
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold outline-none text-primary"
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeItinerary(index)}
                        className="absolute top-2 right-2 p-1 text-red-400 hover:text-red-600 focus:outline-none cursor-pointer"
                      >
                        <RiDeleteBin6Line className="text-sm" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Highlights, Inclusions, Exclusions */}
            <div className="space-y-6">
              {/* Highlights List */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wide">Key Highlights</h4>
                  <button
                    type="button"
                    onClick={() => appendHighlight('')}
                    className="text-[9px] font-bold bg-slate-100 hover:bg-slate-200 text-gray-600 px-2 py-0.5 rounded cursor-pointer"
                  >
                    + Add Highlight
                  </button>
                </div>
                <div className="space-y-2 max-h-[120px] overflow-y-auto pr-2">
                  {highlightFields.map((field, idx) => (
                    <div key={field.id} className="flex gap-2">
                      <input
                        type="text"
                        {...register(`highlights.${idx}`)}
                        placeholder="e.g. VIP Darshan at Meenakshi Amman Temple"
                        className="w-full px-3 py-2 bg-slate-50 border border-gray-150 rounded-lg text-xs font-semibold outline-none text-primary"
                      />
                      {idx > 0 && (
                        <button type="button" onClick={() => removeHighlight(idx)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer">
                          <RiDeleteBin6Line />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions List */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wide">Inclusions</h4>
                  <button
                    type="button"
                    onClick={() => appendInclusion('')}
                    className="text-[9px] font-bold bg-slate-100 hover:bg-slate-200 text-gray-600 px-2 py-0.5 rounded cursor-pointer"
                  >
                    + Add Inclusion
                  </button>
                </div>
                <div className="space-y-2 max-h-[120px] overflow-y-auto pr-2">
                  {inclusionFields.map((field, idx) => (
                    <div key={field.id} className="flex gap-2">
                      <input
                        type="text"
                        {...register(`inclusions.${idx}`)}
                        placeholder="e.g. Premium Chauffeur Driven Sedan"
                        className="w-full px-3 py-2 bg-slate-50 border border-gray-150 rounded-lg text-xs font-semibold outline-none text-primary"
                      />
                      {idx > 0 && (
                        <button type="button" onClick={() => removeInclusion(idx)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer">
                          <RiDeleteBin6Line />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions List */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wide">Exclusions</h4>
                  <button
                    type="button"
                    onClick={() => appendExclusion('')}
                    className="text-[9px] font-bold bg-slate-100 hover:bg-slate-200 text-gray-600 px-2 py-0.5 rounded cursor-pointer"
                  >
                    + Add Exclusion
                  </button>
                </div>
                <div className="space-y-2 max-h-[120px] overflow-y-auto pr-2">
                  {exclusionFields.map((field, idx) => (
                    <div key={field.id} className="flex gap-2">
                      <input
                        type="text"
                        {...register(`exclusions.${idx}`)}
                        placeholder="e.g. Monument Entry Fees & Guide Charges"
                        className="w-full px-3 py-2 bg-slate-50 border border-gray-150 rounded-lg text-xs font-semibold outline-none text-primary"
                      />
                      {idx > 0 && (
                        <button type="button" onClick={() => removeExclusion(idx)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer">
                          <RiDeleteBin6Line />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section D: Media & SEO */}
        <div className="space-y-4 pt-6">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wide border-l-4 border-gold pl-2">Media & SEO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Image inputs */}
            <div className="space-y-1">
              <ImageUploader
                value={thumbnailVal}
                onChange={(val) => setValue('image', val)}
                label="Package Thumbnail Image"
              />
            </div>

            {/* Right Column: SEO Fields */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wide border-b border-gray-50 pb-2">SEO Optimization</h4>
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Meta Title</label>
                <input
                  type="text"
                  {...register('seoTitle')}
                  placeholder="e.g. Luxury Temple Tour Packages Tamil Nadu | RIR Travels"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Meta Description</label>
                <textarea
                  rows="3"
                  {...register('seoDesc')}
                  placeholder="Summarize the luxury tour package highlights for google search results"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-150 rounded-xl text-xs font-semibold outline-none focus:border-gold text-primary"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

    </form>
  );
}
