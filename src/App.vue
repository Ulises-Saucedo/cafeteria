<template>
  <div class="body" :class="{'dark-mode': store.theme}">
    <div class="cards__container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
  import { useTheme } from './store/useTheme'
  const store = useTheme()
</script>

<style scoped>
  .body{
    background: #FAFAFA;
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  .cards__container{
    width: 75%;
    margin: 25px auto;
    background: #E4E5F1;
    padding: 20px;
    border-radius: 5px;
    z-index: 999;
  }
  /* DARK MODE */
  .dark-mode{
    background: #121315;
  }
  .dark-mode .cards__container{
    background: #1C1D1F;
  }
</style>
