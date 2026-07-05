import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import ScrollToTop from './components/common/ScrollToTop';
import { SettingsProvider } from './contexts/SettingsContext';

export default function App() {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <ScrollToTop />
        <AppRoutes />
      </SettingsProvider>
    </BrowserRouter>
  );
}
