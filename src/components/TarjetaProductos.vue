<template>
  <div class="col-lg-3 py-2">
    <div class="card h-100 text-center">
      <img :src="producto.image" class="card-img-top" />
      <div class="card-body">
        <h6 class="card-title fw-bold">{{ producto.nombre }}</h6>
        <p class="card-text" v-html="obtenerDescripcionConSalto"></p>
        <h3 class="pt-3 pb-2">$ {{ producto.precio }}</h3>
      </div>
      <div class="card-footer">
        <hr>
        <button
          class="btn fw-bold btn-sm btn-warning py-2"
          :disabled="chequearBoton"
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
    return {
      botonActivo: false,
    };
  },
  props: {
    producto: Object,
  },
  computed: {
    chequearBoton() {
      return this.botonActivo;
    },
    obtenerDescripcionConSalto() {
      return this.producto.descripcion.replace(/\n/g, "<br />");
    },
  },
  methods: {
    addProductToCart(event) {
      if (JSON.parse(localStorage.isLogin)) {
        this.botonActivo = true;
        let URL_CARRITO = "https://639a60473a5fbccb5265ab59.mockapi.io/carrito";

        var target = event.currentTarget;
        target.innerHTML = '<i class="fas fa-check mr-2"></i> <b>Agregado!</b>';

        const productoEnviar = {
          id_producto: this.producto.id,
          precio: this.producto.precio,
          cantidad: 1,
          usuario: localStorage.clientID,
        };

        axios
          .post(URL_CARRITO, JSON.parse(JSON.stringify(productoEnviar)))
          .then((resultado) => {
            if (resultado.status == 201) {
              setTimeout(() => {
                target.innerHTML =
                  '<i class="fas fa-shopping-cart mr-2"></i> Agregar al Carrito';
                this.botonActivo = false;
              }, 300);
            }
          });
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>

.card-footer {
  background-color: white !important;
  border-top: 0px;
  padding-bottom: 20px;
}
</style>