import { useNavigate } from "react-router-dom";

export function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/products/${product.id}`)} className="card mb-2"
     style={{ cursor: "pointer" }}
    >
      <div>
        <h1>{product.nombre}</h1>
      </div>
      <button className="btn btn-primary">Añadir al carrito</button>
    </div>
  );
}