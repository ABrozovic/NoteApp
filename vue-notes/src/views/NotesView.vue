<script setup>
import Note from '@/components/Note.vue'</script>
<template>
  <div class="note-composer u-margin-bottom-small">
    <textarea class="note-composer__text" placeholder="Add a note"></textarea>
    <a href="#" class="btn note-composer__button">Add</a>
  </div>
  <Note></Note>

</template>

<style lang="scss" scoped>
.note-composer {
  @include card(2);
  height: 10em;
  width: 100%;
  background-color: $color-primary-dark;
  border-radius: $border-radius-m;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em 1em;

  &__text {
    font-size: $font-size-M;
    margin-top: 0.5rem;
    width: 100%;
    flex: 1;
    resize: none;
    border-radius: 4px;
    padding: 0.25em;
  }

  &__button.btn {
    margin: 0.25em 0 0.25em auto;
    padding: 0.5em 1em;
    border-radius: $border-radius-sm;
    background-color: $color-primary;

    &:visited, &:link {
      color: $color-white;
      font-weight: bold;
    }

    &:hover, &:active, &:focus:focus-visible {
      background-color: $color-primary-light;
    }
  }

}

</style>
