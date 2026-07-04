import React, { forwardRef } from 'react';

// Reusable Text/Email/Number Input Component
export const Input = forwardRef(({
  label,
  error,
  type = 'text',
  id,
  className = '',
  placeholder = '',
  required = false,
  ...props
}, ref) => {
  return (
    <div className={`flex flex-col text-left w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1.5 font-sans">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg font-sans text-sm outline-none transition-all duration-200 ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100'
            : 'border-gray-200 focus:border-primary-light focus:bg-white focus:ring-2 focus:ring-primary/10'
        }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{error}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Reusable Textarea Component
export const Textarea = forwardRef(({
  label,
  error,
  id,
  className = '',
  placeholder = '',
  rows = 4,
  required = false,
  ...props
}, ref) => {
  return (
    <div className={`flex flex-col text-left w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1.5 font-sans">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        ref={ref}
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg font-sans text-sm outline-none resize-none transition-all duration-200 ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100'
            : 'border-gray-200 focus:border-primary-light focus:bg-white focus:ring-2 focus:ring-primary/10'
        }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{error}</span>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

// Reusable Select Dropdown Component
export const Select = forwardRef(({
  label,
  error,
  id,
  options = [],
  className = '',
  placeholder = 'Select an option',
  required = false,
  ...props
}, ref) => {
  return (
    <div className={`flex flex-col text-left w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1.5 font-sans">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          ref={ref}
          className={`w-full px-4 py-3 bg-gray-50 border rounded-lg font-sans text-sm outline-none appearance-none transition-all duration-200 ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-200 focus:border-primary-light focus:bg-white focus:ring-2 focus:ring-primary/10'
          }`}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
      {error && (
        <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{error}</span>
      )}
    </div>
  );
});

Select.displayName = 'Select';
