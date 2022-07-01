<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet">
<template>
  <MainNav></MainNav>
  <div class="wrapper ">
    <div class="container u-margin-top-small">
    <RouterView/>
    </div>
  </div>
</template>

<style lang="scss">
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

h1, h2, h3, p {
  margin: 0;
}

hr {
  border: 1px none;
}

body {
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;

}

.flow > * + * {
  margin-top: var($default-flow-space, 1em);
}

.container {
  max-width: $default-max-width;
  padding: 0 2rem;
  margin: 0 auto;

}

.wrapper {
  background-color: $color-grey-light-1;
  display: flow-root;
  height: 100vh;
}

</style>
