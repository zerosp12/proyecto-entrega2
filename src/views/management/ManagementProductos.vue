<template>
  <div>
    <h3 class="mb-4">> Administrar Productos</h3>
    <div v-if="showLoading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando Productos...</span>
      </div>
    </div>
    <div v-else class="table table-bordered text-center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) of productList" :key="index">
            <td scope="row">{{ producto.nombre }}</td>
            <td>$ {{ producto.precio }}</td>
            <td class="td_descripcion">
              <div class="text-overflow-check">{{ producto.descripcion }}</div>
            </td>
            <td>
              <button type="button btn-sm" class="btn btn-sm btn-warning" style="margin-right: 5px">
                <i class="fas fa-pen"></i>
              </button>
              <button type="button btn-sm" class="btn btn-sm btn-danger" @click="deleteItem(producto.id)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: "ManagementProductos.vue",

  data() {
    return {
      showLoading: true,
      productList: [],
    }
  },

  created() {
    let URL_PRODUCTOS = "https://639a60473a5fbccb5265ab59.mockapi.io/productos"

    axios
      .get(URL_PRODUCTOS)
      .then(productos => {
        this.productList = productos.data
        setTimeout(() => {
          this.showLoading = false
        }, 500)
      })
      .catch(err => console.log(err.response.data))
  },

  methods: {
    deleteItem(index) {
      var answer = window.confirm("Deseas Borrar el siguente Producto?");
      if (answer) {
        console.log(index)
      }
      else {
        console.log(index)
      }
    }
  },
}
</script>
<style scoped>
.td_descripcion {
    width: 400px; 
    padding-left: 40px;
}
.text-overflow-check {
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
