

<template>
<ToolbarComponent/>

    <v-sheet width="600" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
            v-model="title"
            :rules="rules"
            label="Title"
        ></v-text-field>
        <v-textarea clearable
                    label="Label"
                    v-model="text"
                    :rules="rules"></v-textarea>
        <v-btn type="submit" block class="mt-2" @click="notesStore.addNote(title,text)">Submit</v-btn>
      </v-form>
    </v-sheet>
  <div>
    <NoteComponent  v-for="note in notesStore.notes"
                    :key="note.id"
                    :note="note"></NoteComponent>
  </div>
</template>
<script>
import ToolbarComponent from "@/components/ToolbarComponent.vue";
import {useNotesStore} from "@/stores/NotesStore.js";
import NoteComponent from "@/components/NoteComponent.vue";
import CoinComponent from "@/components/CoinComponent.vue";

export default {
  name: "Notes",
  components: {CoinComponent, NoteComponent, ToolbarComponent},
  data: () => ({
    notesStore: useNotesStore(),
    title: '',
    text: '',
    firstName: '',
    rules: [
      value => {
        if (value) return true
        return 'You must enter a first name.'
      },
    ],
  }),
}
</script>
<style scoped>

</style>