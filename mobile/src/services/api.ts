import axios from 'axios'

const baseURL = 'https://my-json-server.typicode.com/xSallus/nlw9-e-sports'

export const api = axios.create({ baseURL })
