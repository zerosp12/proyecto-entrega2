<template>
    <div>
        <h1 class="pt-4">Lista de Productos</h1>
        <hr class="mt-4 mb-4">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <ProductCard v-for="(product, index) in this.$parent.$data.productList" :key="index" :productInfo="product" />
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
    name: 'ProductList',
    components: {
        ProductCard
    }
}
</script>

<style scoped>
</style>
