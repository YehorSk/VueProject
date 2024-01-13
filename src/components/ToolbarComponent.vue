<script>
import {useUserPrefStore} from "@/stores/UserPrefStore.js";
export default {
  name: "ToolbarComponent",
  data(){
    return {
      userPrefStore: useUserPrefStore()
    }
  },
  methods:{

  }
}
</script>

<template>
  <v-toolbar>
      <v-btn
          icon
          class="hidden-xs-only"
          @click="$router.back()"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Go Back</v-toolbar-title>
    <v-toolbar-items>
      <v-btn variant="text" to="/portfolio">
        Balance {{ userPrefStore.money}}
      </v-btn>
      <v-divider vertical></v-divider>
    <v-btn variant="text"
           to="/favorite">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
      <v-divider vertical></v-divider>
      <v-btn variant="text"
             to="/coins">
        Coins
      </v-btn>
    <v-divider vertical></v-divider>
    <v-btn variant="text"
           to="/course">
      Course
    </v-btn>
    <v-divider vertical></v-divider>
    <v-btn variant="text"
           to="/">
      Home
    </v-btn>
      <v-divider vertical></v-divider>
      <v-btn variant="text"
             to="/notes">
        Notes
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

</template>

<style scoped>

</style>