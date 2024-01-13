import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";

export const useNotesStore = defineStore("NotesStore",{
    state:()=>({
        notes: useStorage('notes',[])
    }),
    actions:{
        addNote(title,note){
            this.notes.push({title:title,note:note});
        },
        deleteNote(noteDelete){
            this.notes = this.notes.filter(
                (note) =>
                    note.title !== noteDelete.title || note.note !== noteDelete.note
            );
        }
    }
})