<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#">> NUEVA Tienda Online</a>
          <button
            class="navbar-toggler d-lg-none text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseMenu"
            aria-controls="collapseMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="collapseMenu">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">
                  <i class="fas fa-gift mr-2"></i> Productos
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="linkCarrito">
                  <i class="fas fa-shopping-cart mr-2"></i> Carrito
                </router-link>
              </li>
              <li v-if="isLogin" class="nav-item">
                <router-link class="nav-link" to="/logout">
                  <i class="fas fa-user mr-2"></i> Salir
                </router-link>
              </li>
              <li v-else>
                <router-link class="nav-link" to="/login">
                  <i class="fas fa-user mr-2"></i> Tu Cuenta
                </router-link>
              </li>
              <li v-if="!isLogin">
                <router-link class="nav-link" to="/registro">
                  <i class="fas fa-user-plus mr-2"></i> Registrate
                </router-link>
              </li>
              <li v-if="isLogin && userPrivileges == 1">
                <router-link class="nav-link" to="/gestion">
                  <i class="fas fa-users-cog mr-2"></i> Panel de Gestión
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div v-if="isLogin" class="bg-light p-2" role="alert">
      <div class="container">
        <div style="font-weight: bold; font-size: 1.2em; margin: 0px; padding: 0px; line-height: 80px; color: #000"><img :src="imagePath" class="rounded-circle" style="width: 70px; margin-right: 20px; border: #666 solid 2px"> {{ clientName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarMenu",

  data() {
    return {
      isLogin: false,
      clientName: "",
      imagePath: "",
      userPrivileges: 0,
      linkCarrito: '/carrito'
    }
  },
  created() {
  
    this.linkCarrito = '/carrito'

    if(localStorage.isLogin !== undefined) {
      
      this.isLogin = JSON.parse(localStorage.isLogin) //Sino toma String (Gracias Google)

      if(this.isLogin) {
        this.clientName = localStorage.clientName
        this.imagePath = localStorage.avatarPath
        this.userPrivileges = localStorage.userPrivileges
        this.linkCarrito = '/carrito/' + localStorage.clientID
      } else {
        localStorage.isLogin = false
        localStorage.clientName = ""
        localStorage.avatarPath = ""
        localStorage.userPrivileges = 0
        localStorage.clientID = ""
      }
    }
  },
}
</script>

<style scoped>
.user-icon {
  width: 35px;
  line-height: 35px;
  margin-right: 10px;
  text-align: center;
  color: #eee;
}
.navbar-toggler {
  border: 0px;
  line-height: 30px;
  box-shadow: none;
}
.navbar {
  background-color: rgb(107, 45, 179);
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.2);
  line-height: 50px;
  position: fixed;
  z-index: 1001;
  width: 100%;
  top: 0;
}
.navbar-brand {
  font-size: 2em;
  color: #FFF;
  font-weight: 600;
}
.nav-link {
  font-size: 1.1em;
  margin: 0px 5px;
  padding: 8px 20px !important;
  color: #FFF;
  border: transparent solid 1px;
  border-radius: 5px;
  line-height: 20px;
}
.nav-link:hover {
  color: #FFF;
  border: rgb(155, 85, 235) solid 1px;
}
.router-link-exact-active {
  background-color: rgb(155, 85, 235);
  border: rgb(155, 85, 235) solid 1px;
  color: white !important;
}
.nav-link i {
  margin-right: 6px;
  min-width: 20px;
}

@media (max-width: 576px) {
  .nav-link {
    margin-bottom: 10px;
  }
}

@media (min-width: 576px) {
  .navbar-expand-sm .navbar-nav {
    justify-content: right;
  }

  .navbar-collapse {
    flex-grow: 0;
  }
}
</style>
