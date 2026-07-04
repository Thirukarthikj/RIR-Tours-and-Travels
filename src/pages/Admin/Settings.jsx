import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/adminService';
import SettingsForm from '../../components/forms/SettingsForm';
import { RiCheckboxCircleLine } from 'react-icons/ri';

export default function Settings() {
  const [settings, setSettings] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setSettings(adminService.getSettings());
  }, []);

  const handleSave = (updatedSettings) => {
    adminService.saveSettings(updatedSettings);
    setSettings(updatedSettings);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 text-left font-sans">
      
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-primary">Global Settings</h1>
          <p className="text-xs text-gray-400 mt-1">Configure global legal parameters, email footers, phone numbers, and maps links</p>
        </div>
        
        {/* Success Alert Banner */}
        {saveSuccess && (
          <span className="text-xs font-semibold bg-emerald-500/10 text-emerald-600 px-3.5 py-2 rounded-xl flex items-center gap-2 border border-emerald-500/15">
            <RiCheckboxCircleLine className="text-sm" /> Settings updated successfully
          </span>
        )}
      </div>

      {settings && (
        <SettingsForm
          initialData={settings}
          onSave={handleSave}
        />
      )}

    </div>
  );
}
