import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  timeout: 8000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})
console.log(request)

export function GetCustomerList () {
  return axios({
    method: 'get',
    url: '/rest/users'
  })
}

export function GetProductsList () {
  return axios({
    method: 'get',
    url: '/rest/products'
  })
}

export function GetProductDetail (id) {
  return axios({
    method: 'get',
    // url: 'http://localhost:3001/products/' + id
    url: '/rest/products/' + id
  })
}

export function DeleteProduct (id) {
  return axios({
    method: 'delete',
    // url: 'http://localhost:3001/products/' + id
    url: '/rest/products/' + id
  })
}

export function UpdateProduct (id, data) {
  return axios({
    method: 'patch',
    url: '/rest/products/' + id,
    data
  })
}

export function AddProduct (data) {
  return axios({
    method: 'post',
    url: '/rest/products',
    data
  })
}
