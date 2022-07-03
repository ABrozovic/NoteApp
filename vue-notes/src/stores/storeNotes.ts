import {defineStore} from "pinia";
import {ref} from "vue";
import {v4 as uuid} from "uuid";

type note = {
    id: string,
    content: string
}

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: ref<Array<note>>([])
        }
    },
    actions: {
        addNote(newNote: string) {
            let tmpNote: note = {
                id: uuid(),
                content: newNote
            }
            this.notes.unshift(tmpNote);
        },
        deleteNote(idToDelete: string) {
            this.notes = this.notes.filter(note => {
                return note.id !== idToDelete
            });
        }
    }
});