import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import VehicleTable from '../components/vehicles/VehicleTable';
import VehicleForm from '../components/vehicles/VehicleForm';
import VehicleFilter from '../components/vehicles/VehicleFilter';

const Vehicles = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'active' | 'inactive'>('active');

  return (
    <div className="space-y-6">
      {showForm ? (
        <VehicleForm onClose={() => setShowForm(false)} />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Meus Veículos</h1>
              <p className="text-gray-600">Gerencie sua frota de veículos</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Cadastrar Veículo
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <VehicleFilter activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            <VehicleTable status={activeTab} />
          </div>
        </>
      )}
    </div>
  );
};

export default Vehicles;