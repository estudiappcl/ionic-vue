import { createRouter, createWebHistory } from '@ionic/vue-router';
import ProductsPages from '../pages/ProductsPages.vue'



const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path:'/products',
    component : ProductsPages
  },
  {
    path:'/products/:id',
    component : () => import('../pages/ProductsDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
