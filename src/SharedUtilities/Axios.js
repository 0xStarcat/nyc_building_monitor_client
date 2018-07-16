import axios from 'axios'

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 12000,
  headers: { 'Content-type': 'application/json' }
})
