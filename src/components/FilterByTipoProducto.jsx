import { useEffect, useState } from 'react';
import { getAllTypeProducts } from '../api/type_products.api';
import { getProductsByTipoProducto } from '../api/products.api';

export function FilterByTipoProducto() {
  const [tipoProductos, setTipoProductos] = useState([]);
  const [selectedTipo, setSelectedTipo] = useState('');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function loadTipoProductos() {
      try {
        const res = await getAllTypeProducts();
        setTipoProductos(res.data);
      } catch (error) {
        console.error("Error al cargar tipos de producto:", error);
      }
    }
    loadTipoProductos();
  }, []);

  useEffect(() => {
    async function loadProductos() {
      if (selectedTipo) {
        try {
          const res = await getProductsByTipoProducto(selectedTipo);
          setProductos(res.data);
        } catch (error) {
          console.error("Error al cargar productos por tipo:", error);
        }
      } else {
        setProductos([]);
      }
    }
    loadProductos();
  }, [selectedTipo]);

  return (
    <div className="p-4 bg-zinc-800 rounded-lg w-full md:w-3/4 mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Filtrar productos por tipo</h2>

      <select
        value={selectedTipo}
        onChange={(e) => setSelectedTipo(e.target.value)}
        className="bg-zinc-700 rounded-lg block w-full mb-5 p-2 text-white"
      >
        <option value="">Selecciona un tipo de producto</option>
        {tipoProductos.map((tipo) => (
          <option key={tipo.id} value={tipo.id}>
            {tipo.nombre}
          </option>
        ))}
      </select>

      <div className="text-white">
        {productos.length === 0 && selectedTipo ? (
          <p>No hay productos de este tipo.</p>
        ) : (
          <ul className="space-y-2">
            {productos.map((producto) => (
              <li key={producto.id} className="border-b border-gray-600 pb-2">
                <strong>{producto.nombre}</strong> - Cantidad: {producto.cantidad}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
