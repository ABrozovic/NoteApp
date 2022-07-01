<template>
  <div class="note">
    <p class="note__content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur delectus dignissimos dolorum ea earum eum,
      minima nesciunt nobis, odio quaerat quibusdam reiciendis saepe totam vitae. Aliquid laboriosam necessitatibus
      tenetur?
    </p>
    <hr class="note__divider">
    <div class="note__buttons">
      <a class="btn note__button--edit" href="#">Edit</a>
      <a class="btn note__button--delete" href="#">Delete</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const notes = ref([{
  id: '0',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur delectus dignissimos dolorum ea earum eum, minima nesciunt nobis, odio quaerat quibusdam reiciendis saepe totam vitae. Aliquid laboriosam necessitatibus tenetur?'
}, {
  id: '1',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur delectus dignissimos dolorum ea earum eum, minima nesciunt nobis, odio quaerat quibusdam reiciendis saepe totam vitae. Aliquid laboriosam necessitatibus tenetur?'
}]);
</script>
<style lang="scss" scoped>
.note {
  background-color: $color-white;
  border-radius: 9px;
  margin: 0 3rem;
  padding: 0.25rem 1.5rem;
  box-shadow: bottom-shadow(3);

  &__content {
    color: $color-grey-dark-2;
    font-size: $font-size-M;
    line-height: 1.6;
    display: flex;
    align-items: center;
    height: 6rem;

  }
  &__divider {
    border-top: 2px solid $color-grey-light-3;
  }

  &__buttons {
    display: flex;
    justify-content: space-around;

  }
  &__button{
    &--delete{
      &:hover,&:active{
        background-color: rgba(red, 0.2);
      }
    }
  }
}


</style>