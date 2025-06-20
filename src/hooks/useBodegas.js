import { useEffect, useState } from 'react';
import {getAllWarehouses} from '../api/warehouses.api'; // bidegas

export function useBodegas() {
 const [bodegas, setBodegas] = useState([]);
  const [loadingW, setLoadingW] = useState(true);
  const [errorW, setErrorW] = useState(null);

  useEffect(() => {
    async function fetchBodegas() {
      try {
        const res = await getAllWarehouses();
        setBodegas(res.data);
      } catch (err) {
        setErrorW(err);
      } finally {
        setLoadingW(false);
      }
    }

    fetchBodegas();
  }, []);

  return {
    bodegas,
    loadingW,
    errorW,
  };
}
