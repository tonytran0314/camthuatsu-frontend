import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true
})

export const csrf = axios.create({
  baseURL: import.meta.env.VITE_CSRF_URL,
  withCredentials: true,
  withXSRFToken: true
})