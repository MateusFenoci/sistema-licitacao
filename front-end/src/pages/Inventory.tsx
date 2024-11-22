import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import StockEntryForm from '../components/inventory/StockEntryForm';
import StockExitForm from '../components/inventory/StockExitForm';
import InventoryTable from '../components/inventory/InventoryTable';

const Inventory = () => {
  const [activeForm, setActiveForm] = useState<'none' | 'entry' | 'exit'>('none');

  return (
    <div className="space-y-6">
      {activeForm === 'entry' ? (
        <StockEntryForm onClose={() => setActiveForm('none')} />
      ) : activeForm === 'exit' ? (
        <StockExitForm onClose={() => setActiveForm('none')} />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Estoque</h1>
              <p className="text-gray-600">Gerencie entradas e saídas do estoque</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveForm('entry')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
                Entrada de Estoque
              </button>
              <button
                onClick={() => setActiveForm('exit')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
                Saída de Estoque
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <InventoryTable />
          </div>
        </>
      )}
    </div>
  );
};

export default Inventory;