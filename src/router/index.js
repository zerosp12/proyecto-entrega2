import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductosView from '../views/ProductosView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'productos',
    component: ProductosView
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  },
  {
    path: '/carrito/:id',
    name: 'carrito_id',
    component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import(/* webpackChunkName: "about" */ '../views/LogoutView.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroView.vue')
  },
  {
    path: '/gestion',
    name: 'gestion',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManagementPanelView.vue'),
    children: [
      {
        path: '/gestion/usuarios',
        component: () => import(/* webpackChunkName: "about" */ '../views/management/ManagementUsuarios.vue'),
      },
      {
        path: '/gestion/productos',
        component: () => import(/* webpackChunkName: "about" */ '../views/management/ManagementProductos.vue'),
      }
    ]
  }


]

const router = new VueRouter({
  routes
})

export default router
