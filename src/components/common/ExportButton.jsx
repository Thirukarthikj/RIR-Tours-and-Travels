import React, { useState } from 'react';
import { RiDownloadLine, RiFileTextLine, RiPrinterLine, RiArrowDownSLine } from 'react-icons/ri';

export default function ExportButton({ data, fileName = "export-data" }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Convert array data to CSV string and download
  const handleExportCSV = () => {
    setDropdownOpen(false);
    if (!data || data.length === 0) {
      alert("No data available for export.");
      return;
    }

    // Extract headers (keys from first object)
    const keys = Object.keys(data[0]).filter(k => typeof data[0][k] !== 'object');
    const csvRows = [];
    
    // Header Row
    csvRows.push(keys.join(','));

    // Data Rows
    for (const row of data) {
      const values = keys.map(key => {
        const escaped = ('' + (row[key] || '')).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${fileName}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Open simple Print Dialog
  const handlePrint = () => {
    setDropdownOpen(false);
    if (!data || data.length === 0) {
      alert("No data available to print.");
      return;
    }

    const printWindow = window.open("", "rir_print_window");
    const title = fileName.replace(/-/g, ' ').toUpperCase();
    
    const tableHeaders = Object.keys(data[0])
      .filter(k => typeof data[0][k] !== 'object')
      .map(k => `<th>${k.toUpperCase()}</th>`)
      .join('');

    const tableRows = data.map(row => {
      const cells = Object.keys(row)
        .filter(k => typeof row[k] !== 'object')
        .map(k => `<td>${row[k] || ''}</td>`)
        .join('');
      return `<tr>${cells}</tr>`;
    }).join('');

    printWindow.document.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { font-family: sans-serif; padding: 20px; color: #002140; }
            h1 { text-align: center; font-size: 20px; border-bottom: 2px solid #002140; padding-bottom: 10px; margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 11px; }
            th, td { border: 1px solid #e2e8f0; padding: 8px 10px; text-align: left; }
            th { bg-color: #f8fafc; font-weight: bold; }
            tr:nth-child(even) { background-color: #f8fafc; }
          </style>
        </head>
        <body>
          <h1>${title} - REPORT</h1>
          <table>
            <thead><tr>${tableHeaders}</tr></thead>
            <tbody>${tableRows}</tbody>
          </table>
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-gray-100 rounded-xl text-xs font-semibold hover:border-gold hover:text-gold transition-colors focus:outline-none cursor-pointer text-gray-600"
      >
        <RiDownloadLine className="text-sm" />
        <span>Export</span>
        <RiArrowDownSLine className="text-xs text-gray-400" />
      </button>

      {dropdownOpen && (
        <>
          <div onClick={() => setDropdownOpen(false)} className="fixed inset-0 z-20 cursor-default" />
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-2xl shadow-xl z-30 py-2 text-left text-xs font-semibold font-sans text-gray-700">
            
            <button
              onClick={handleExportCSV}
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 hover:text-gold transition-colors focus:outline-none cursor-pointer"
            >
              <RiFileTextLine className="text-base text-gray-400" />
              <span>Export as CSV</span>
            </button>

            <button
              onClick={handlePrint}
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 hover:text-gold transition-colors focus:outline-none cursor-pointer"
            >
              <RiPrinterLine className="text-base text-gray-400" />
              <span>Print Report</span>
            </button>

          </div>
        </>
      )}
    </div>
  );
}
