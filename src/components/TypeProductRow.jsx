import { useNavigate } from "react-router-dom";

export function TypeProductRow({ typeProduct }) {
  const navigate = useNavigate();
  return (
    <tr onClick={() => navigate(`/products/${typeProduct.id}`)} class="border-b border-gray-200 dark:border-gray-700"
     style={{ cursor: "pointer" }}>
                         
        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            {typeProduct.nombre}</td>      
        <td class="px-6 py-4">{typeProduct.descripcion}</td>

    </tr>  
  );
}