import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      {tag && (
        <span className={`text-xs md:text-sm font-semibold tracking-widest uppercase block mb-2 font-sans ${light ? 'text-gold-light' : 'text-gold'}`}>
          {tag}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm md:text-base max-w-2xl font-sans leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
