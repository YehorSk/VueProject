<template>

  <v-card
      class="mx-auto my-8"
      max-width="600"
      :title="coin.name"
      :subtitle="coin.symbol"
      :prepend-avatar="coin.large"
      append-icon="mdi-open-in-new"
      href="https://github.com/vuetifyjs/vuetify/"
      target="_blank"
      rel="noopener"
  ></v-card>
</template>

<script>
export default {
  name: "CoinComponent",
  props:{
    coin:{
      type: Object,
      required: true,
      default: () => {}
    },
  }
}
</script>

<style scoped>

</style>