import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

//产品
const product = () => import('@/pages/product')
const detail = () => import('@/pages/detail')

//购物车
const car = () => import('@/pages/car')
const order = () => import('@/pages/order')
const myorders = () => import('@/pages/myorders')

//登录注册
const accounts = () => import('@/pages/accounts')
const login = () => import('@/pages/login')
const signup = () => import('@/pages/signup')
const signout = () => import('@/pages/signout')
const pwdReset = () => import('@/pages/pwdReset')
const pwdForget = () => import('@/pages/pwdForget')

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/car',
      name: 'car',
      component: car,
    },
    {
      path: '/order',
      name: 'order',
      component: order,
    },
    {
      path: '/myorders',
      name: 'myorders',
      component: myorders,
    },
    {
      path: '/:id',
      name: 'product',
      component: product,
    },
    {
      path: '/product/:id',
      name: 'detail',
      component: detail,
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: accounts,
      children:[
        {
          path: '/accounts/login',
          name: 'login',
          component: login,
        },
        {
          path: '/accounts/signup',
          name: 'signup',
          component: signup,
        },
        {
          path: '/accounts/signout',
          name: 'signout',
          component: signout,
        },
        {
          path: '/accounts/pwdreset',
          name: 'pwdReset',
          component: pwdReset,
        },
        {
          path: '/accounts/pwdforget',
          name: 'pwdForget',
          component: pwdForget,
        }
      ]
    },
  ]
})

export default router;