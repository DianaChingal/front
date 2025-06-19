import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    
    <div>
      <Link to="/products">
          <h1 className="text-[50px] font-bold">Productos App</h1>
        </Link>
      <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">

        <div className="container mx-auto flex justify-between items-center">
          <Link to="/products/new" className="hover:underline">
            <h1 className="text-2xl font-bold">Nuevo Producto</h1>
          </Link>
          <Link to="/products" className="hover:underline">
            <h1 className="text-2xl font-bold">Lista de  Productos</h1>
          </Link>
          <Link to="/typeProducts" className="hover:underline">
            <h1 className="text-2xl font-bold">Tipo Producto</h1>
          </Link>
        </div>
    
      </nav>
      <br />
    </div>
  );
}