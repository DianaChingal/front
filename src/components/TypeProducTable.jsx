import { TypeProductRow } from "./TypeProductRow";

export function TypeProductTable({ typeProducts }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-s text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Nombre de tipo producto</th>
            <th className="px-6 py-3">Descrpción</th>
          </tr>
        </thead>
        <tbody>
          {typeProducts.map((typeProduct) => (
            <TypeProductRow key={typeProduct.id} typeProduct={typeProduct} />
          ))}
        </tbody>
      </table>
    </div>
  );
}