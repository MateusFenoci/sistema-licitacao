import React from 'react';
import { Search } from 'lucide-react';

interface VehicleFilterProps {
  activeTab: 'active' | 'inactive';
  onTabChange: (tab: 'active' | 'inactive') => void;
}

const VehicleFilter: React.FC<VehicleFilterProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onTabChange('active')}
          className={`px-4 py-2 text-sm font-medium rounded-lg ${
            activeTab === 'active'
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Veículos Ativos
        </button>
        <button
          onClick={() => onTabChange('inactive')}
          className={`px-4 py-2 text-sm font-medium rounded-lg ${
            activeTab === 'inactive'
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Veículos Inativos
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Buscar por placa, modelo ou motorista..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default VehicleFilter;