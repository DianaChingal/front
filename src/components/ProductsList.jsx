import {useEffect, useState} from 'react';
import { getAllProducts} from '../api/products.api';
import { set } from 'react-hook-form';

import { ProductTable } from './ProductTable';


export function ProductsList() {

  const [products,setProducts] = useState([]);// Fetch products from the API when the component moun
  useEffect(() => {
    async function loadProducts() {
      const res= await getAllProducts()
      console.log("Respuesta del backend:", res.data); // lo colocamos porque no sale la lista despues de crear un producto
      setProducts(res.data);
    }
    loadProducts();
  }, []);
  return (
    <div>
      <h1 className="text-[30px] font- text-center">Lista de Productos</h1>
      <br /> 
    <ProductTable products={products} />
    </div>
  );
}