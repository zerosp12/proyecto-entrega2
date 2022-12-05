<template>
    <div class="col">
        <div class="card text-center">
            <img :src="productInfo.image" class="card-img-top" alt="" style="width: 80%; margin: 0px auto">
            <div class="card-body">
                <h6 class="card-title fw-bold">{{ productInfo.nombre }}</h6>
                <p class="card-text">{{ productInfo.descripcion }}</p>
                <h4 class="pt-3 pb-2">$ {{ productInfo.valor }}</h4>
                <hr>
                <a href="#" class="btn btn-warning btn-sm"><i class="fas fa-shopping-cart mr-2"></i> Agregar al Carrito</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        productInfo: Array,
    }
}
</script>

<style scoped>
.card {
    border: 0px !important;
    padding: 20px 0px 20px 0px;
    box-shadow: 0px 0px 6px 2px #EAEAEA;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
    cursor: pointer;
    box-shadow: 0px 0px 6px 2px #BBB;
}
</style>