<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- 
     -->
    <nav>
      <RouterLink to="/" class="explorador">Home</RouterLink> |
      <RouterLink to="/about" class="explorador">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
.explorador{
  color: rebeccapurple;
}
</style>