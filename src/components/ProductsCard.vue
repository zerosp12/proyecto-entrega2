<template>
  <div class="col-3 mb-4">
    <div class="card h-100 text-center">
      <img :src="product.image" class="card-img-top" />
      <div class="card-body">
        <h6 class="card-title fw-bold">{{ product.nombre }}</h6>
        <p class="card-text">{{ product.descripcion }}</p>
        <h3 class="pt-3 pb-2">$ {{ product.precio }}</h3>
        <hr />
        <button
          class="btn btn-warning btn-sm"
          @click="addProductToCart(product.id, $event)">
          <i class="fas fa-shopping-cart mr-2"></i> Agregar al Carrito
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  data: () => {
    return {
    };
  },
  props: {
    product: Object,
  },
  created() {
  },
  methods: {

    addProductToCart(index, event) {

      let product = this.productList.find((x) => x.id === index);
      if (product === undefined) return;

      var target = event.currentTarget;
      target.innerHTML = '<i class="fas fa-check mr-2"></i> <b>Agregado!</b>';

      this.$emit("addProductToCart", {
        id: 0,
        prod_id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: 1,
      });

      setTimeout(() => {
        target.innerHTML =
          '<i class="fas fa-shopping-cart mr-2"></i> Agregar al Carrito';
      }, 300);
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
