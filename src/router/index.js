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
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 按需引入写法：如果没有访问path，就不会加载这个路由组件  =>  节约性能
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// 创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
