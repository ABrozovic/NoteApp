<script lang="ts" setup>
import Note from '@/components/Note.vue'
import {ref} from "vue";
import {useStoreNotes} from "@/stores/storeNotes";
import {storeToRefs} from "pinia";

const newNote = ref('');
const newNoteRef = ref();

const storeNotes = useStoreNotes();
const {notes} = storeToRefs(useStoreNotes())

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = '';
  newNoteRef.value.focus();
}

</script>
<template>
  <div class="note-composer u-margin-bottom-small">
    <textarea ref="newNoteRef" v-model="newNote" class="note-composer__text" placeholder="Add a note"></textarea>
    <button :disabled="!newNote" class="btn note-composer__button"
            @click="addNote">
      Add
    </button>
  </div>
  <Note v-for="note in notes"
        :key="note.id" :note="note"
  />
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
