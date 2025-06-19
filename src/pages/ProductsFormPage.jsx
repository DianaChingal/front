import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createProduct, deleteProduct, updateProduct,getProduct } from '../api/products.api'; 
import { useNavigate, useParams} from 'react-router-dom';
import {toast,Toaster} from "react-hot-toast"
import {getAllTypeProducts  } from '../api/type_products.api';
import {getAllWarehouses} from '../api/warehouses.api'; // bidegas


export function ProductsFormPage() {

  const { register, handleSubmit, formState: { errors }, setValue} = useForm();
  const navigate = useNavigate();
  const params = useParams(); // Para obtener el ID del producto si se está editando
  console.log("Parametros:", params); // Para verificar si se está editando un producto

  const [typeProducts, setTypeProducts] = useState([]);
  const [bodegas, setBodegas] = useState([]);

  
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

  useEffect(() => {
    async function loadTypeProducts() {
      try {
        const res = await getAllTypeProducts();
        setTypeProducts(res.data);
      } catch (error) {
        console.error("Error cargando tipos de producto:", error);
      }
    }

    loadTypeProducts();
  }, []);

  useEffect(() => {
    async function loadBodegas() {
      try {
        const res = await getAllWarehouses();
        setBodegas(res.data);
      } catch (error) {
        console.error("Error cargando bodegas:", error);
      }
    }

    loadBodegas();
  }, []);

  return (
    <div className='w-full md:w-1/2 mx-auto p-4 bg-zinc-800 rounded-lg shadow-lg'>
      <h1 className="text-[35px] font-bold text-white">Productos</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)} >
      <input type="text" placeholder="Nombre del producto" className="bg-zinc-700 rounded-lg block w-full mb-3 p-2 text-white" 
      {...register("nombre",{required: true})} />
      {errors.nombre && <span className="text-danger">El nombre es requerido</span>}
      
      <input type="number" placeholder="cantidad del producto" className="bg-zinc-700 rounded-lg block w-full mb-3 p-2 text-white" 
      {...register("cantidad",{required: true})} />
      {errors.cantidad && <span className="text-danger">La cantidad es requerida</span>}

      <input type="number" placeholder="Precio del producto" className="bg-zinc-700 rounded-lg block w-full mb-3 p-2 text-white"
      {...register("precio_compra",{required: true})} />
      {errors.precio_compra && <span className="text-danger">El precio es requerido</span>}

      <input type="number" placeholder="Precio de venta" className="bg-zinc-700 rounded-lg block w-full mb-3 p-2 text-white"
      {...register("precio_venta",{required: true})} />
      {errors.precio_venta && <span className="text-danger">El precio es requerido</span>}

      <select
        {...register("tipo_producto", { required: true })}
        className="bg-zinc-700 rounded-lg block w-full mb-3 p-2 text-white"
      >
        <option value="">Selecciona un tipo de producto</option>
        {typeProducts.map((type) => (
          <option key={type.id} value={type.id}>
            {type.nombre}
          </option>
        ))}
      </select>
      {errors.tipo_producto && <span className="text-danger">El tipo de producto es requerido</span>}
      
      <select
        {...register("bodega", { required: true })}
        className="bg-zinc-700 rounded-lg block w-full mb-3 p-2 text-white"
      >
        <option value="">Selecciona la bodega</option>
        {bodegas.map((type) => (
          <option key={type.id} value={type.id}>
            {type.nombre}
          </option>
        ))}
      </select>
      {errors.bodega && <span className="text-danger">La bodega es requerida</span>}

      <button className="block text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Guardar</button>
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
           className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >
             Eliminar</button>
      )}
    
    </div>
  );
}