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
        <h1>Buy {{ coin.name }}</h1>
        <v-sheet width="300" class="mr-auto">
          <v-form @submit.prevent>
            <v-text-field
                type="number"
                v-model="amount"
                label="Type amount"
            ></v-text-field>
            <h2 :style="{ color: totalAmount<userPrefStore.money ? 'green' : 'red' }">Total {{ totalAmount }}</h2>
            <v-btn type="submit" block class="mt-2" :disabled="totalAmount>=userPrefStore.money || totalAmount<=0" @click="addToPortfolio(coin,amount,totalAmount)">Buy</v-btn>
          </v-form>
        </v-sheet>
        <div v-if="userPrefStore.userHave(coin)">
        <h1>Sell {{ coin.name }}</h1>
        <v-sheet width="300" class="mr-auto">
          <v-form @submit.prevent>
            <v-text-field
                type="number"
                v-model="sellAmount"
                label="Type amount"
            ></v-text-field>

              <h2>Total spent: {{userPrefStore.userHave(coin).price.toFixed(2)}}</h2>
              <h2>You have: {{userPrefStore.userHave(coin).amount}}</h2>
              <h2 :style="{ color: sellAmount<=userPrefStore.userHave(coin).amount ? 'green' : 'red' }">Total {{ totalSellAmount }}</h2>
              <v-btn type="submit" :disabled="totalSellAmount<=0 || sellAmount>userPrefStore.userHave(coin).amount" block class="mt-2"  @click="sellFromPortfolio(coin,sellAmount,totalSellAmount)">Sell</v-btn>

          </v-form>
        </v-sheet>
        </div>
        <h1>Market stats</h1>
        <div v-if="coin.market_data">
        <v-container class=" bg-black">
          <v-row no-gutters>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>MARKET CAP</h3>
                <p>{{coin.market_data.market_cap.eur}}</p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>CIRCULATING SUPPLY</h3>
                <p>{{coin.market_data.circulating_supply}} {{ coin.symbol }} </p>
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
                <p>{{ coin.market_data.market_cap_rank }}</p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>PRICE CHANGE (1H)</h3>
                <p>{{ coin.market_data.price_change_percentage_1h_in_currency[userPrefStore.currency] }} %</p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>PRICE CHANGE (24H)</h3>
                <p>{{ coin.market_data.price_change_percentage_24h_in_currency[userPrefStore.currency] }} %</p>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-2 ma-2 bg-black">
                <h3>PRICE CHANGE (7D)</h3>
                <p>{{ coin.market_data.price_change_percentage_7d_in_currency[userPrefStore.currency] }} %</p>
              </v-sheet>
            </v-col>
          </v-row>

        </v-container>
        </div>
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
      userPrefStore: useUserPrefStore(),
      amount: '',
      sellAmount: '',
      totalAmount: 0,
      totalSellAmount: 0,
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
    addToPortfolio(coin,amount,price){
      this.userPrefStore.addToPortfolio(coin,amount,price)
      this.amount = 0
    },
    sellFromPortfolio(coin,amount,price){
      this.userPrefStore.sellFromPortfolio(coin,amount,price)
      this.sellAmount = 0
    }
  },
  mounted() {
    this.getCoinInfo();
  },
  watch:{
    amount(value){
      this.totalAmount = Math.round(value*this.coin.market_data.current_price[this.userPrefStore.currency] * 100)/100
   },
    sellAmount(value){
      this.totalSellAmount = Math.round(value*this.coin.market_data.current_price[this.userPrefStore.currency] * 100)/100
    }
  }
}
</script>

<style scoped>

</style>