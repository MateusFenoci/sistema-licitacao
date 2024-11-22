import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface VehicleReport {
  plate: string;
  model: string;
  totalFines: number;
  totalAmount: number;
  pendingFines: number;
}

const FineReport = () => {
  // Mock data - replace with actual data fetching
  const reports: VehicleReport[] = [
    {
      plate: 'ABC-1234',
      model: 'Mercedes-Benz Atego',
      totalFines: 2,
      totalAmount: 195.23,
      pendingFines: 1,
    },
    {
      plate: 'DEF-5678',
      model: 'Volvo FH',
      totalFines: 3,
      totalAmount: 293.47,
      pendingFines: 2,
    },
  ];

  const totalAmount = reports.reduce((sum, report) => sum + report.totalAmount, 0);
  const totalPendingFines = reports.reduce((sum, report) => sum + report.pendingFines, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="bg-red-50 border border-red-100 rounde d-lg p-4">
        <div className="text-sm text-red-600 font-medium">Total em Multas</div>
        <div className="text-2xl font-bold text-red-700 mt-1">
          {totalAmount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
        <div className="text-sm text-red-600 mt-2">
          {totalPendingFines} multas pendentes
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
                <AlertTriangle className="h-5 w-5 text-gray-400" />
                <span className="font-medium text-gray-900">{report.plate}</span>
              </div>
              <div className="text-sm text-gray-500">{report.model}</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div>
                <div className="text-sm text-gray-500">Total Multas</div>
                <div className="font-medium text-gray-900">
                  {report.totalFines}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Valor</div>
                <div className="font-medium text-gray-900">
                  {report.totalAmount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Pendentes</div>
                <div className="font-medium text-gray-900">
                  {report.pendingFines}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FineReport;