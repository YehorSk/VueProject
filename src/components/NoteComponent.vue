

<template>
  <v-card
      width="400"
      :title="note.title"
      :text="note.note"
      class="mx-auto my-8"
  >
    <v-card-actions>
      <v-btn @click="noteStore.deleteNote(note)">
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {useNotesStore} from "@/stores/NotesStore.js";

export default {
  name: "NoteComponent",
  props:{
    note:{
      type: Object,
      required: true,
      default: () => {}
    },
  },
  data(){
    return{
      noteStore: useNotesStore()
    }
  }
}
</script>
<style scoped>

</style>