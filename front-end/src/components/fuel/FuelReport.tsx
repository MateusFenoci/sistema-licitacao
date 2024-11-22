import React from 'react';
import { TrendingUp, Fuel } from 'lucide-react';

interface VehicleReport {
  plate: string;
  model: string;
  totalLiters: number;
  totalCost: number;
  averageEfficiency: number;
}

const FuelReport = () => {
  // Mock data - replace with actual data fetching
  const reports: VehicleReport[] = [
    {
      plate: 'ABC-1234',
      model: 'Mercedes-Benz Atego',
      totalLiters: 800,
      totalCost: 4712.00,
      averageEfficiency: 2.5,
    },
    {
      plate: 'DEF-5678',
      model: 'Volvo FH',
      totalLiters: 1000,
      totalCost: 5850.00,
      averageEfficiency: 2.3,
    },
  ];

  const totalCost = reports.reduce((sum, report) => sum + report.totalCost, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="text-sm text-blue-600 font-medium">Total Gasto</div>
        <div className="text-2xl font-bold text-blue-700 mt-1">
          {totalCost.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.plate}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Fuel className="h-5 w-5 text-gray-400" />
                <span className="font-medium text-gray-900">{report.plate}</span>
              </div>
              <div className="text-sm text-gray-500">{report.model}</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div>
                <div className="text-sm text-gray-500">Total Litros</div>
                <div className="font-medium text-gray-900">
                  {report.totalLiters.toLocaleString('pt-BR')} L
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Gasto</div>
                <div className="font-medium text-gray-900">
                  {report.totalCost.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Média</div>
                <div className="font-medium text-gray-900 flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-gray-400" />
                  {report.averageEfficiency.toFixed(1)} km/L
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuelReport;