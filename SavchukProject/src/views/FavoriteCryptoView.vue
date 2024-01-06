<template>
  <div>
    <FavoriteCoinComponent v-for="coin in cryptoStore.coins" :key="coin.id" :coin="coin"/>
  </div>
</template>

<script>
import { useCryptoStore} from "@/stores/CryptoStore.js";
import FavoriteCoinComponent from "@/components/FavoriteCoinComponent.vue";

export default {
  name: "FavoriteCryptoView",
  components: {FavoriteCoinComponent},
  data(){
    return{
      cryptoStore : useCryptoStore()
    }
  }
}
</script>

<style scoped>

</style>