import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home,
  Truck, 
  Package, 
  Users, 
  Wrench,
  UserCircle,
  Fuel,
  AlertTriangle,
  BarChart3
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, text: 'Página Inicial', path: '/dashboard' },
    { icon: Truck, text: 'Meus Carros', path: '/vehicles' },
    { icon: Package, text: 'Estoque', path: '/inventory' },
    { icon: Users, text: 'Meus Fornecedores', path: '/suppliers' },
    { icon: Wrench, text: 'Categorias de Serviço', path: '/services' },
    { icon: UserCircle, text: 'Meus Funcionários', path: '/employees' },
    { icon: Fuel, text: 'Abastecimentos', path: '/fuel' },
    { icon: AlertTriangle, text: 'Multas', path: '/fines' },
    { icon: BarChart3, text: 'Relatórios', path: '/reports' }
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Truck className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Diesel Transporte</h1>
            <p className="text-sm text-gray-500">Sistema de Gestão</p>
          </div>
        </div>
      </div>
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;