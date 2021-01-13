import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    // /* webpackChunkName: "about" */ 这段 注释 的意思是打包时候会以 about.[hash].js 中间为 哈希值 的方式去打包 命名文件名称
    props: {
      name: 'test'
    }
  },
  {
    path: '/products',
    name: 'products',
    exact: true,
    component: () => import('@/views/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue')
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: () => import('@/views/EditProduct.vue')
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: () => import('@/views/AddProduct.vue')
  },
  {
    path: '/echart',
    // 访问 /chart 路径也可以跳转到echart页
    alias: '/chart',
    name: 'Echart',
    component: () => import(/* webpackChunkName:'Echart' */ '@/views/Echart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
