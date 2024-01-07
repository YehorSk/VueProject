import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";

export const useCryptoStore = defineStore("CryptoStore",{
    state: () => ({
        coins: useStorage('coins',[]),
    }),
    getters: {
        totalCountCoins(){
            return this.coins.length;
        }
    },
    actions: {
        deleteCoin(id){
            this.coins = this.coins.filter((el)=>el.id !== id);
        },
        checkCoin(id) {
            console.log(this.coins.some((coin) => coin.id === id))
            return this.coins.some((coin) => coin.id === id);
        }
    }
});