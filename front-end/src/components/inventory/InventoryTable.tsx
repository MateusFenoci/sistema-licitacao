import React from 'react';
import { Package, ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  lastMovement: {
    type: 'entry' | 'exit';
    date: string;
    quantity: number;
  };
}

const InventoryTable = () => {
  // Mock data - replace with actual data fetching
  const items: InventoryItem[] = [
    {
      id: '1',
      name: 'Filtro de Óleo',
      quantity: 15,
      unitPrice: 89.90,
      lastMovement: {
        type: 'entry',
        date: '2024-03-15',
        quantity: 5,
      },
    },
    {
      id: '2',
      name: 'Pneu 295/80 R22.5',
      quantity: 8,
      unitPrice: 2499.90,
      lastMovement: {
        type: 'exit',
        date: '2024-03-14',
        quantity: 2,
      },
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Item
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantidade
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Valor Unitário
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Valor Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Última Movimentação
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-gray-400 mr-3" />
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.quantity} unidades</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {item.unitPrice.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {(item.quantity * item.unitPrice).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {item.lastMovement.type === 'entry' ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-2" />
                  )}
                  <div className="text-sm text-gray-900">
                    {item.lastMovement.quantity} un. em{' '}
                    {new Date(item.lastMovement.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;