

<template>
<ToolbarComponent/>
  <h1>Potrfolio</h1>
  <div>
    <PorfolioCoinComponent v-for="coin in userPrefStore.portfolio" :key="coin.id" :coin="coin"/>
  </div>
</template>
<script>
import ToolbarComponent from "@/components/ToolbarComponent.vue";
import {useUserPrefStore} from "@/stores/UserPrefStore.js";
import PorfolioCoinComponent from "@/components/PorfolioCoinComponent.vue";

export default {
  name: "PortfolioView",
  components: {PorfolioCoinComponent, ToolbarComponent},
  data(){
    return{
      userPrefStore: useUserPrefStore()
    }
  }
}
</script>
<style scoped>

</style>