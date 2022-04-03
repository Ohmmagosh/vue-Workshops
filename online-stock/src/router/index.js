import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Report from '../views/Report.vue'
import Stock from '../views/Stock.vue'
import StockCreate from '../views/StockCreate.vue'
import StockEdit from '../views/StockEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/report',
    name: 'report',
    component: Report
  },
  {
    path: '/stock',
    name: 'stock',
    component: Stock
  },
  {
    path: '/stock-create',
    name: 'stock-create',
    component: StockCreate
  },
  {
    path: '/stock-edit',
    name: 'stock-edit',
    component: StockEdit
  },
  {
    path: '/stock-edit/:id ',
    name: 'stock-edit',
    component: StockEdit
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  },
]

const router = new VueRouter({
  routes
})

export default router
