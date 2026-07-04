import React, { useState, useEffect } from 'react';
import { RiAddLine } from 'react-icons/ri';
import { adminService } from '../../services/adminService';
import DataTable from '../../components/common/DataTable';
import VehicleForm from '../../components/forms/VehicleForm';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);

  const fetchVehicles = () => {
    setVehicles(adminService.getVehicles());
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleEdit = (v) => {
    setEditingVehicle(v);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this vehicle from inventory?")) {
      adminService.deleteVehicle(id);
      fetchVehicles();
    }
  };

  const handleCreateNew = () => {
    setEditingVehicle(null);
    setIsFormOpen(true);
  };

  const handleSave = (data) => {
    adminService.saveVehicle(data);
    setIsFormOpen(false);
    setEditingVehicle(null);
    fetchVehicles();
  };

  const columns = [
    {
      header: 'Vehicle Image',
      accessor: 'image',
      render: (row) => (
        <img
          src={row.image || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=200'}
          alt={row.name}
          className="w-12 h-9 rounded object-cover bg-slate-100 border border-gray-150"
        />
      )
    },
    { header: 'Vehicle Name', accessor: 'name' },
    { header: 'Category', accessor: 'category' },
    { header: 'Seats', accessor: 'seats' },
    { header: 'AC Type', accessor: 'ac' },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => {
        const colors = {
          Available: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
          Booked: 'bg-blue-500/10 text-blue-600 border border-blue-500/20',
          Maintenance: 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
        };
        const statusVal = row.status || 'Available';
        return (
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${colors[statusVal] || colors.Available}`}>
            {statusVal}
          </span>
        );
      }
    },
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
    }
  ];

  return (
    <div className="space-y-6 text-left font-sans">
      
      {/* View Title Toolbar */}
      {!isFormOpen && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold font-display text-primary">Cab Management</h1>
            <p className="text-xs text-gray-400 mt-1">Manage luxury sedans, SUVs, tempo travellers, and coaches assigned for customer transits</p>
          </div>
          <button
            onClick={handleCreateNew}
            className="px-4 py-2.5 bg-gold hover:bg-gold-light text-white text-xs font-bold rounded-xl flex items-center gap-1.5 focus:outline-none cursor-pointer shadow-sm shadow-gold/25"
          >
            <RiAddLine className="text-base" /> Register New Cab
          </button>
        </div>
      )}

      {/* Editor or Table list content */}
      {isFormOpen ? (
        <VehicleForm
          initialData={editingVehicle}
          onSave={handleSave}
          onCancel={() => setIsFormOpen(false)}
        />
      ) : (
        <DataTable
          columns={columns}
          data={vehicles}
          searchPlaceholder="Search vehicles by name..."
          searchKey="name"
          categoryFilterKey="category"
          categoryOptions={['Hatchback', 'Sedan', 'SUV', 'Tempo Traveller', 'Luxury Coach']}
          onEdit={handleEdit}
          onDelete={handleDelete}
          exportFileName="rir-cab-inventory"
        />
      )}

    </div>
  );
}
