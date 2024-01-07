<template>
  <ToolbarComponent/>
  <h1>Favorite coins</h1>
  <div>
    <FavoriteCoinComponent v-for="coin in cryptoStore.coins" :key="coin.id" :coin="coin"/>
  </div>
</template>

<script>
import { useCryptoStore} from "@/stores/CryptoStore.js";
import FavoriteCoinComponent from "@/components/FavoriteCoinComponent.vue";
import ToolbarComponent from "@/components/ToolbarComponent.vue";

export default {
  name: "FavoriteCryptoView",
  components: {ToolbarComponent, FavoriteCoinComponent},
  data(){
    return{
      cryptoStore : useCryptoStore()
    }
  }
}
</script>

<style scoped>

</style>