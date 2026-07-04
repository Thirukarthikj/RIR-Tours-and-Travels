import React from 'react';
import { motion } from 'framer-motion';

export default function GalleryCard({ image }) {
  const { title, url, category } = image;

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-square group cursor-pointer shadow-md"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {/* Target Image */}
      <img
        src={url}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient Backdrop Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-left">
        <span className="text-[9px] font-bold uppercase tracking-widest text-gold-light mb-1 font-sans">
          {category}
        </span>
        <h4 className="text-white font-bold font-display text-base leading-snug">
          {title}
        </h4>
      </div>
      
      {/* Soft title displayed on bottom of the image initially before hover */}
      <div className="absolute bottom-4 left-4 right-4 bg-primary-dark/70 backdrop-blur-sm px-3.5 py-2 rounded-lg group-hover:opacity-0 transition-opacity duration-300 text-left border border-white/5">
        <h4 className="text-white font-semibold font-display text-sm leading-tight line-clamp-1">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}
