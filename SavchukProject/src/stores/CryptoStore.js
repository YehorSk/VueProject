import {defineStore} from "pinia";

export const useCryptoStore = defineStore("CryptoStore",{
    state: () => ({
        coins: []
    }),
    getters: {
        totalCountCoins(){
            return this.coins.length;
        }
    },
    actions: {
        deleteCoin(id){
            this.coins = this.coins.filter((el)=>el.id !== id);
        }
    }
});