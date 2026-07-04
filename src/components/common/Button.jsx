import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'gold' | 'outline' | 'whatsapp'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  disabled = false,
  icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-light focus:ring-primary-light shadow-md',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary-dark shadow-md',
    gold: 'bg-gold text-white hover:bg-gold-dark focus:ring-gold-dark shadow-md',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    outlineWhite: 'border border-white/30 text-white hover:bg-white hover:text-primary focus:ring-white',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BA56] focus:ring-[#25D366] shadow-md font-semibold',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 inline-flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </>
  );

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles} 
        ${sizeStyles[size]} 
        ${variantStyles[variant]} 
        ${disabled ? 'opacity-50 cursor-not-allowed shadow-none' : 'cursor-pointer'} 
        ${className}
      `}
      {...props}
    >
      {content}
    </motion.button>
  );
}
