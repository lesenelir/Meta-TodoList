import { createRouter, createWebHistory } from 'vue-router'
import Start from "../views/Start";

// 路由配置数组，数组值都是对象
const routes = [
  {
     path: '/',
     name: 'Start',
     component: Start
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

// 创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
