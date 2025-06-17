import axios from 'axios';

export const getAllProducts =  () => {
    return axios.get('https://restaurante-8vk3.onrender.com/api/productos/');
}