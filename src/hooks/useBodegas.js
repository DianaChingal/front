import { useEffect, useState } from 'react';
import {getAllWarehouses} from '../api/warehouses.api'; // bidegas

export function useTipoProductos() {
 const [bodegas, setBodegas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBodegas() {
      try {
        const res = await getAllWarehouses();
        setBodegas(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBodegas();
  }, []);

  return {
    bodegas,
    loading,
    error,
  };
}
