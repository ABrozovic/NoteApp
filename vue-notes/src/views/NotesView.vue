<script lang="ts" setup>
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import {ref} from "vue";
import {useStoreNotes} from "@/stores/storeNotes";
import {storeToRefs} from "pinia";

const newNote = ref('');
const addEditNoteRef = ref();

const storeNotes = useStoreNotes();
const {notes} = storeToRefs(useStoreNotes())

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = '';
  addEditNoteRef.value.focusTextArea();
}


</script>
<template>
  <AddEditNote v-model="newNote" ref="addEditNoteRef">
    <template #buttons >
      <button :disabled="!newNote" class="btn note-composer__button"
              @click="addNote">
        Add
      </button>
    </template>
  </AddEditNote>
  <Note v-for="note in notes"
        :key="note.id" :note="note"
  />
</template>
