import {defineStore} from "pinia";

const url = "https://api.coingecko.com/api/v3/coins/list";

export const useCryptoStore = defineStore("CryptoStore",{
    state: () => ({
        coins: []
    }),
    actions: {
        async getCoins(){
            const res = await fetch(`${url}`);
            const data = await res.json();
            this.coins = data;
        }
    }
});