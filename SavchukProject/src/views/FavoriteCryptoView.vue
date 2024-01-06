<template>
  <div>
    <CoinComponent v-for="coin in cryptoStore.coins" :key="coin.id" :coin="coin"/>
  </div>
</template>

<script>
import { useCryptoStore} from "@/stores/CryptoStore.js";
import CoinComponent from "@/components/CoinComponent.vue";

export default {
  name: "FavoriteCryptoView",
  components: {CoinComponent},
  data(){
    return{
      cryptoStore : useCryptoStore()
    }
  }
}
</script>

<style scoped>

</style>