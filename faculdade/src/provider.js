import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/426d6a33676744f99b43df9ec9b37b6e/',
    timeout: 1000,
  });