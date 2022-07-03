<script lang="ts" setup>
import {computed, defineProps} from "vue";
import {useStoreNotes} from "@/stores/storeNotes";

const storeNotes = useStoreNotes();
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
});


const characterLength = computed(() => {
  let noteLength = props.note.content.length;
  let description = noteLength > 1 ? "Characters" : "Character";
  return `${noteLength} ${description}`;
})

const handleEditClicked = () => {

}
const deleteNote = () => {
  storeNotes.deleteNote(props.note.id);
}
</script>
<template>
  <div class="note u-margin-bottom-small">
    <p class="note__content">
      {{ note.content }}
    </p>
    <div class="note__character-count">
      <small>{{ characterLength }}</small>
    </div>
    <hr class="note__divider">
    <div class="note__buttons">
      <a class="btn note__button--edit"
         href="#" @click.prevent="handleEditClicked">Edit</a>
      <a class="btn note__button--delete"
         href="#" @click.prevent="deleteNote">Delete</a>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.note {
  background-color: $color-white;
  border-radius: 9px;
  padding: 0.75rem 1.5rem 0.25rem 1.5rem;
  @include card(2);

  animation: showNote .5s backwards;


  @keyframes showNote {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }


  &__content {
    color: $color-grey-dark-2;
    font-size: $font-size-M;
    line-height: 1.6;
    overflow-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    min-height: 2rem;
    //overflow: scroll;

  }

  &__character-count {
    text-align: end;
    font-size: $font-size-S;
    text-transform: uppercase;
    color: $color-grey-light-3
  }


  &__divider {
    border-top: 2px solid $color-grey-light-3;
  }

  &__buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  [class*="note__button--"] {
    width: 100%;
    padding: 0.5em 0;
  }

  &__button {
    &--delete {
      &:hover, &:active, &:focus:focus-visible {
        background-color: rgba(red, 0.2);
      }
    }
  }
}


@media (max-width: 38rem) {

  .note {
    font-size: $font-size-S;

    &__content {
      font-size: inherit;
    }

  }
}
</style>