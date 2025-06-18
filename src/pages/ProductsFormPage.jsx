import { useForm } from 'react-hook-form';
import { createProduct } from '../api/products.api'; 
import { useNavigate } from 'react-router-dom';

export function ProductsFormPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    const res = await createProduct(data)
    console.log(res)
    navigate('/products'); // Redirige a la lista de productos después de crear uno nuevo
  })  
  return (
    <div>
      <h1>Products Form Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
      <input type="text" placeholder="Nombre del producto" className="form-control mb-2" 
      {...register("nombre",{required: true})} />
      {errors.nombre && <span className="text-danger">El nombre es requerido</span>}
      
      <input type="number" placeholder="cantidad del producto" className="form-control mb-2" 
      {...register("cantidad",{required: true})} />
      {errors.cantidad && <span className="text-danger">La cantidad es requerida</span>}

      <input type="number" placeholder="Precio del producto" className="form-control mb-2"
      {...register("precio_compra",{required: true})} />
      {errors.precio_compra && <span className="text-danger">El precio es requerido</span>}

      <input type="number" placeholder="Precio de venta" className="form-control mb-2"
      {...register("precio_venta",{required: true})} />
      {errors.precio_venta && <span className="text-danger">El precio es requerido</span>}

      <input type="number" placeholder='Tipo de producto' className="form-control mb-2"
      {...register("tipo_producto",{required: true, valueAsNumber: true,  validate: value => Number.isInteger(value)})} />
      {errors.tipo_producto && <span className="text-danger">El tipo de producto es requerido</span>}

      <input type='number' placeholder='Bodega' className="form-control mb-2"
      {...register("bodega",{required: true, valueAsNumber: true,  validate: value => Number.isInteger(value)})} />
      {errors.bodega && <span className="text-danger">La bodega es requerida</span>}

      <button className="btn btn-primary mb-2">Guardar</button>
      </form>
      
    </div>
  );
}