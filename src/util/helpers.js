import axios from 'axios'
import { URL } from '@/util/globals' 
import router from '@/router'
export function leadingSlash (str) {
  return str.startsWith('/') ? str : '/' + str
}

export function trailingSlash (str) {
  return str.endsWith('/') ? str : str + '/'
}

export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}
// Add a response interceptor
axios.interceptors.response.use((res) => { 
  return res;
}, (err) => { 
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err);
});
export async function baxios(url,method='POST',data={},params={}) {
  let token = await localStorage.getItem('token') || '' 
  token = token.replace('"','')
  return await axios({
    method: method,
    baseURL:URL,
    url: url,
    data:data,
    params: params,
    headers: {'Authorization': `Bearer ${token}`},
  })  
}