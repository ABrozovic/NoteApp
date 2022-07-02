<template>
  <header class="header">
    <img class="header__logo" src="../assets/images/logo.png" alt="Application logo. Three notebooks side by side">
    <nav class="main-nav">
      <ul class="main-nav__list">
        <RouterLink class="main-nav__links" tag="li" to="/">Notes</RouterLink>
        <RouterLink class="main-nav__links" tag="li" to="/stats">Stats</RouterLink>
      </ul>
    </nav>
  </header>


</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
  padding: 0 5rem;
  height: 4rem;
  background-image: linear-gradient(to bottom right, $color-primary, $color-primary-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: bottom-shadow(2);
  z-index: 99;

  &__logo {
    height: 100%;
    width: auto;
    padding: 0.25rem 0;
  }
}

.main-nav {
  &__list {
    list-style: none;
    display: flex;
    gap: 3rem;
    font-size: $font-size-L;
    text-transform: uppercase;

  }

  &__links {
    transition: all 0.3s;
    &:link, &:visited {
      text-decoration: none;
      color: $color-white;
      font-size: $font-size-XL;
      font-weight: $font-weight-semibold;
      letter-spacing: 1.5px;
    }

    &:hover, &:active {
      color: $color-grey-light-2;
    }
  }
}


</style>