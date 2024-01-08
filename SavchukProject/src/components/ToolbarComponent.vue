<script>
export default {
  name: "ToolbarComponent"
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