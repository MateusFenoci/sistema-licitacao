import React, { useState } from 'react';
import { X } from 'lucide-react';

interface StockExitFormProps {
  onClose: () => void;
}

const StockExitForm: React.FC<StockExitFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    item: '',
    quantity: '',
    vehicle: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Mock data - replace with actual data fetching
  const items = [
    { id: '1', name: 'Filtro de Óleo', stock: 10 },
    { id: '2', name: 'Pneu 295/80 R22.5', stock: 8 },
  ];

  const vehicles = [
    { id: '1', plate: 'ABC-1234', model: 'Mercedes-Benz Atego' },
    { id: '2', plate: 'DEF-5678', model: 'Volvo FH' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Saída de Estoque</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item
            </label>
            <select
              name="item"
              value={formData.item}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Selecione um item</option>
              {items.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} (Disponível: {item.stock})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quantidade
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              min="1"
              max={items.find(i => i.id === formData.item)?.stock || 1}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Veículo
            </label>
            <select
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Selecione um veículo</option>
              {vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.plate} - {vehicle.model}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default StockExitForm;