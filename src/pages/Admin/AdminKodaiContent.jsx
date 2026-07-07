import React, { useState, useEffect } from 'react';
import { RiAddLine, RiCompass3Line, RiRoadsterLine, RiHotelBedLine, RiMapPin2Line } from 'react-icons/ri';
import { adminService } from '../../services/adminService';
import DataTable from '../../components/common/DataTable';
import { TourPackageForm, JeepSafariForm, StayForm, SightseeingForm } from '../../components/forms/KodaiForms';

const TABS = [
  { id: 'packages', label: 'Tour Packages', icon: RiCompass3Line, collection: 'kodai_tours' },
  { id: 'safari', label: 'Jeep Safari', icon: RiRoadsterLine, collection: 'kodai_safaris' },
  { id: 'accommodation', label: 'Accommodations', icon: RiHotelBedLine, collection: 'kodai_stays' },
  { id: 'sightseeing', label: 'Sightseeing', icon: RiMapPin2Line, collection: 'kodai_sightseeing' }
];

export default function AdminKodaiContent() {
  const [activeTab, setActiveTab] = useState('packages');
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const activeTabData = TABS.find(t => t.id === activeTab);

  const fetchData = () => {
    adminService.getKodaiData(activeTabData.collection).then(res => setData(res));
  };

  useEffect(() => {
    fetchData();
    setIsFormOpen(false);
    setEditingItem(null);
  }, [activeTab]);

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await adminService.deleteKodaiData(activeTabData.collection, id);
      fetchData();
    }
  };

  const handleCreateNew = () => {
    setEditingItem(null);
    setIsFormOpen(true);
  };

  const handleSave = async (itemData) => {
    await adminService.saveKodaiData(activeTabData.collection, itemData);
    setIsFormOpen(false);
    setEditingItem(null);
    fetchData();
  };

  // Define columns dynamically based on active tab
  const getColumns = () => {
    const baseColumns = [
      {
        header: 'Image',
        accessor: 'image',
        render: (row) => (
          <img src={row.image || 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=200'} alt={row.title} className="w-12 h-9 rounded object-cover bg-slate-100 border border-gray-150" />
        )
      },
      { header: 'Title', accessor: 'title' }
    ];

    if (activeTab === 'packages') return [...baseColumns, { header: 'Duration', accessor: 'duration' }, { header: 'Capacity', accessor: 'capacity' }];
    if (activeTab === 'safari') return [...baseColumns, { header: 'Capacity', accessor: 'subtitle' }];
    if (activeTab === 'accommodation') return [...baseColumns, { header: 'Category', accessor: 'tag' }, { header: 'Guests', accessor: 'guests' }];
    if (activeTab === 'sightseeing') return [...baseColumns, { header: 'Footer Text', accessor: 'footerText' }];
    
    return baseColumns;
  };

  const renderForm = () => {
    if (activeTab === 'packages') return <TourPackageForm initialData={editingItem} onSave={handleSave} onCancel={() => setIsFormOpen(false)} />;
    if (activeTab === 'safari') return <JeepSafariForm initialData={editingItem} onSave={handleSave} onCancel={() => setIsFormOpen(false)} />;
    if (activeTab === 'accommodation') return <StayForm initialData={editingItem} onSave={handleSave} onCancel={() => setIsFormOpen(false)} />;
    if (activeTab === 'sightseeing') return <SightseeingForm initialData={editingItem} onSave={handleSave} onCancel={() => setIsFormOpen(false)} />;
    return null;
  };

  return (
    <div className="space-y-6">
      
      {!isFormOpen && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold font-display text-primary">Kodai Content Management</h1>
            <p className="text-xs text-gray-400 mt-1">Manage content sections displayed on the Kodaikanal Tour Packages public page.</p>
          </div>
          <button onClick={handleCreateNew} className="px-4 py-2.5 bg-gold hover:bg-gold-light text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm shadow-gold/25">
            <RiAddLine className="text-base" /> Create New {activeTabData.label}
          </button>
        </div>
      )}

      {/* Tabs */}
      {!isFormOpen && (
        <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 p-1.5 overflow-x-auto w-full max-w-max">
          {TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-slate-50 hover:text-gray-900'
                }`}
              >
                <Icon className={isActive ? 'text-gold' : 'text-gray-400'} />
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Content */}
      {isFormOpen ? (
        renderForm()
      ) : (
        <DataTable
          columns={getColumns()}
          data={data}
          searchPlaceholder={`Search ${activeTabData.label} by title...`}
          searchKey="title"
          onEdit={handleEdit}
          onDelete={handleDelete}
          exportFileName={`rir-kodai-${activeTab}`}
        />
      )}
    </div>
  );
}
