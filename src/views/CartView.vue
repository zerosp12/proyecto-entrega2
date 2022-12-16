<template>
    <div>
      <h1 class="pt-4"><i class="fas fa-shopping-cart mr-2"></i> Carrito de Compras</h1>
      <hr class="mt-4 mb-4" />
        <div v-if="cartList.length == 0">
        <div class="alert alert-warning" role="alert">
            <i class="fas fa-exclamation-circle"></i> El carrito de compras se encuentra
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
    name: 'CartView.vue',
    data() {
      return {
        cartList: [],
      };
    },
}
</script>