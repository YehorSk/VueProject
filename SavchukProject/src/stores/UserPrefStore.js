import {defineStore} from "pinia";


export const useUserPrefStore = defineStore("UserPrefStore",{
    state:() => ({
        currency: "eur",
        theme: "dark"
    }),
    actions:{
        changeCur(item){
            this.currency=item.name
        }
    }
})