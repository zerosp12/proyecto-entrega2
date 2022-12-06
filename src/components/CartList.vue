<template>
  <div>
    <div v-if="isLogin == false">
      <div class="alert alert-danger" role="alert">
        <i class="fas fa-exclamation-circle"></i> Debes ingresar en tu cuenta para ver tu carrito. Haz click <strong><a @click="showComponent(2)" href="#" class="alert-link">aquí</a></strong> para iniciar sesión...
      </div>
    </div>
    <div v-else-if="cartList.length == 0">
      <div class="alert alert-warning" role="alert">
        <i class="fas fa-shopping-cart"></i> El carrito de compras se encuentra
        vacío.
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
            <td scope="row">{{ item.nombre }}</td>
            <td>{{ item.cantidad }}</td>
            <td>
              <button
                type="button"
                class="btn btn-sm btn-light"
                @click="plusItem(item.id)"
              >
                <i class="fas fa-plus"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-light"
                @click="minusItem(item.id)"
              >
                <i class="fas fa-minus"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-danger"
                @click="deleteItem(item.id)"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
            <td class="w-25">$ {{ item.precio }}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colspan="5" class="value-total">
              Precio Total: $ <span>{{ sumaTotal }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartList",
  props: {
    isLogin: Boolean,
    cartList: Array,
  },
  data: () => {
    return {
      precio_total: 0.0,
    };
  },
  methods: {
    showComponent(component) {
      this.$emit("showComponent", component);
    },
    plusItem(index) {
      let item = this.cartList.find((x) => x.id == index);

      if (item === undefined) return;

      let precio_unidad = item.precio / item.cantidad;
      item.cantidad++;
      item.precio = precio_unidad * item.cantidad;
    },
    minusItem(index) {
      let item = this.cartList.find((x) => x.id == index);

      if (item === undefined) return;
      if (item.cantidad == 1) return;

      let precio_unidad = item.precio / item.cantidad;
      item.cantidad--;
      item.precio = precio_unidad * item.cantidad;
    },
    deleteItem(index) {
      this.$emit("deleteProductToCart", index);
    },
  },
  computed: {
    sumaTotal() {
      let precio = 0;
      this.cartList.forEach(function (a) {
        precio += a.precio;
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