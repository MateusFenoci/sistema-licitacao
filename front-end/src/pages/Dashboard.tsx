import React from 'react';
import { Truck, Package, Users, AlertTriangle, Fuel, Wrench } from 'lucide-react';
import DashboardChart from '../components/DashboardChart';
import RecentActivities from '../components/RecentActivities';

const Dashboard = () => {
  const stats = [
    { 
      icon: Truck,
      label: 'Frota Total',
      value: '32',
      change: '+2 este mês',
      color: 'text-blue-600'
    },
    {
      icon: Wrench,
      label: 'Manutenções',
      value: '8',
      change: '3 pendentes',
      color: 'text-orange-600'
    },
    {
      icon: Fuel,
      label: 'Gastos Combustível',
      value: 'R$ 45.280',
      change: '-5% vs. último mês',
      color: 'text-green-600'
    },
    {
      icon: AlertTriangle,
      label: 'Multas Ativas',
      value: '3',
      change: '2 em recurso',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <h3 className="mt-4 text-gray-600 font-medium">{stat.label}</h3>
            <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardChart />
        <RecentActivities />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Próximas Manutenções</h2>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-800">Troca de Óleo</span>
                <span className="text-xs text-orange-600">Em 3 dias</span>
              </div>
              <p className="text-sm text-orange-600 mt-1">Placa: ABC-1234</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Alertas de Estoque</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-red-800">Filtro de Óleo</span>
                <span className="text-xs text-red-600">Estoque Baixo</span>
              </div>
              <p className="text-sm text-red-600 mt-1">Restam 2 unidades</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Documentos Pendentes</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-800">Renovação ANTT</span>
                <span className="text-xs text-blue-600">Vence em 15 dias</span>
              </div>
              <p className="text-sm text-blue-600 mt-1">2 veículos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;