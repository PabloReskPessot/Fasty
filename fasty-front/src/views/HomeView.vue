<script setup lang="ts">


</script>

<template>
   <div class="home-container">

    <!-- Header -->
    <header class="top-bar">
      <button class="icon-btn">
        <span class="material-icons">menu</span>
      </button>

      <input type="text" placeholder="Buscar..." class="search-input" />

      <button class="icon-btn">
        <span class="material-icons">account_circle</span>
      </button>
    </header>
    


    
    <!-- Action buttons -->
    <section class="action-grid">

      <div class="action-card favoritos">⭐ Favoritos</div>
      <div class="action-card restaurantes">🏪 Restaurantes</div>
      <div class="action-card categoria">🍔 Categorías</div>
      <div class="action-card seguimiento">🛵 Seguimiento</div>
      <div class="action-card menu">🍽️ Menú</div>

      <!-- Resto de placeholders -->
      <div class="action-card placeholder">a</div>
      <div class="action-card placeholder">a</div>

    </section>

  </div>
</template>