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
    component: () => import(/* webpackChunkName: "about" */ '../views/CarritoView.vue'),
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
    component: () => import(/* webpackChunkName: "about" */ '../views/PanelView.vue'),
    children: [
      {
        path: '/gestion/usuarios',
        component: () => import(/* webpackChunkName: "about" */ '../views/management/UsuariosLista.vue'),
      },
      {
        path: '/gestion/productos',
        component: () => import(/* webpackChunkName: "about" */ '../views/management/ProductosLista.vue'),
      },
      {
        path: '/gestion/productos/nuevo',
        component: () => import(/* webpackChunkName: "about" */ '../views/management/ProductoNuevo.vue'),
      },
      {
        path: '/gestion/productos/editar/:id',
        component: () => import(/* webpackChunkName: "about" */ '../views/management/ProductoEditar.vue'),
      }
    ]
  }


]

const router = new VueRouter({
  routes
})

export default router
