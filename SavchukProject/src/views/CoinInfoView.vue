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

    </v-toolbar>
  </v-card>
  <div>
    <h1 v-if="loader">Loading</h1>
    <div v-else>
      <v-container>
        <v-row justify="center">
          <v-col cols="1">
            <v-sheet class="pa-2  bg-black">
              <img :src="coinInfo.image && coinInfo.image.large" alt="coin">
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-sheet class="pa-2  bg-black">
              <h1>{{ coinInfo.name }}</h1>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-sheet class="pa-2  bg-black">
              <p v-if="coinInfo.description && coinInfo.description.en" v-html="coinInfo.description.en"></p>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-sheet class="pa-2  bg-black">
              <h3 v-if="coinInfo.market_data && coinInfo.market_data.current_price">Current Price: <span style="color:green">{{ coinInfo.market_data.current_price.eur }}</span></h3>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>



    </div>
  </div>
</template>

<script>
export default {
  name: "CoinInfoView",
  data(){
    return{
      coinInfo: Object,
      loader: false
    }
  },
  methods:{
    async getCoinInfo(){
      this.loader = true;
      const url ="https://api.coingecko.com/api/v3/coins/";
      const res = await fetch(`${url}${this.$route.params.slug}`);
      this.coinInfo = await res.json();
      this.loader = false;
      console.log(this.coinInfo);
    }
  },
  mounted() {
    this.getCoinInfo();
  }
}
</script>

<style scoped>

</style>