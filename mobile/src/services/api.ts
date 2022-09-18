import axios from 'axios'

//const baseURL = 'https://my-json-server.typicode.com/xSallus/nlw9-e-sports'

const baseURL = 'http://localhost:3333'

export const api = axios.create({ baseURL })
