<template>
  <div>
    <h1 class="pt-4">
      <i class="fas fa-shopping-cart mr-2"></i> Carrito de Compras
    </h1>
    <hr class="mt-4 mb-4" />
    <div v-if="showLoading">
      <LoadingSpinner />
    </div>
    <div v-else>
      <div v-if="cartList.length == 0">
        <div class="alert alert-warning" role="alert">
          <i class="fas fa-exclamation-circle"></i> El carrito de compras se
          encuentra vacío...
        </div>
      </div>
      <div v-else class="table-responsive table-bordered">
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Opciones</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartList" :key="index">
              <td scope="row">{{ obtenerNombreProducto(item.id_producto) }}</td>
              <td>{{ item.cantidad }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-light"
                  @click="sumarProducto(item.id)"
                >
                  <i class="fas fa-plus"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-light"
                  @click="restarProducto(item.id)"
                >
                  <i class="fas fa-minus"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-danger"
                  @click="borrarProducto(item.id)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
              <td class="w-25">$ {{ item.precio }}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td colspan="4" class="value-total">
                Precio Total: $ <span>{{ sumaTotal }}</span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td colspan="4" class="value-total p-2">
                <button type="button" class="btn btn-success" @click="finalizarPedido()"><i class="fas fa-shopping-cart"></i> Finalizar Pedido</button>
              </td>
            </tr>
          </tbody>
              
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

let URL_PRODUCTOS = "https://639a60473a5fbccb5265ab59.mockapi.io/productos";
let URL_CARRITO = "https://639a60473a5fbccb5265ab59.mockapi.io/carrito";

export default {
  name: "CartView.vue",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      cartList: [],
      productList: [],
      clientID: "",
      showLoading: true,
    };
  },
  created() {
    if (this.$route.params.id !== undefined) {
      this.clientID = this.$route.params.id;

      axios
        .get(URL_PRODUCTOS)
        .then((productos) => {
          this.productList = productos.data;
        })
        .catch((err) => console.log(err.response.data));

      axios
        .get(URL_CARRITO)
        .then((productos) => {
          this.cartList = productos.data;
          setTimeout(() => {
            this.showLoading = false;
          }, 500);
        })
        .catch((err) => console.log(err.response.data));
    } else {
      this.clientID = "";
    }
  },
  methods: {
    obtenerNombreProducto(index) {
      let producto = this.productList.find((x) => x.id == index);
      return producto ? producto.nombre : "Sin nombre!";
    },
    sumarProducto(index) {
      let producto = this.cartList.find((x) => x.id == index);

      if (producto) {
        producto.cantidad++;

        axios.put(
          `${URL_CARRITO}/${index}`,
          JSON.parse(JSON.stringify(producto))
        );
      }
    },
    restarProducto(index) {
      let producto = this.cartList.find((x) => x.id == index);

      if (producto) {
        if (producto.cantidad <= 1) return;

        producto.cantidad--;

        axios.put(
          `${URL_CARRITO}/${index}`,
          JSON.parse(JSON.stringify(producto))
        );
      }
    },
    borrarProducto(index) {
      let producto = this.cartList.findIndex((x) => x.id == index);

      if (producto >= 0) {
        axios.delete(`${URL_CARRITO}/${index}`).then((respuesta) => {
          if (respuesta.status == 200) {
            this.cartList.splice(producto, 1);
          }
        });
      }
    },
    finalizarPedido() {

    }
  },
  computed: {
    sumaTotal() {
      let precio = 0;

      this.cartList.forEach(function (a) {
        precio += Number(a.precio * a.cantidad);
      });

      return precio;
    },
  },
};
</script>
<style scoped>
.btn-sm {
  padding: 0px;
  width: 25px;
  line-height: 25px;
  margin-left: 5px;
  border: #ccc solid 1px;
}
.value-total {
  text-align: right;
  font-size: 1.8em;
  padding-right: 40px;
}
</style>