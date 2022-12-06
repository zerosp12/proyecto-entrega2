<template>
  <div v-if="MostrarMensaje">
    <div style="width: 100%; height: 100%; display: block; position: fixed; top: 0; left: 0; background-color: rgba(0,0,0,0.5); padding: 20px;">
        <div v-if="Tipo == 1" class="alert alert-success alert-dismissible" role="alert" style="top: 100px">
            <strong>EXITO!</strong> {{ Mensaje }}
            <button type="button" class="btn-close" @click="$emit('cerrarMensaje')"></button>
        </div>
        <div v-else-if="Tipo == 2" class="alert alert-danger alert-dismissible" role="alert" style="top: 100px">
            <strong>ERROR!</strong> {{ Mensaje }}
            <button type="button" class="btn-close" @click="$emit('cerrarMensaje')"></button>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ModalMessage",

  props: {
    MostrarMensaje: Boolean,
    Mensaje: String,
    Tipo: Number,
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
<style scoped>
</style>