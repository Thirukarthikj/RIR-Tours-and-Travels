import React from 'react';
import { motion } from 'framer-motion';
import { RiUserLine, RiBriefcaseLine, RiSettings3Line } from 'react-icons/ri';
import Button from '../common/Button';

export default function VehicleCard({ vehicle, onEnquire }) {
  const { name, category, tag, seats, bags, image, description } = vehicle;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,33,64,0.05)] border border-gray-100 overflow-hidden flex flex-col text-left group cursor-pointer"
      whileHover={{ y: -6, boxShadow: "0_12px_30px_-6px_rgba(0,33,64,0.1)" }}
      transition={{ duration: 0.3 }}
      onClick={() => onEnquire && onEnquire(vehicle)}
    >
      {/* Visual Frame */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {tag && (
          <span className="absolute top-4 right-4 bg-gold-light/95 backdrop-blur-sm text-primary font-sans text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest shadow-sm">
            {tag}
          </span>
        )}
      </div>

      {/* Info Body */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-[11px] font-bold tracking-widest text-secondary uppercase font-sans">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-bold font-display text-primary leading-snug mb-2">
            {name}
          </h3>
          <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>

          {/* Core Specs Grid */}
          <div className="flex items-center gap-x-4 gap-y-2 flex-wrap py-3 px-4 bg-slate-50 border border-slate-100 rounded-xl mb-4 text-xs font-sans text-gray-600 font-medium">
            <div className="flex items-center gap-1.5">
              <RiUserLine className="text-primary text-sm" />
              <span>{seats} Seats</span>
            </div>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <RiBriefcaseLine className="text-primary text-sm" />
              <span>{bags} Bags</span>
            </div>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <RiSettings3Line className="text-primary text-sm" />
              <span>Climate Control</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onEnquire && onEnquire(vehicle);
          }}
          variant="outline"
          className="w-full font-semibold border-gray-200 text-primary hover:bg-primary hover:text-white"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
}
