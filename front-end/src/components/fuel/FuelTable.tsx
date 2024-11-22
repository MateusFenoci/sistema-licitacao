import React from 'react';
import { Fuel, TrendingUp } from 'lucide-react';

interface FuelEntry {
  id: string;
  vehicle: {
    plate: string;
    model: string;
  };
  date: string;
  odometer: number;
  liters: number;
  pricePerLiter: number;
  efficiency: number;
}

const FuelTable = () => {
  // Mock data - replace with actual data fetching
  const entries: FuelEntry[] = [
    {
      id: '1',
      vehicle: {
        plate: 'ABC-1234',
        model: 'Mercedes-Benz Atego',
      },
      date: '2024-03-15',
      odometer: 150000,
      liters: 200,
      pricePerLiter: 5.89,
      efficiency: 2.5,
    },
    {
      id: '2',
      vehicle: {
        plate: 'DEF-5678',
        model: 'Volvo FH',
      },
      date: '2024-03-14',
      odometer: 180000,
      liters: 250,
      pricePerLiter: 5.85,
      efficiency: 2.3,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Veículo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quilometragem
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Litros
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Preço/L
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Média km/L
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {entries.map((entry) => (
            <tr key={entry.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {new Date(entry.date).toLocaleDateString('pt-BR')}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Fuel className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {entry.vehicle.plate}
                    </div>
                    <div className="text-sm text-gray-500">
                      {entry.vehicle.model}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {entry.odometer.toLocaleString('pt-BR')} km
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {entry.liters.toLocaleString('pt-BR')} L
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {entry.pricePerLiter.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {(entry.liters * entry.pricePerLiter).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-900">
                    {entry.efficiency.toFixed(1)} km/L
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FuelTable;