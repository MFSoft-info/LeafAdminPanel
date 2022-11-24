import { createRouter, createWebHistory } from 'vue-router'

import Users from '../views/Users.vue'

/*
  All project routes file
*/
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Iniciar Sesión',
    },
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue'),
    meta: {
      title: 'Team',
    },
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue'),
    meta: {
      title: 'Configuración',
    },
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: () => import('../views/Withdrawal.vue'),
    meta: {
      title: 'Retirar',
    },
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue'),
    meta: {
      title: 'Chat',
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      title: 'Perfil',
    },
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/Notifications.vue'),
    meta: {
      title: 'Notificaciones',
    },
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('../views/Business.vue'),
    meta: {
      title: 'Negocios',
    },
  },
  {
    path: '/approval',
    name: 'AdApprovel',
    component: () => import('../views/AdApproval.vue'),
    meta: {
      title: 'Aprovación',
    },
  },
  {
    path: '/Activos',
    name: 'Activos',
    component: Users,
    meta: {
      title: 'Activos',
    },
  },
  {
    path: '/Inactivos',
    name: 'Inactivos',
    component: Users,
    meta: {
      title: 'Inactivos',
    },
  },
  {
    path: '/Bloqueados',
    name: 'Bloqueados',
    component: Users,
    meta: {
      title: 'Bloqueados',
    },
  },
  {
    path: '/ConCompras',
    name: 'ConCompras',
    component: Users,
    meta: {
      title: 'Con Compras',
    },
  },
  {
    path: '/Conventas',
    name: 'ConVentas',
    component: Users,
    meta: {
      title: 'Con Ventas',
    },
  },
  {
    path: '/ConNegocios',
    name: 'ConNegocios',
    component: Users,
    meta: {
      title: 'Con negocios',
    },
  },
  {
    path: '/SinNegocios',
    name: 'SinNegocios',
    component: Users,
    meta: {
      title: 'Sin negocios',
    },
  },
  {
    path: '/Eliminados',
    name: 'Eliminados',
    component: Users,
    meta: {
      title: 'Eliminados',
    },
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Users,
    meta: {
      title: 'Admin',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
