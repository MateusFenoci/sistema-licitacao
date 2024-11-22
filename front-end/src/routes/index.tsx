import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Vehicles from '../pages/Vehicles';
import Suppliers from '../pages/Suppliers';
import Inventory from '../pages/Inventory';
import Services from '../pages/Services';
import Employees from '../pages/Employees';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/services" element={<Services />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;