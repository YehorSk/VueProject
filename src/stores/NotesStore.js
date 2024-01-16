import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";

export const useNotesStore = defineStore("NotesStore",{
    state:()=>({
        notes: useStorage('notes',[]),
        note_id: useStorage('note_id',0)
    }),
    actions:{
        addNote(title,note){
            this.notes.push({id:this.note_id,title:title,note:note});
            this.note_id+=1
        },
        deleteNote(noteDelete){
            this.notes = this.notes.filter(
                (note) =>
                    note.id !== noteDelete.id
            );
        }
    }
})