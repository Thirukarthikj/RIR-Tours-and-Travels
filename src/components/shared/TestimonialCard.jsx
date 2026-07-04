import React from 'react';
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri';

export default function TestimonialCard({ testimonial }) {
  const { name, role, rating, text, avatar } = testimonial;

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.04)] relative text-left h-full flex flex-col justify-between">
      <RiDoubleQuotesL className="text-4xl text-slate-100 absolute top-6 right-6 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Star rating icons */}
        <div className="flex space-x-1 mb-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <RiStarFill
              key={index}
              className={`text-sm ${
                index < rating ? 'text-[#EAB308]' : 'text-gray-200'
              }`}
            />
          ))}
        </div>
        
        {/* Quote text body */}
        <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6 font-medium italic">
          "{text}"
        </p>
      </div>

      {/* User profile identifier */}
      <div className="flex items-center space-x-3.5 relative z-10">
        <img
          src={avatar}
          alt={name}
          className="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-sm"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-sm text-primary font-sans leading-snug">
            {name}
          </h4>
          <p className="text-xs text-gray-400 font-sans font-medium">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
