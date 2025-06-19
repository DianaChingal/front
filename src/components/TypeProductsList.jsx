import { useEffect, useState } from 'react';
import { getAllTypeProducts } from '../api/type_products.api';
import { TypeProductTable } from './TypeProducTable';



export function TypeProductsList() {
  const [typeProducts, setTypeProducts] = useState([]);

  useEffect(() => {
    async function loadTypeProducts() {
      try {
        const res = await getAllTypeProducts();
        console.log("Respuesta del backend:", res.data);
        setTypeProducts(res.data);
      } catch (error) {
        console.error("Error al cargar tipos de productos:", error);
      }
    }
    loadTypeProducts();
  }, []);

  return (
    <div>
      <h1 className="text-[30px] font-bold text-center">Lista de Tipos de Productos</h1>
      <br />
      
      <TypeProductTable typeProducts={typeProducts} />
    </div>
  );
}
