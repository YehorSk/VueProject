import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";


export const useUserPrefStore = defineStore("UserPrefStore",{
    state:() => ({
        currency: useStorage('currency',"eur"),
        theme: "dark"
    }),
    actions:{
        changeCur(item){
            this.currency=item.name
        }
    }
})