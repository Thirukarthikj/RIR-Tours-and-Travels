import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function Breadcrumb({ items = [], className = '' }) {
  return (
    <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
      <ol className="flex items-center space-x-2 text-xs md:text-sm font-sans text-gray-500">
        <li>
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <RiArrowRightSLine className="text-gray-400 text-sm" />
              {isLast || !item.path ? (
                <span className="font-semibold text-primary" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
