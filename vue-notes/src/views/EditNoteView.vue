<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import {ref} from "vue";
import {useStoreNotes} from "@/stores/storeNotes.ts";
import {useRoute} from 'vue-router';

const storeNotes= useStoreNotes();
const router = useRoute();
const updateNote=()=> storeNotes.updateNote(router.params.id.toString(), noteContent.value);

const noteContent = ref('');
noteContent.value= storeNotes.getNoteContent(router.params.id.toString());
</script>
<template>
  <div class="edit-note">
    <AddEditNote v-model="noteContent" ref="addEditNoteRef" modelType="bg-blue"
      label="Edit note:"
    >
      <template #buttons >
        <button :disabled="!noteContent" class="btn note-composer__button"
                @click="updateNote">
          Edit
        </button>
      </template>
    </AddEditNote>
  </div>
</template>