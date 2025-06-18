import axios from 'axios';

const productosApi = axios.create({
    baseURL: "https://restaurante-8vk3.onrender.com/api/productos/",
})

export const getAllProducts =  () => {
    return axios.get("https://restaurante-8vk3.onrender.com/api/productos/");
}
// se puede reducir a una sola línea
export const createProduct =  (product) => {
    return axios.post("https://restaurante-8vk3.onrender.com/api/productos/", product);
}