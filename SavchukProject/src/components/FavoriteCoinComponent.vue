<script>
export default {
  name: "FavoriteCoinComponent",
  props:{
    coin:{
      type: Object,
      required: true,
      default: () => {}
    },
  }
}
</script>

<template>
  <template>

    <router-link :to="`/coins/${coin.api_symbol}`">
      <v-card
          class="mx-auto my-8"
          max-width="600"
          :title="coin.name"
          :subtitle="coin.symbol"
          :prepend-avatar="coin.image.large"
          append-icon="mdi-open-in-new"
          target="_blank"
          rel="noopener"
      ></v-card>
    </router-link>
  </template>
</template>

<style scoped>

</style>