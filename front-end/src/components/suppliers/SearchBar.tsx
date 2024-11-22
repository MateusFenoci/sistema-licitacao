import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Buscar por nome ou CPF/CNPJ..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;