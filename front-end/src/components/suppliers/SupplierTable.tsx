import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

interface Supplier {
  id: string;
  name: string;
  document: string;
  description: string;
}

const SupplierTable = () => {
  // Mock data - replace with actual data fetching
  const suppliers: Supplier[] = [
    {
      id: '001',
      name: 'Auto Peças Silva',
      document: '12.345.678/0001-90',
      description: 'Fornecedor de peças automotivas para caminhões pesados',
    },
    {
      id: '002',
      name: 'Pneus & Cia',
      document: '98.765.432/0001-10',
      description: 'Fornecedor especializado em pneus para veículos pesados',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nome
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              CPF/CNPJ
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Descrição
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {suppliers.map((supplier) => (
            <tr key={supplier.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{supplier.document}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{supplier.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end gap-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierTable;