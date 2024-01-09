<script>
import currencies from "/src/assets/currencies.json"
import {useUserPrefStore} from "@/stores/UserPrefStore.js";
export default {
  name: "ToolbarComponent",
  data(){
    return {
      items: currencies,
      userPrefStore: useUserPrefStore()
    }
  },
  methods:{
    getSelectedCur(item){
      console.log(item.name)
    }
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
      <v-menu
          open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn

              v-bind="props"
          >
            {{userPrefStore.currency}}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              v-for="(item, index) in items"
              :key="index"
          @click="userPrefStore.changeCur(item)">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    <v-btn variant="text"
           to="/favorite">
      <v-icon>mdi-heart</v-icon>
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
    </v-toolbar-items>
  </v-toolbar>

</template>

<style scoped>

</style>