import React, { useState } from 'react';
import { Plus, Wrench, Car, Hammer, PaintBucket, Spray, Droplets, Settings } from 'lucide-react';
import ServiceCategoryForm from '../components/services/ServiceCategoryForm';

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  activeServices: number;
}

const Services = () => {
  const [showForm, setShowForm] = useState(false);

  // Mock data - replace with actual data fetching
  const categories: ServiceCategory[] = [
    {
      id: '1',
      name: 'Lataria',
      icon: Car,
      description: 'Serviços de reparo e manutenção de lataria',
      activeServices: 3,
    },
    {
      id: '2',
      name: 'Borracharia',
      icon: Wrench,
      description: 'Serviços de reparo e troca de pneus',
      activeServices: 5,
    },
    {
      id: '3',
      name: 'Mecânica',
      icon: Hammer,
      description: 'Serviços de manutenção mecânica geral',
      activeServices: 8,
    },
    {
      id: '4',
      name: 'Lanternagem',
      icon: PaintBucket,
      description: 'Serviços de lanternagem e pintura',
      activeServices: 2,
    },
    {
      id: '5',
      name: 'Limpeza',
      icon: Droplets,
      description: 'Serviços de limpeza e higienização',
      activeServices: 4,
    },
    {
      id: '6',
      name: 'Extra',
      icon: Settings,
      description: 'Outros serviços especializados',
      activeServices: 1,
    },
  ];

  return (
    <div className="space-y-6">
      {showForm ? (
        <ServiceCategoryForm onClose={() => setShowForm(false)} />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Categorias de Serviço</h1>
              <p className="text-gray-600">Gerencie as categorias de serviço disponíveis</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Nova Categoria
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <category.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Serviços ativos</span>
                    <span className="font-medium text-gray-900">{category.activeServices}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Services;