import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface Fine {
  id: string;
  vehicle: {
    plate: string;
    model: string;
  };
  date: string;
  amount: number;
  description: string;
  status: 'pending' | 'paid' | 'appealing';
}

const FineTable = () => {
  // Mock data - replace with actual data fetching
  const fines: Fine[] = [
    {
      id: '1',
      vehicle: {
        plate: 'ABC-1234',
        model: 'Mercedes-Benz Atego',
      },
      date: '2024-03-15',
      amount: 195.23,
      description: 'Excesso de velocidade',
      status: 'pending',
    },
    {
      id: '2',
      vehicle: {
        plate: 'DEF-5678',
        model: 'Volvo FH',
      },
      date: '2024-03-14',
      amount: 293.47,
      description: 'Estacionamento irregular',
      status: 'appealing',
    },
  ];

  const getStatusBadge = (status: Fine['status']) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      paid: 'bg-green-100 text-green-800',
      appealing: 'bg-blue-100 text-blue-800',
    };

    const labels = {
      pending: 'Pendente',
      paid: 'Paga',
      appealing: 'Em Recurso',
    };

    return (
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

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
              Descrição
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Valor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {fines.map((fine) => (
            <tr key={fine.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {new Date(fine.date).toLocaleDateString('pt-BR')}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {fine.vehicle.plate}
                    </div>
                    <div className="text-sm text-gray-500">
                      {fine.vehicle.model}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{fine.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {fine.amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getStatusBadge(fine.status)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FineTable;