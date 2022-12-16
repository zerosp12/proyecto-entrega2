<template>
  <div class="form-content">
    <h1 class="pt-4">Registra tu Cuenta</h1>
    <hr class="mt-4 mb-4" />
    <vue-form :state="regform" @submit.prevent="enviarRegistro()">
      <!--Nombre y Apellido-->
      <validate auto-label class="form-group required-field mb-3">
        <label class="form-label">Nombre y Apellido</label>
        <input
          v-model="model.nombre"
          type="text"
          name="nombre"
          class="form-control"
          :class="obtenerClassEstado(regform.nombre)"
          required
        />
        <field-messages name="nombre" show="$touched || $submitted">
          <div slot="required" class="text-danger">
            Debes ingresar el Nombre y Apellido
          </div>
        </field-messages>
      </validate>
      <!--Usuario-->
      <validate auto-label class="form-group required-field mb-3">
        <label class="form-label">Usuario</label>
        <input
          v-model="model.usuario"
          type="text"
          name="usuario"
          class="form-control"
          :class="obtenerClassEstado(regform.usuario)"
          required
        />
        <field-messages name="usuario" show="$touched || $submitted">
          <div slot="required" class="text-danger">
            Debes ingresar un Nombre de Usuario
          </div>
        </field-messages>
      </validate>
      <!--Contraseña-->
      <validate auto-label class="form-group required-field mb-3">
        <label class="form-label">Contraseña</label>
        <input
          v-model="model.password"
          type="password"
          name="password"
          class="form-control"
          minlength="4"
          :class="obtenerClassEstado(regform.password)"
          required
        />
        <field-messages name="password" show="$touched || $submitted">
          <div slot="minlength" class="text-danger">
            La contraseña debe tener minimo 4 caracteres
          </div>
          <div slot="required" class="text-danger">
            Debes ingresar una Contraseña
          </div>
        </field-messages>
      </validate>
      <!--Repite Contraseña-->
      <validate auto-label class="form-group required-field mb-3">
        <label class="form-label">Repite la Contraseña</label>
        <input
          v-model="model.repassword"
          type="password"
          name="repassword"
          class="form-control"
          minlength="4"
          :matches="model.password"
          :class="obtenerClassEstado(regform.repassword)"
          required
        />
        <field-messages name="repassword" show="$touched || $submitted">
          <div slot="minlength" class="text-danger">
            La contraseña debe tener minimo 4 caracteres
          </div>
          <div slot="required" class="text-danger">
            Debes ingresar una Contraseña
          </div>
          <div slot="matches" class="text-danger">
            Las contraseñas no son iguales
          </div>
        </field-messages>
      </validate>
      <!--Email-->
      <validate auto-label class="form-group required-field mb-3">
        <label class="form-label">Email</label>
        <input
          v-model="model.email"
          type="email"
          name="email"
          class="form-control"
          :class="obtenerClassEstado(regform.email)"
          required
        />
        <field-messages name="email" show="$touched || $submitted">
          <div slot="email" class="text-danger">
            El formato es inválido, Ej: email@gmail.com
          </div>
          <div slot="required" class="text-danger">Debes ingresar un Email</div>
        </field-messages>
      </validate>
      <!--Privilegios-->
      <validate auto-label class="form-group required-field mb-3">
        <input
          v-model="model.privilegios"
          class="form-check-input"
          type="checkbox"
          name="privilegios"
        />
        <label class="chkbox-label"> Cuenta con Privilegios?</label>
      </validate>
      <button type="submit" class="btn btn-success btn-block mb-3">
        Registrar Cuenta
      </button>
    </vue-form>
  </div>
</template>
<script>
import axios from "axios"
import { MixinForms } from "@/mixins/mixin.forms.js"

export default {
  name: "RegistroView",
  mixins: [MixinForms],
  components: {},
  data() {
    return {
      //Form Check
      regform: {},
      model: {
        nombre: "",
        usuario: "",
        password: "",
        repassword: "",
        email: "",
        privilegios: 0,
      },
    }
  },
  methods: {
    enviarRegistro() {
      if (this.regform.$valid) {

        let URL_USUARIOS =
          "https://639a60473a5fbccb5265ab59.mockapi.io/usuarios"

        let usuario = {
          nombre: this.model.nombre,
          usuario: this.model.usuario,
          password: this.model.password,
          email: this.model.email,
          privilegios: this.model.privilegios,
        }

        axios
          .post(URL_USUARIOS, usuario)
          .then(resultado => {
            
            console.log(resultado.status)

            if (resultado.status == 201) {
              this.model = {
                nombre: "",
                usuario: "",
                password: "",
                repassword: "",
                email: "",
                privilegios: 0,
              }
              this.resetState()
            }
          })
          .catch(err => console.log(err.response.data))
          .finally(fin => console.log(fin))
      }
    },
  },
}
</script>
<style scoped>
.form-content {
  max-width: 25rem;
}

.chkbox-label {
  padding-left: 8px;
  padding-top: 1px;
}
</style>