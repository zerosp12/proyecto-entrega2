<template>
    <div>
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">Tienda Online</a>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu" aria-controls="collapseMenu"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapseMenu">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" @click="showProducts" href="#"><i class="fas fa-gift mr-2"></i> Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="showCart" href="#"><i class="fas fa-shopping-cart mr-2"></i> Carrito </a>
                            </li>
                            <li v-if="this.$parent.$data.isLogin == false" class="nav-item">
                                <a class="nav-link" @click="showAccountForm" href="#"><i class="fas fa-user mr-2"></i> Cuenta</a>
                            </li>
                            <li v-else>
                                <a class="nav-link" @click="logOut" href="#"><i class="fas fa-user mr-2"></i> Salir</a>
                            </li>
                        </ul>
                    </div>
            </div>
            </nav>
        </div>
        <div v-if="this.$parent.$data.isLogin" class="alert alert-info" role="alert">
            <i class="fas fa-user rounded-circle user-icon"></i> Bienvenido {{ this.$parent.$data.clientName }} ...
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarMenu',

    methods: {
        showProducts() {
            this.$parent.$data.showProductsList = true;
            this.$parent.$data.showAccountForm = false;
            this.$parent.$data.showCart = false;
        },
        showAccountForm() {
            this.$parent.$data.showProductsList = false;
            this.$parent.$data.showAccountForm = true;
            this.$parent.$data.showCart = false;
        },
        showCart() {
            this.$parent.$data.showProductsList = false;
            this.$parent.$data.showAccountForm = false;
            this.$parent.$data.showCart = true;
        },
        logOut() {
           this.$parent.$data.userName = ''
           this.$parent.$data.isLogin = false
           
           this.showProducts()
        }
    }
}
</script>

<style scoped>
.user-icon {
    width: 35px;
    line-height: 35px;
    margin-right: 10px;
    text-align: center;
    color: #EEE;
    background-color: #666;
}
.navbar {
    border-bottom: #FFF solid 1px;
}
.nav-link {
    margin: 0px 10px;
    color: #CCC
}
@media (min-width: 576px)
{
    .navbar-expand-sm .navbar-nav {
        justify-content: right;
    }
    
    .navbar-collapse {
        flex-grow: 0;
    }
}
</style>