import React, { useState } from 'react';
import { Plus, AlertTriangle, TrendingUp } from 'lucide-react';
import FineForm from '../components/fines/FineForm';
import FineTable from '../components/fines/FineTable';
import FineReport from '../components/fines/FineReport';

const FinesPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      {showForm ? (
        <FineForm onClose={() => setShowForm(false)} />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Controle de Multas</h1>
              <p className="text-gray-600">Gerencie as multas da sua frota</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Nova Multa
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Histórico de Multas</h2>
                <AlertTriangle className="h-5 w-5 text-gray-400" />
              </div>
              <FineTable />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Relatório de Gastos</h2>
                <TrendingUp className="h-5 w-5 text-gray-400" />
              </div>
              <FineReport />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FinesPage;