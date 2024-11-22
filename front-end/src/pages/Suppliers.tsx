import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SupplierTable from '../components/suppliers/SupplierTable';
import SupplierForm from '../components/suppliers/SupplierForm';
import SearchBar from '../components/suppliers/SearchBar';

const Suppliers = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      {showForm ? (
        <SupplierForm onClose={() => setShowForm(false)} />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Meus Fornecedores</h1>
              <p className="text-gray-600">Gerencie seus fornecedores cadastrados</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Cadastrar Fornecedor
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <SearchBar />
            </div>
            <SupplierTable />
          </div>
        </>
      )}
    </div>
  );
};

export default Suppliers;