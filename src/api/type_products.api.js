import axios from 'axios';

const tipoProductosApi = axios.create({
    baseURL: "https://restaurante-8vk3.onrender.com/api/TipoProductos/",
})

export const getAllTypeProducts =  () => {
    return tipoProductosApi.get("/");
}

export const getTypeProduct =  (id) =>  tipoProductosApi.get(`/${id}/`);

// se puede reducir a una sola línea
export const createTypeProduct =  (tipo_product) => {
    return tipoProductosApi.post("/", tipo_product);
}

export const deleteTypeProduct = (id) => tipoProductosApi.delete(`/${id}`);

export const updateTypeProduct = (id, tipo_product) => tipoProductosApi.put(`/${id}/`, tipo_product);

