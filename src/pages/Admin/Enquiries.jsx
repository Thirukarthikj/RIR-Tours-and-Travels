import React, { useState, useEffect } from 'react';
import { RiMailLine, RiPhoneLine, RiDeleteBin6Line, RiCheckLine, RiMailSendLine, RiCloseLine } from 'react-icons/ri';
import { adminService } from '../../services/adminService';
import DataTable from '../../components/common/DataTable';

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [activeEnquiry, setActiveEnquiry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchEnquiries = () => {
    adminService.getEnquiries().then(data => {
      setEnquiries(data);
    });
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleOpenModal = (enq) => {
    setActiveEnquiry(enq);
    setIsModalOpen(true);
  };

  const handleStatusChange = async (id, newStatus) => {
    await adminService.updateEnquiryStatus(id, newStatus);
    fetchEnquiries();
    if (activeEnquiry && activeEnquiry.id === id) {
      setActiveEnquiry(prev => ({ ...prev, status: newStatus }));
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry entry?")) {
      await adminService.deleteEnquiry(id);
      setIsModalOpen(false);
      fetchEnquiries();
    }
  };

  const columns = [
    {
      header: 'Date',
      accessor: 'date',
      render: (row) => <span>{row.date ? row.date.split('T')[0] : '2026-07-04'}</span>
    },
    { header: 'Customer Name', accessor: 'name' },
    {
      header: 'Contact Coordinates',
      accessor: 'email',
      render: (row) => (
        <div className="space-y-0.5 text-left text-[11px]">
          <div className="flex items-center gap-1.5 text-primary">
            <RiPhoneLine className="text-gray-400" /> <span>{row.phone}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <RiMailLine className="text-gray-400" /> <span>{row.email}</span>
          </div>
        </div>
      )
    },
    {
      header: 'Requested Service',
      accessor: 'package',
      render: (row) => (
        <div className="text-left space-y-0.5 text-[11px]">
          {row.package && <span className="text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded font-bold uppercase text-[9px] block w-fit">Tour: {row.package}</span>}
          {row.vehicle && <span className="text-indigo-600 bg-indigo-500/10 px-2 py-0.5 rounded font-bold uppercase text-[9px] block w-fit mt-0.5">Cab: {row.vehicle}</span>}
        </div>
      )
    },
    {
      header: 'Message Preview',
      accessor: 'message',
      render: (row) => <span className="text-gray-400 truncate max-w-xs block">{row.message}</span>
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => {
        const colors = {
          New: 'bg-red-500/10 text-red-500 border border-red-500/20',
          Contacted: 'bg-blue-500/10 text-blue-600 border border-blue-500/20',
          Resolved: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
        };
        const statusVal = row.status || 'New';
        return (
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${colors[statusVal] || colors.New}`}>
            {statusVal}
          </span>
        );
      }
    }
  ];

  return (
    <div className="space-y-6 text-left font-sans">
      
      {/* View Header */}
      <div>
        <h1 className="text-2xl font-bold font-display text-primary">Customer Enquiries</h1>
        <p className="text-xs text-gray-400 mt-1">Review, track, and manage travel booking enquiries submitted by tourists</p>
      </div>

      {/* Leads listing table */}
      <DataTable
        columns={columns}
        data={enquiries}
        searchPlaceholder="Search enquiries by customer name..."
        searchKey="name"
        categoryFilterKey="status"
        categoryOptions={['New', 'Contacted', 'Resolved']}
        onView={handleOpenModal}
        onDelete={handleDelete}
        exportFileName="rir-customer-enquiries"
      />

      {/* 3. Detailed enquiry popup modal */}
      {isModalOpen && activeEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg border border-gray-100 shadow-2xl p-6 md:p-8 space-y-6 relative text-left">
            
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-50 rounded-full text-gray-400 hover:text-primary focus:outline-none cursor-pointer"
            >
              <RiCloseLine className="text-xl" />
            </button>

            {/* Modal Heading */}
            <div className="border-b border-gray-100 pb-4 space-y-1.5">
              <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full border uppercase ${
                activeEnquiry.status === 'New'
                  ? 'bg-red-500/10 text-red-500 border-red-500/20'
                  : activeEnquiry.status === 'Contacted'
                    ? 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                    : 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
              }`}>
                {activeEnquiry.status} Enquiry
              </span>
              <h2 className="text-xl font-bold text-primary font-display">Message Detail</h2>
              <span className="text-[10px] text-gray-400">Received on: {activeEnquiry.date ? activeEnquiry.date.replace('T', ' ').split('.')[0] : '2026-07-04'}</span>
            </div>

            {/* Customer coordinates */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-gray-100 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Customer Name</span>
                <span className="font-bold text-primary block">{activeEnquiry.name}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Phone Number</span>
                <span className="font-bold text-primary block">{activeEnquiry.phone}</span>
              </div>
              <div className="space-y-1 col-span-2 border-t border-gray-200/50 pt-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Email Address</span>
                <span className="font-bold text-primary block">{activeEnquiry.email}</span>
              </div>
            </div>

            {/* Tour / Cab requested */}
            {(activeEnquiry.package || activeEnquiry.vehicle) && (
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Interest Coordinates</span>
                <div className="flex gap-2.5">
                  {activeEnquiry.package && <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-lg">Package: {activeEnquiry.package}</span>}
                  {activeEnquiry.vehicle && <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 rounded-lg">Cab: {activeEnquiry.vehicle}</span>}
                </div>
              </div>
            )}

            {/* Note body message */}
            <div className="space-y-1 bg-slate-50/50 border border-slate-100 p-4 rounded-2xl">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Customer Message</span>
              <p className="text-xs text-gray-600 font-sans leading-relaxed whitespace-pre-wrap pt-1">{activeEnquiry.message}</p>
            </div>

            {/* Bottom Actions footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5">
              
              {/* Change status actions */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mr-1">Mark Status:</span>
                <button
                  onClick={() => handleStatusChange(activeEnquiry.id, 'Contacted')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1 cursor-pointer focus:outline-none ${
                    activeEnquiry.status === 'Contacted'
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                  }`}
                >
                  <RiMailSendLine /> Contacted
                </button>
                <button
                  onClick={() => handleStatusChange(activeEnquiry.id, 'Resolved')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1 cursor-pointer focus:outline-none ${
                    activeEnquiry.status === 'Resolved'
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                  }`}
                >
                  <RiCheckLine /> Resolved
                </button>
              </div>

              {/* Delete trigger */}
              <button
                onClick={() => handleDelete(activeEnquiry.id)}
                className="px-3 py-1.5 hover:bg-red-50 text-red-500 rounded-lg text-[10px] font-bold flex items-center gap-1 cursor-pointer focus:outline-none"
              >
                <RiDeleteBin6Line /> Delete Enquiry
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
