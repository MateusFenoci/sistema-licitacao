import React, { useState } from 'react';
import { Plus, UserCircle } from 'lucide-react';
import EmployeeTable from '../components/employees/EmployeeTable';
import EmployeeForm from '../components/employees/EmployeeForm';

const Employees = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      {showForm ? (
        <EmployeeForm onClose={() => setShowForm(false)} />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Meus Funcionários</h1>
              <p className="text-gray-600">Gerencie seus motoristas e funcionários</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Novo Funcionário
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <EmployeeTable />
          </div>
        </>
      )}
    </div>
  );
};

export default Employees;