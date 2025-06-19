
import { ProductCard } from "./ProductCard";

export function ProductTable({ products }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-s text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Nombre de producto</th>
            <th className="px-6 py-3">Cantidad</th>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Precio compra</th>
            <th className="px-6 py-3">Precio venta</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
