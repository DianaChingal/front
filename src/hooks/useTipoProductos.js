import { useEffect, useState } from 'react';
import { getAllTypeProducts } from '../api/type_products.api';

export function useTipoProductos() {
  const [tipoProductos, setTipoProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTipoProductos() {
      try {
        const res = await getAllTypeProducts();
        setTipoProductos(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTipoProductos();
  }, []);

  return {
    tipoProductos,
    loading,
    error,
  };
}
