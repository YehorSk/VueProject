<script>
export default {
  name: "PorfolioCoinComponent",
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
  <router-link :to="`/coins/${coin.web_slug}`">
    <v-card
        class="mx-auto my-8"
        max-width="600"
        :title="coin.id"
        :subtitle="coin.symbol"
        :prepend-avatar="coin.image"
        append-icon="mdi-open-in-new"
        target="_blank"
        rel="noopener"
    >
      <v-card-text>
        You have: {{ coin.amount }}
      </v-card-text>
    </v-card>
  </router-link>
</template>

<style scoped>

</style>