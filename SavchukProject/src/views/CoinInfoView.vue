<template>
  <v-card
      color="grey-lighten-4"
      flat
      rounded="0"
  >
<ToolbarComponent/>
  </v-card>
  <div>
    <h1 v-if="loader">Loading</h1>
    <div v-else>
      <v-container>
        <v-row justify="center">
          <v-col cols="1">
            <v-sheet class="pa-2  bg-black">
              <img :src="coin.image && coin.image.large" alt="coin">
            </v-sheet>
          </v-col>
        </v-row>

        <v-col cols="auto" v-if="checkCoinId(coin) !== true">
          <v-btn style="background-color:green;" @click="searchStore.followCoin(coin)">Follow</v-btn>
        </v-col>
        <v-col cols="auto" v-else>
          <v-btn style="background-color:red;" @click="this.cryptoStore.deleteCoin(coin.id)">Unfollow</v-btn>
        </v-col>
        <h1>Market stats</h1>
        <v-container class=" bg-black">
          <v-row no-gutters>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>MARKET CAP</h3>
                <p v-if="coin.market_data && coin.market_data.market_cap.eur">{{coin.market_data.market_cap.eur}}</p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>CIRCULATING SUPPLY</h3>
                <p v-if="coin.market_data && coin.market_data.circulating_supply">{{coin.market_data.circulating_supply}} {{ coin.symbol }} </p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
              </v-sheet>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>POPULARITY</h3>
                <p v-if="coin.market_data && coin.market_data.market_cap_rank">{{ coin.market_data.market_cap_rank }}</p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>PRICE CHANGE (1H)</h3>
                <p v-if="coin.market_data && coin.market_data.price_change_percentage_1h_in_currency.eur">{{ coin.market_data.price_change_percentage_1h_in_currency.eur }} %</p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>PRICE CHANGE (24H)</h3>
                <p v-if="coin.market_data && coin.market_data.price_change_percentage_24h_in_currency.eur">{{ coin.market_data.price_change_percentage_24h_in_currency.eur }} %</p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>PRICE CHANGE (7D)</h3>
                <p v-if="coin.market_data && coin.market_data.price_change_percentage_7d_in_currency.eur">{{ coin.market_data.price_change_percentage_7d_in_currency.eur }} %</p>
              </v-sheet>
            </v-col>
          </v-row>

        </v-container>

        <v-row justify="center">
          <v-col cols="12">
            <v-sheet class="pa-2  bg-black">
              <h1>{{ coin.name }}</h1>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-sheet class="pa-2  bg-black">
              <h1>{{coin.symbol}} Price {{userPrefStore.currency.toUpperCase()}}</h1>
              <h3 v-if="coin.market_data && coin.market_data.current_price"><span style="color:green">{{ coin.market_data.current_price[userPrefStore.currency] }}</span></h3>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-sheet class="pa-2  bg-black">
              <h1>About {{coin.name}}</h1>
              <p v-if="coin.description && coin.description.en" v-html="coin.description.en"></p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import {useSearchStore} from "@/stores/SearchStore.js";
import {useCryptoStore} from "@/stores/CryptoStore.js";
import {useUserPrefStore} from "@/stores/UserPrefStore.js";
import ToolbarComponent from "@/components/ToolbarComponent.vue";

export default {
  name: "CoinInfoView",
  components: {ToolbarComponent},
  data(){
    return{
      coin: Object,
      loader: false,
      searchStore: useSearchStore(),
      cryptoStore: useCryptoStore(),
      userPrefStore: useUserPrefStore()
    }
  },
  methods:{
    async getCoinInfo(){
      this.loader = true;
      const url ="https://api.coingecko.com/api/v3/coins/";
      const res = await fetch(`${url}${this.$route.params.slug}`);
      this.coin = await res.json();
      this.loader = false;
      console.log(this.coin);
    },
    checkCoinId(object){
      return this.cryptoStore.checkCoin(object.id)
    },
  },
  mounted() {
    this.getCoinInfo();
  }
}
</script>

<style scoped>

</style>