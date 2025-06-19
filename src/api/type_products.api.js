import axios from 'axios';

const tipoProductosApi = axios.create({
    baseURL: "https://restaurante-8vk3.onrender.com/api/productos/",
})

export const getAllProducts =  () => {
    return tipoProductosApi.get("/");
}

export const getProduct =  (id) =>  tipoProductosApi.get(`/${id}/`);

// se puede reducir a una sola línea
export const createProduct =  (tipo_product) => {
    return tipoProductosApi.post("/", tipo_product);
}


export const deleteProduct = (id) => tipoProductosApi.delete(`/${id}`);

export const updateProduct = (id, tipo_product) => tipoProductosApi.put(`/${id}/`, tipo_product);
