<template>
  <router-link to="/">
   <button class="icon-btn">
        <span class="material-icons">menu</span>
      </button>
  </router-link>

      <input type="text" placeholder="Buscar..." class="search-input" />

      <button class="icon-btn" @click="manejarClickUsuario">
        <img src="../assets/ElementosGraficos/user.png" alt="Account" class="usuario-icon" />
      </button>
</template>

<script>
export default {
  methods: {
    manejarClickUsuario() {
      const usuarioID = localStorage.getItem("usuarioID");

      if (usuarioID && usuarioID !== "null" && usuarioID !== "") {
        // Usuario logueado → va al CentroUsuario
        this.$router.push(`/centrousuario/${usuarioID}`);
      } else {
        // No logueado → va al Login
        this.$router.push("/login");
      }
    }
  }
}
</script>

