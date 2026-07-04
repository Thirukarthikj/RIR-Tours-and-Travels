import React from 'react';
import { motion } from 'framer-motion';
import { RiStarFill, RiTimeLine, RiCarLine, RiCheckLine } from 'react-icons/ri';
import Button from '../common/Button';

export default function PackageCard({ pkg, onDetails, onEnquire }) {
  const { title, tag, rating, duration, vehicle, highlights, image, description } = pkg;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,33,64,0.06)] border border-gray-100 overflow-hidden flex flex-col text-left group"
      whileHover={{ y: -6, boxShadow: "0_15px_35px_-8px_rgba(0,33,64,0.12)" }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {/* Top Media Cover */}
      <div className="relative h-64 overflow-hidden bg-slate-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Sticky badges */}
        {tag && (
          <span className={`absolute top-4 left-4 text-[10px] font-bold font-sans tracking-widest px-2.5 py-1.5 rounded-md uppercase shadow-sm ${
            tag === 'Bestseller' 
              ? 'bg-gold text-white' 
              : tag === 'Romantic Escape' 
                ? 'bg-secondary-dark text-white' 
                : 'bg-primary text-white'
          }`}>
            {tag}
          </span>
        )}

        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center text-xs font-bold text-gray-800 shadow-sm">
          <RiStarFill className="text-[#EAB308] mr-1" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Card Content body */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-display text-primary mb-3 leading-tight group-hover:text-primary-light transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>

          {/* Quick Stats Chips */}
          <div className="flex flex-wrap gap-2 mb-5 text-xs font-sans font-medium text-gray-600">
            <span className="bg-slate-50 border border-slate-100 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
              <RiTimeLine className="text-primary text-sm" />
              {duration}
            </span>
            <span className="bg-slate-50 border border-slate-100 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
              <RiCarLine className="text-primary text-sm" />
              {vehicle}
            </span>
          </div>

          {/* Bullet points list */}
          <ul className="space-y-2 mb-6 text-xs text-gray-600 font-sans">
            {highlights.map((hl, index) => (
              <li key={index} className="flex items-start">
                <RiCheckLine className="text-secondary text-base mr-2 shrink-0 mt-0.5" />
                <span className="leading-snug">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Button
            onClick={() => onDetails && onDetails(pkg)}
            variant="outline"
            className="w-full text-xs font-semibold py-2.5 border-gray-200 text-primary hover:bg-slate-50"
          >
            Details
          </Button>
          <Button
            onClick={() => onEnquire && onEnquire(pkg)}
            variant="secondary"
            className="w-full text-xs font-semibold py-2.5"
          >
            Enquire
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
