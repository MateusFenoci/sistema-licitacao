import React from 'react';
import { Clock, Truck, Wrench, Fuel } from 'lucide-react';

const RecentActivities = () => {
  const activities = [
    {
      icon: Truck,
      title: 'Novo veículo cadastrado',
      description: 'Caminhão Mercedes-Benz Atego 2430',
      time: '2h atrás',
      color: 'text-blue-600',
    },
    {
      icon: Wrench,
      title: 'Manutenção agendada',
      description: 'Troca de óleo - Placa ABC-1234',
      time: '4h atrás',
      color: 'text-orange-600',
    },
    {
      icon: Fuel,
      title: 'Abastecimento registrado',
      description: 'R$ 450,00 - 100L Diesel S10',
      time: '6h atrás',
      color: 'text-green-600',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Atividades Recentes</h2>
        <Clock className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`p-2 rounded-lg bg-gray-50 ${activity.color}`}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
              <p className="text-sm text-gray-500">{activity.description}</p>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;