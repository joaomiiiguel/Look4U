import axios from 'axios'
import { localUrl, apiUrl } from '../../global'
export const localApi = axios.create({
  baseURL: localUrl
})
export const htmlApi = axios.create({
  baseURL: apiUrl
})
