<style scoped>
@import "/css/styles.css";

</style>
<template>

  <v-card>

    <v-layout>
      <v-navigation-drawer

      >
        <router-link
            to="/">
        <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
        </router-link>
        <v-divider></v-divider>
        <router-link
            to="/coins">
          <v-list-item title="Coins"></v-list-item>
        </router-link>
        <v-divider></v-divider>
<!--        mdi-checkbox-marked-circle  -->
        <v-list>
          <v-list-item :width="400" v-for="(item, key, index) in items" :key="index" :value="item.value" @click="menuClick(item)">
            <v-btn icon @click="useLesson(item)">
              <v-icon>{{ !this.userPrefStore.checkLesson(item) ? 'mdi-checkbox-marked-circle-outline' : 'mdi-checkbox-blank-circle-outline' }}</v-icon>
            </v-btn>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>
      

      <v-main >
        <div class="videoWrapper">
          <iframe  :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="lesson-overview">
          <div class="overview">
            <p>{{ name }}</p>
          </div>
          <div class="description"><p>About this lesson</p></div>
          <!-- Lesson description and content go here -->
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import lessons from '/src/assets/lessons.json'
import {useUserPrefStore} from "@/stores/UserPrefStore.js";
import ToolbarComponent from "@/components/ToolbarComponent.vue";
export default {
  components: {ToolbarComponent},
  data(){
    return {
      items: lessons,
      name: lessons[0].title,
      link: lessons[0].link,
      userPrefStore: useUserPrefStore()
    }
  },
  methods: {
    menuClick(action){
      this.name=action.title;
      this.link=action.link;
    },
    useLesson(lesson){
      this.userPrefStore.actionLesson(lesson);
    }
  }
}
</script>