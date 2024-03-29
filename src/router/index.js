import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/course',
      name: 'course',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CourseView.vue')
    }
    ,
    {
      path: '/coins',
      name: 'coins',
      component: () => import('../views/CryptoView.vue')
    },
    {
      path: '/coins/:slug',
      name: 'coinsInfo',
      component: () => import('../views/CoinInfoView.vue')
    },
    {
      path: '/favorite',
      name: 'favoriteCoins',
      component: () => import('../views/FavoriteCryptoView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/NotesView.vue')
    }
  ]
})

export default router
