import React, { useState } from 'react';
import { RiSearchLine, RiDeleteBin6Line, RiEdit2Line, RiEyeLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import ExportButton from './ExportButton';

export default function DataTable({ 
  columns, 
  data, 
  searchPlaceholder = "Search...", 
  searchKey = "name",
  categoryFilterKey = "",
  categoryOptions = [],
  onEdit, 
  onDelete, 
  onView,
  exportFileName = "table-export"
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Search & Filter Logic
  const filteredData = data.filter(item => {
    const matchesSearch = item[searchKey]
      ? item[searchKey].toString().toLowerCase().includes(searchTerm.toLowerCase())
      : false;
      
    const matchesCategory = categoryFilterKey && selectedCategory
      ? item[categoryFilterKey] === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,33,64,0.02)] overflow-hidden font-sans">
      
      {/* 1. Header Toolbar (Search, Filter, Export) */}
      <div className="p-4 md:p-5 border-b border-gray-55 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Search & Category Filter */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <RiSearchLine className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className="pl-9 pr-4 py-2.5 bg-slate-50 border border-gray-100 rounded-xl text-xs font-semibold outline-none focus:border-gold transition-colors text-primary min-w-[200px]"
            />
          </div>

          {categoryFilterKey && categoryOptions.length > 0 && (
            <select
              value={selectedCategory}
              onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
              className="px-4 py-2.5 bg-slate-50 border border-gray-100 rounded-xl text-xs font-semibold outline-none text-gray-600 focus:border-gold cursor-pointer"
            >
              <option value="">All Categories</option>
              {categoryOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )}
        </div>

        {/* Export Button actions */}
        <ExportButton data={filteredData} fileName={exportFileName} />

      </div>

      {/* 2. Grid Table Body */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              {columns.map((col, idx) => (
                <th key={idx} className="px-6 py-4">{col.header}</th>
              ))}
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs font-medium text-primary">
            {paginatedData.length > 0 ? (
              paginatedData.map((item, rowIdx) => (
                <tr key={item.id || rowIdx} className="hover:bg-slate-50/50 transition-colors">
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} className="px-6 py-4">
                      {col.render ? col.render(item) : item[col.accessor]}
                    </td>
                  ))}
                  
                  {/* Action Triggers */}
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      {onView && (
                        <button
                          onClick={() => onView(item)}
                          className="p-1.5 hover:bg-slate-100 rounded text-gray-500 hover:text-primary transition-colors cursor-pointer focus:outline-none"
                          title="View Details"
                        >
                          <RiEyeLine className="text-sm" />
                        </button>
                      )}
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          className="p-1.5 hover:bg-amber-50 rounded text-amber-500 hover:text-amber-600 transition-colors cursor-pointer focus:outline-none"
                          title="Edit"
                        >
                          <RiEdit2Line className="text-sm" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item.id)}
                          className="p-1.5 hover:bg-red-50 rounded text-red-500 hover:text-red-600 transition-colors cursor-pointer focus:outline-none"
                          title="Delete"
                        >
                          <RiDeleteBin6Line className="text-sm" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="text-center py-12 text-gray-400 font-semibold font-sans text-xs">
                  No records found matching search filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 3. Footer Pagination row */}
      {totalPages > 1 && (
        <div className="p-4 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold text-gray-500">
          <span>
            Showing Page {currentPage} of {totalPages} ({filteredData.length} total entries)
          </span>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border border-gray-200 rounded-lg hover:border-gold hover:text-gold disabled:opacity-50 disabled:hover:text-gray-500 disabled:hover:border-gray-200 cursor-pointer focus:outline-none transition-colors"
            >
              <RiArrowLeftSLine className="text-sm" />
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all focus:outline-none cursor-pointer ${
                  currentPage === i + 1
                    ? 'bg-gold text-white shadow-sm'
                    : 'border border-gray-200 hover:border-gold hover:text-gold'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-200 rounded-lg hover:border-gold hover:text-gold disabled:opacity-50 disabled:hover:text-gray-500 disabled:hover:border-gray-200 cursor-pointer focus:outline-none transition-colors"
            >
              <RiArrowRightSLine className="text-sm" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
