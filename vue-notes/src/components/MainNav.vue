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

  <RouterView/>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
  padding: 0 5rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to top left, $color-primary, $color-primary-light);
  box-shadow: bottom-shadow(2);


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
    padding-right: 2rem;
    font-size: $font-size-L;

  }
  &__links{
    &:link,&:visited{
      text-decoration: none;
      padding: 1rem 3rem;
      color: $color-white;
      font-size: $font-size-XL;
      font-weight: $font-weight-semibold;
      letter-spacing: 1.2px;
    }
  }
}


</style>