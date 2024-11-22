import React from 'react';
import { Edit2, Trash2, UserCircle } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  cnh: string;
  status: 'active' | 'inactive';
  role: string;
  joinDate: string;
}

const EmployeeTable = () => {
  // Mock data - replace with actual data fetching
  const employees: Employee[] = [
    {
      id: '1',
      name: 'João Silva',
      cnh: '12345678901',
      status: 'active',
      role: 'Motorista',
      joinDate: '2023-01-15',
    },
    {
      id: '2',
      name: 'Maria Santos',
      cnh: '98765432109',
      status: 'active',
      role: 'Motorista',
      joinDate: '2023-03-20',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Funcionário
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              CNH
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cargo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Data de Admissão
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <UserCircle className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{employee.cnh}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{employee.role}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  employee.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {employee.status === 'active' ? 'Ativo' : 'Inativo'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {new Date(employee.joinDate).toLocaleDateString('pt-BR')}
                </div>
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

export default EmployeeTable;