<template>
  <div class="col-3 mb-4">
    <div class="card h-100 text-center">
      <img :src="producto.image" class="card-img-top" />
      <div class="card-body">
        <h6 class="card-title fw-bold">{{ producto.nombre }}</h6>
        <p class="card-text">{{ producto.descripcion }}</p>
        <h3 class="pt-3 pb-2">$ {{ producto.precio }}</h3>
        <hr />
        <button
          class="btn btn-warning btn-sm"
          @click="addProductToCart($event)"
        >
          <i class="fas fa-shopping-cart mr-2"></i> Agregar al Carrito
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ProductCard",
  data: () => {
    return {};
  },
  props: {
    producto: Object,
  },
  created() {},
  methods: {
    addProductToCart(event) {
      let URL_CARRITO = "https://639a60473a5fbccb5265ab59.mockapi.io/carrito"

      var target = event.currentTarget;
      target.innerHTML = '<i class="fas fa-check mr-2"></i> <b>Agregado!</b>';

      const productoEnviar = {
        id_producto: this.producto.id,
        precio: this.producto.precio,
        cantidad: 1,
        usuario: localStorage.clientID
      }

      axios
      .post(URL_CARRITO, JSON.parse(JSON.stringify(productoEnviar)))
       .then(resultado => {
        console.log(resultado)
          if (resultado.status == 201) {
            setTimeout(() => {
              target.innerHTML = '<i class="fas fa-shopping-cart mr-2"></i> Agregar al Carrito';
              }, 300);
          }
        });

      
    },
  },
};
</script>

<style scoped>
.card {
  border: 0px !important;
  padding: 0px 0px 20px 0px;
  box-shadow: 0px 0px 6px 2px #eaeaea;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0px 0px 6px 2px #bbb;
}
</style>
