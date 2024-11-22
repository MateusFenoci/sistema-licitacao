import React, { useState } from 'react';
import { Plus, Fuel, TrendingUp } from 'lucide-react';
import FuelEntryForm from '../components/fuel/FuelEntryForm';
import FuelTable from '../components/fuel/FuelTable';
import FuelReport from '../components/fuel/FuelReport';

const FuelPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      {showForm ? (
        <FuelEntryForm onClose={() => setShowForm(false)} />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Controle de Abastecimento</h1>
              <p className="text-gray-600">Gerencie os abastecimentos da sua frota</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Novo Abastecimento
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Histórico de Abastecimentos</h2>
                <Fuel className="h-5 w-5 text-gray-400" />
              </div>
              <FuelTable />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Relatório de Gastos</h2>
                <TrendingUp className="h-5 w-5 text-gray-400" />
              </div>
              <FuelReport />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FuelPage;