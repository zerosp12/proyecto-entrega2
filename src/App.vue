<template>
  <div id="app">
    <NavbarMenu />
    <div class="container mt-4 mb-4">
      <ProductsList v-if="showProductsList" />
      <AccountForm v-if="showAccountForm" />
    </div>
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'
import ProductsList from './components/ProductsList.vue'
import AccountForm from './components/AccountForm.vue'

export default {
  name: 'App',
  components: {
    NavbarMenu,
    ProductsList,
    AccountForm,
  },
  data: ()=> {
    return {
      showProductsList: true,
      showAccountForm: false,
      showCart: false,
      //Login User
      userName: '',
      clientName: '',
      isLogin: false,

      //Informacion
      usersList: [
        {id: 0, username: 'jose', nombre: 'Jose Antonio Destefano', password: '1234', email: 'jose.sp92@gmail.com' }
      ],

      productList: [
        {id: 0, nombre: 'Producto de Prueba 1', descripcion: 'Este es un producto de Prueba del Catalogo 2023', valor: 40.5, image: 'https://robohash.org/0?set=set10&size=300x300' },
        {id: 1, nombre: 'Producto de Prueba 2', descripcion: 'Este es un producto de Prueba del Catalogo 2023', valor: 30.5, image: 'https://robohash.org/1?set=set10&size=300x300' },
        {id: 2, nombre: 'Producto de Prueba 3', descripcion: 'Este es un producto de Prueba del Catalogo 2023', valor: 20.5, image: 'https://robohash.org/2?set=set10&size=300x300' },
        {id: 3, nombre: 'Producto de Prueba 4', descripcion: 'Este es un producto de Prueba del Catalogo', valor: 20.5, image: 'https://robohash.org/3?set=set10&size=300x300' },
        {id: 4, nombre: 'Producto de Prueba 5', descripcion: 'Este es un producto de Prueba del Catalogo', valor: 20.5, image: 'https://robohash.org/4?set=set10&size=300x300' },
        {id: 5, nombre: 'Producto de Prueba 6', descripcion: 'Este es un producto de Prueba del Catalogo', valor: 20.5, image: 'https://robohash.org/5?set=set10&size=300x300' },
      ],
    }
  },
  methods: {
  }
}
</script>

<style>
html, body {
  background: #FAFAFA;
}
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.95em;
}
.container {
  vertical-align: middle;
}
</style>
