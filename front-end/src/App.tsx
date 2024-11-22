import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';
import { Truck } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <header className="mb-8">
            <div className="flex items-center gap-4">
              <Truck className="h-10 w-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Diesel Transporte</h1>
                <p className="text-gray-600">Sistema de Gestão de Frota</p>
              </div>
            </div>
          </header>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;