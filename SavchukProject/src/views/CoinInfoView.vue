<template>
  <v-card
      color="grey-lighten-4"
      flat
      rounded="0"
  >
    <v-toolbar>
      <v-btn
          icon
          class="hidden-xs-only"
          @click="$router.back()"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Go Back</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-toolbar>
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
        <v-col cols="auto">
          <v-btn style="background-color:green;" @click="searchStore.followCoin(coin)">Follow</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn style="background-color:red;">Unfollow</v-btn>
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
              <h1>{{coin.symbol}} Price</h1>
              <h3 v-if="coin.market_data && coin.market_data.current_price"><span style="color:green">{{ coin.market_data.current_price.eur }}</span></h3>
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

export default {
  name: "CoinInfoView",
  data(){
    return{
      coin: Object,
      loader: false,
      searchStore: useSearchStore(),
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
    }
  },
  mounted() {
    this.getCoinInfo();
  }
}
</script>

<style scoped>

</style>