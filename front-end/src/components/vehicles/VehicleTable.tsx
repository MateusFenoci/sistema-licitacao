import React from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';

interface Vehicle {
  id: string;
  number: string;
  plate: string;
  brand: string;
  model: string;
  color: string;
  year: number;
  fuel: string;
  status: 'active' | 'inactive';
  driver: string;
}

interface VehicleTableProps {
  status: 'active' | 'inactive';
}

const VehicleTable: React.FC<VehicleTableProps> = ({ status }) => {
  // Mock data - replace with actual data fetching
  const vehicles: Vehicle[] = [
    {
      id: '001',
      number: 'VH001',
      plate: 'ABC-1234',
      brand: 'Mercedes-Benz',
      model: 'Atego 2430',
      color: 'Branco',
      year: 2022,
      fuel: 'Diesel S10',
      status: 'active',
      driver: 'João Silva',
    },
    {
      id: '002',
      number: 'VH002',
      plate: 'DEF-5678',
      brand: 'Volvo',
      model: 'FH 460',
      color: 'Azul',
      year: 2021,
      fuel: 'Diesel S10',
      status: 'active',
      driver: 'Maria Santos',
    },
  ].filter((vehicle) => vehicle.status === status);

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Número
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Placa
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Marca/Modelo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ano
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Combustível
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Motorista
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.number}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.plate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div>
                  <div className="font-medium">{vehicle.brand}</div>
                  <div className="text-gray-500">{vehicle.model}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.year}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.fuel}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vehicle.driver}
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

export default VehicleTable;