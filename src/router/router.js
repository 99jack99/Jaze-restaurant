import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../layout/Main.vue'),
      redirect: '/home',
      children: [
        {
         path: '/home',
         name: 'Home',
         component: () => import('../views/Home.vue')
        }, 
        {
          path: '/menu',
          name: 'Menu',
          component: () => import('../views/Menu.vue')
         }, 
        {
          path: '/contact',
          name: 'Contact',
          component: () => import('../views/Contact.vue'),
        }
      ]
    },
    
  ]
})


export default router
