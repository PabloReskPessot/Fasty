<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- 
     -->
    <nav>
    <button class="icon-btn">
        <img src="@/assets/ElementosGraficos/logo.webp" class="usuario-icon">
      </button>
    </nav>
  </header>

  <RouterView />
</template>

<style>
.explorador{
  color: rebeccapurple;
}

.usuario-icon {
  width: 80px;   /* aumentá esto */
  height: auto;  /* mantiene proporción */
}
</style>