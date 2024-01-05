<script>
import { useCryptoStore} from "@/stores/CryptoStore.js";

export default {
  name: "Crypto",
  data() {
    return{
      cryptoStore: useCryptoStore()
    }
  },
  mounted() {
    this.cryptoStore.getCoins();
  }
}
</script>

<template>
  <div>
    <v-list lines="one">
      <v-list-item
          v-for="coin in cryptoStore.coins"
          :key="coin.id"
          :title="coin.name"
          :subtitle="coin.symbol"
      ></v-list-item>
    </v-list>
  </div>
</template>

<style scoped>

</style>