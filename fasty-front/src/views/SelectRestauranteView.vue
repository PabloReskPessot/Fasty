<template>
  <div class="select-restaurante">
    <h1>Seleccioná tu restaurante</h1>

    <div class="restaurantes-grid">
      <!-- Ejemplo de tarjeta sin imagen -->
      <div class="restaurante-card">
        <h2>Restaurante 1</h2>
        <p>Comida saludable y opciones veganas</p>
      </div>

      <div class="restaurante-card">
        <h2>Restaurante 2</h2>
        <p>Comidas rápidas</p>
      </div>
      <div class="restaurante-card">
        <h2>Restaurante 3</h2>
        <p>Menús diarios</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 🔹 Sin importaciones de imágenes
</script>

<style scoped>
.select-restaurante {
  text-align: center;
  padding: 2rem;
}

.restaurantes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.restaurante-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.2s;
}

.restaurante-card:hover {
  transform: scale(1.03);
}
</style>
