import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/adminService';
import SettingsForm from '../../components/forms/SettingsForm';
import { RiCheckboxCircleLine } from 'react-icons/ri';

export default function Settings() {
  const [settings, setSettings] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [debugError, setDebugError] = useState(null);

  useEffect(() => {
    const handleError = (e) => {
      setDebugError(e.message + " at " + e.filename + ":" + e.lineno);
    };
    window.addEventListener('error', handleError);
    
    adminService.getSettings()
      .then(data => {
        setSettings(data);
      })
      .catch(err => {
        setDebugError("getSettings Promise rejected: " + err.message);
      });
      
    return () => window.removeEventListener('error', handleError);
  }, []);

  const handleSave = async (updatedSettings) => {
    try {
      const payload = settings && settings.id ? { id: settings.id, ...updatedSettings } : updatedSettings;
      const saved = await adminService.saveSettings(payload);
      setSettings(saved);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      setDebugError("saveSettings rejected: " + err.message);
    }
  };

  return (
    <div className="space-y-6 text-left font-sans">
      
      {/* Debug Error Banner */}
      {debugError && (
        <div className="p-4 bg-red-500 text-white rounded-xl text-xs font-mono">
          <strong>JS Runtime Error:</strong> {debugError}
        </div>
      )}
      
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

      {settings ? (
        <SettingsForm
          initialData={settings}
          onSave={handleSave}
        />
      ) : (
        <div className="p-12 text-center text-xs text-gray-400 bg-white rounded-2xl border border-gray-100">
          Loading settings options...
        </div>
      )}

    </div>
  );
}
