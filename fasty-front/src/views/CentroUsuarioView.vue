<template>
  <div class="centro-usuario">
    
    <div v-if="usuario && usuario.nombre">
      <h1 class="saludos">Hola {{ usuario.nombre }}</h1>
      <p class="email">Email: {{ usuario.email }}</p>
      <button @click="logout">Cerrar sesión</button>
    </div>

    <div v-else>
      <p>Cargando datos...</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: "",
        email: "",
        }
    };
  },

  async mounted() {
    const id = this.$route.params.id;
    const res = await fetch(`http://localhost:3000/usuarios/${id}`);
    this.usuario = await res.json();
  },

  methods: {
    logout() {
      localStorage.removeItem("usuarioID");
      localStorage.removeItem("usuarioNombre");
      this.$router.push("/");
    }
  }
};
</script>

<style>


</style>