import Home from '@/views/home'
import modules from './modules'

export const asyncRouterMap = modules
export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home, // 首页
    redirect: '/home',
    children: []
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/404',
    name: 'Error404',
    component: () => import('@/views/error/error404')
  }
]

export const defaultRouterMap = [
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true }
  }
]
