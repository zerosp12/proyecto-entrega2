<template>
  <div class="form-content">
    <h1 class="pt-4">Tu Cuenta</h1>
    <hr class="mt-4 mb-4" />
    <vue-form :state="loginform" @submit.prevent="enviarLogin()">
      <validate auto-label class="form-group required-field mb-3">
        <label class="form-label">Usuario</label>
        <input
          v-model="model.username"
          type="text"
          name="username"
          class="form-control"
          :class="obtenerClassEstado(loginform.username)"
          required
        />
        <field-messages name="username" show="$touched || $submitted">
          <div slot="required" class="text-danger">
            Debes ingresar un Usuario
          </div>
        </field-messages>
      </validate>
      <validate auto-label class="form-group required-field mb-3">
        <label class="form-label" for="password">Contraseña</label>
        <input
          v-model="model.password"
          type="password"
          name="password"
          class="form-control"
          :class="obtenerClassEstado(loginform.password)"
          required
        />
        <field-messages name="password" show="$touched || $submitted">
          <div slot="required" class="text-danger">
            Debes ingresar una Contraseña
          </div>
        </field-messages>
      </validate>
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Ingresar
      </button>
      <div class="text-center">
        <p>
          No eres miembro?
          <router-link to="/registro">Registrate</router-link>
        </p>
      </div>
    </vue-form>
  </div>
</template>
<script>
import axios from "axios"
import { MixinForms } from "@/mixins/mixin.forms.js"

export default {
  name: "LoginView",
  mixins: [MixinForms],
  data() {
    return {
      usersList: {},

      //Form Check
      loginform: {},
      model: {
        username: "",
        password: "",
      },
    }
  },
  created() {
    let URL_USUARIOS = "https://639a60473a5fbccb5265ab59.mockapi.io/usuarios"

    axios
      .get(URL_USUARIOS)
      .then(usuarios => {
        
        localStorage.usersList = JSON.stringify(usuarios.data)
        this.usersList = JSON.parse(localStorage.usersList)
      })
      .catch(err => console.log(err.response.data))
      .finally(fin => console.log(fin))
  },
  methods: {
    enviarLogin() {

      let infoUsuario =  this.usersList.find(
          x =>
            x.usuario == this.model.username &&
            x.password == this.model.password)

      if (infoUsuario) {
        localStorage.isLogin = Boolean(true)
        localStorage.clientName = infoUsuario.nombre
        localStorage.avatarPath = infoUsuario.avatar
        localStorage.userPrivileges = Number(infoUsuario.privilegios)
        window.location.href = "/"
      }
    },
  },
}
</script>
<style scoped>
.form-content {
  max-width: 25rem;
}
</style>
