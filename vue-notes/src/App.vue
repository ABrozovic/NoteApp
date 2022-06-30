<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet">
<template>
  <MainNav></MainNav>

</template>

<style lang="scss">
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  .container {
    max-width: $default-max-width;
    padding: 0 2rem;
    margin: 0 auto;
  }
</style>
