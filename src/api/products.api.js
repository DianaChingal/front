import axios from 'axios';

const productosApi = axios.create({
    baseURL: "https://restaurante-8vk3.onrender.com/api/productos/",
})

export const getAllProducts =  () => {
    return productosApi.get("/");
}

export const getProduct =  (id) =>  productosApi.get(`/${id}/`);

// se puede reducir a una sola línea
export const createProduct =  (product) => {
    return productosApi.post("/", product);
}


export const deleteProduct = (id) => productosApi.delete(`/${id}`);

export const updateProduct = (id, product) => productosApi.put(`/${id}/`, product);
