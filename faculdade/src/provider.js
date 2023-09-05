import axios from "axios";

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/686337362b064d9a8485996991f9cd91',
  timeout: 1000,
});