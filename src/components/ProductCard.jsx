export function ProductCard({ product }) {
  return (
    <div >
      <div>
        <h1>{product.nombre}</h1>
      </div>
      <button className="btn btn-primary">Añadir al carrito</button>
    </div>
  );
}