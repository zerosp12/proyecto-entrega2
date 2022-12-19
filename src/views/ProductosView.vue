<template>
  <div>
    <ModuleTitle moduloTitulo="Lista de Productos" moduloTexto="" moduloIcono="fas fa-gift" />
    <div v-if="showLoading">
      <LoadingSpinner />
    </div>
    <div v-else class="row">
      <ProductsCard v-for="(product, index) in productList" :key="index" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductsCard from '@/components/ProductsCard.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ModuleTitle from '@/components/ModuleTitle.vue'

import axios from 'axios'

export default {
  name: 'ProductosView',
  components: {
    ProductsCard,
    LoadingSpinner,
    ModuleTitle
  },

  data() {
    return {
      showLoading: true,
      productList: []
    };
  },

  created() {
    let URL_PRODUCTOS = 'https://639a60473a5fbccb5265ab59.mockapi.io/productos'

    axios.get(URL_PRODUCTOS)
    .then((productos) => { 
      this.productList = productos.data 
      setTimeout(() => { this.showLoading = false }, 500)
    })
    .catch((err) => console.log(err.response.data))
  },
  methods: {
  }
}
</script>
<style scoped>
.card {
    width: 95%;
    margin: 1% !important;
}

@media (min-width: 576px) {
    .card {
        width: 47%;
        margin: 5px 1.5% !important;
    }
}

@media (min-width: 768px) {
    .card {
        width: 31.333%;
        margin: 5px 1% !important;
    }
}

@media (min-width: 992px) {
    .card {
        width: 23%;
        margin: 5px 1% !important;
    }
}

@media (min-width: 1200px) {
    .card {
        width: 19%;
        margin: 5px .5% !important;
    }
}
</style>