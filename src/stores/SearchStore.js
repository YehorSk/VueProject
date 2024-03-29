import { defineStore } from "pinia";
import {useCryptoStore} from "@/stores/CryptoStore.js";

const url = "https://api.coingecko.com/api/v3/search?query=";

export const useSearchStore = defineStore("searchStore",{
    state: () =>({
        loader: false,
        coins: []
    }),
    actions: {
        async getCoins(search){
            this.loader = true;
            const res = await fetch(`${url}${search}`);
            const data = await res.json();
            // console.log(data);
            this.coins = data.coins;
            this.loader = false;
        },
        followCoin(object){
            const cryptoStore = useCryptoStore();
            cryptoStore.coins.push(object);
        }
    }
});