<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CarritoFlotante from "@/components/CarritoFlotante.vue";
</script>

<template>
  <header>
    <nav>
      <button class="logotoinicio" @click="$router.push('/')">
        <img src="@/assets/ElementosGraficos/logo.webp" class="logotoinicio" alt="Logo Fasty" />
      </button>
    </nav>
  </header>

  <RouterView />
  <CarritoFlotante />
</template>
<style>
.explorador{
  color: rebeccapurple;
}



.logotoinicio {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 80px;   /* aumentá esto */
  height: auto;  /* mantiene proporción */
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0); /* Fully transparent black */
}
</style>