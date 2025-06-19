import axios from 'axios';

const WarehousesApi = axios.create({
    baseURL: "https://restaurante-8vk3.onrender.com/api/bodegas/",
})

export const getAllWarehouses =  () => {
    return WarehousesApi.get("/");
}

export const getWarehouses =  (id) =>  WarehousesApi.get(`/${id}/`);

// se puede reducir a una sola línea
export const createWarehouses =  (warehouses) => {
    return WarehousesApi.post("/", warehouses);
}


export const deleteWarehouses = (id) => WarehousesApi.delete(`/${id}`);

export const updateWarehouses = (id, product) => WarehousesApi.put(`/${id}/`, warehouses);
