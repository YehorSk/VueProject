<script>
import { useCryptoStore} from "@/stores/CryptoStore.js";
import { useSearchStore } from "@/stores/SearchStore.js";
import CoinComponent from "@/components/CoinComponent.vue";
import ToolbarComponent from "@/components/ToolbarComponent.vue";


export default {
  name: "Crypto",
  components: {ToolbarComponent, CoinComponent},
  data() {
    return{
      cryptoStore: useCryptoStore(),
      searchStore: useSearchStore()
    }
  }
}
</script>

<template>

  <v-card
      color="grey-lighten-4"
      flat
      rounded="0"
  >
    <ToolbarComponent/>
  </v-card>
  <v-container >

    <v-row no-gutters>
      <v-col cols="10">
        <v-sheet class="pa-2 ma-2 bg-black" >
          <v-text-field v-model="searchCoin" label="Type name of coin"></v-text-field>
        </v-sheet>
      </v-col>

      <v-col cols="2">
        <v-sheet class="pa-2 ma-2 bg-black" >
          <v-btn
              @click="searchStore.getCoins(searchCoin)"
              size="x-large"
              prepend-icon="mdi-magnify"
          >
            <template v-slot:prepend>
              <v-icon color="success"></v-icon>
            </template>

            Search

          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>


  <h1 v-if="searchStore.loader === true">Loading</h1>
  <div v-else>
    <CoinComponent
        v-for="coin in searchStore.coins"
        :key="coin.id"
        :coin="coin"
    />
  </div>
</template>

<style scoped>

</style>