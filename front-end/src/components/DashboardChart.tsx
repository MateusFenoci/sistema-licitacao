import React from 'react';
import { BarChart3 } from 'lucide-react';

const DashboardChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Receitas Mensais</h2>
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>
      <div className="h-64 flex items-center justify-center">
        <div className="space-y-4 w-full">
          {/* Simulated chart bars */}
          {[75, 60, 85, 70, 90, 65].map((value, index) => (
            <div key={index} className="relative pt-1">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'][index]}
                </div>
                <div className="text-sm text-gray-600">
                  R$ {(value * 1000).toLocaleString('pt-BR')}
                </div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                <div
                  style={{ width: `${value}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;