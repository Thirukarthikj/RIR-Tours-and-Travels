import React, { useState, useEffect } from 'react';
import { RiAddLine } from 'react-icons/ri';
import { adminService } from '../../services/adminService';
import DataTable from '../../components/common/DataTable';
import PackageForm from '../../components/forms/PackageForm';
import { PACKAGES } from '../../constants';

export default function Packages() {
  const [packages, setPackages] = useState(PACKAGES);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);

  const fetchPackages = () => {
    adminService.getPackages().then(async (data) => {
      if (data.length > 20) {
        console.log("Cleaning up duplicates...");
        const seen = new Set();
        const toKeep = [];
        const toDelete = [];
        for (const pkg of data) {
          if (seen.has(pkg.title)) {
            toDelete.push(pkg.id);
          } else {
            seen.add(pkg.title);
            toKeep.push(pkg);
          }
        }
        setPackages(toKeep);
        
        // Delete duplicates in the background to not freeze UI
        for (let i = 0; i < toDelete.length; i++) {
          await adminService.deletePackage(toDelete[i]);
          if (i % 50 === 0) console.log(`Deleted ${i} duplicates...`);
        }
        console.log("Finished deleting all duplicates");
      } else {
        setPackages(data);
      }
    });
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      await adminService.deletePackage(id);
      fetchPackages();
    }
  };

  const handleCreateNew = () => {
    setEditingPackage(null);
    setIsFormOpen(true);
  };

  const handleSave = async (data) => {
    await adminService.savePackage(data);
    setIsFormOpen(false);
    setEditingPackage(null);
    fetchPackages();
  };

  // Define table column schemas
  const columns = [
    {
      header: 'Image',
      accessor: 'image',
      render: (row) => (
        <img 
          src={row.image || 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=200'} 
          alt={row.title} 
          className="w-12 h-9 rounded object-cover bg-slate-100 border border-gray-150"
        />
      )
    },
    { header: 'Package Name', accessor: 'title' },
    { header: 'Destination', accessor: 'destination' },
    { header: 'Duration', accessor: 'duration' },
    { header: 'Category', accessor: 'region' },
    {
      header: 'Featured',
      accessor: 'featured',
      render: (row) => (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          row.featured 
            ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20' 
            : 'bg-slate-100 text-gray-400'
        }`}>
          {row.featured ? 'Yes' : 'No'}
        </span>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => (
        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
          row.status === 'Active' 
            ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' 
            : 'bg-gray-100 text-gray-500 border border-gray-200'
        }`}>
          {row.status || 'Active'}
        </span>
      )
    },
    {
      header: 'Created Date',
      accessor: 'createdDate',
      render: (row) => <span>{row.createdDate || '2026-07-04'}</span>
    }
  ];

  return (
    <div className="space-y-6 text-left font-sans">
      
      {/* Page header and controls */}
      {!isFormOpen && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold font-display text-primary">Package Management</h1>
            <p className="text-xs text-gray-400 mt-1">Configure and manage public-facing road trip tours across Tamil Nadu, Kerala, and Bengaluru</p>
          </div>
          <button
            onClick={handleCreateNew}
            className="px-4 py-2.5 bg-gold hover:bg-gold-light text-white text-xs font-bold rounded-xl flex items-center gap-1.5 focus:outline-none cursor-pointer shadow-sm shadow-gold/25"
          >
            <RiAddLine className="text-base" /> Create New Package
          </button>
        </div>
      )}

      {/* Dynamic Content Panel */}
      {isFormOpen ? (
        <PackageForm
          initialData={editingPackage}
          onSave={handleSave}
          onCancel={() => setIsFormOpen(false)}
        />
      ) : (
        <DataTable
          columns={columns}
          data={packages}
          searchPlaceholder="Search packages by title..."
          searchKey="title"
          categoryFilterKey="region"
          categoryOptions={['Spiritual', 'Hill Station', 'Coastal']}
          onEdit={handleEdit}
          onDelete={handleDelete}
          exportFileName="rir-tour-packages"
        />
      )}

    </div>
  );
}
