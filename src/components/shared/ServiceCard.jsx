import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/ri';

export default function ServiceCard({ service }) {
  const { title, icon, description } = service;
  
  // Resolve icon component dynamically from react-icons/ri
  const IconComponent = Icons[icon] || Icons.RiCarLine;

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,33,64,0.05)] border border-gray-100 text-left relative overflow-hidden group cursor-pointer"
      whileHover={{ y: -6, boxShadow: "0_12px_30px_-6px_rgba(0,33,64,0.12)" }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Accent strip */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      {/* Icon frame */}
      <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <IconComponent className="text-xl" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold font-display text-primary mb-3 transition-colors group-hover:text-primary-light">
        {title}
      </h3>
      <p className="text-sm text-gray-500 font-sans leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
