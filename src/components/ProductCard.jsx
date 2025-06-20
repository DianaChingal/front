import { useNavigate } from "react-router-dom";

export function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <tr onClick={() => navigate(`/products/${product.id}`)} class="border-b border-gray-200 dark:border-gray-700"
     style={{ cursor: "pointer" }}>
                         
        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">{product.nombre}</td>      
        <td class="px-6 py-4">{product.cantidad}</td>
        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">{product.precio_compra}</td>
        <td class="px-6 py-4">{product.precio_venta}</td>
        <td class="px-6 py-4">Mas acciones..</td>
    </tr>  
  );
}