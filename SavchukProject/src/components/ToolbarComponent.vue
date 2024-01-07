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
    <v-btn icon
           to="/favorite">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style scoped>

</style>