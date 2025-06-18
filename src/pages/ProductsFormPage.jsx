import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createProduct, deleteProduct, updateProduct,getProduct } from '../api/products.api'; 
import { useNavigate, useParams} from 'react-router-dom';
import toast, {Toaster} from "react-hot-toast"

export function ProductsFormPage() {

  const { register, handleSubmit, formState: { errors }, setValue} = useForm();
  const navigate = useNavigate();
  const params = useParams(); // Para obtener el ID del producto si se está editando
  console.log("Parametros:", params); // Para verificar si se está editando un producto
  
  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      // Si hay un ID, significa que estamos editando un producto existente
      await updateProduct(params.id, data)
      toast.success("Producto actualizado correctamente", {
        position: 'top-center',
      });
    }
    else { 
      const res = await createProduct(data)
      
      toast.success("Producto creado correctamente", {
        position: 'top-center',
      });
    }
    navigate('/products'); // Redirige a la lista de productos después de crear uno nuevo
    
  });

  useEffect(() => {
    async function loadProduct() {
      if (params.id){
        //await getProduct(params.id)
        const res = await getProduct(params.id);
        console.log( res);
        setValue("nombre", res.data.nombre);
        setValue("cantidad", res.data.cantidad);
        setValue("precio_compra", res.data.precio_compra);
        setValue("precio_venta", res.data.precio_venta);  
        setValue("tipo_producto", res.data.tipo_producto);
        setValue("bodega", res.data.bodega);}
    }  
    loadProduct()
  }, []);
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
      {
        params.id && (<button
        onClick={async () => {
          const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
          if (confirmDelete) {
            // Si el usuario confirma, procede a eliminar el producto
            await deleteProduct(params.id);
            toast.success("Producto eliminado correctamente", {
              position: 'top-center',
            });
            navigate('/products'); // Redirige a la lista de productos después de eliminar uno
          }
        }
        }
           className="btn btn-secondary" > Eliminar</button>
      )}
    
    </div>
  );
}