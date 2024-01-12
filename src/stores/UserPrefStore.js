import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";


export const useUserPrefStore = defineStore("UserPrefStore",{
    state:() => ({
        currency: useStorage('currency',"eur"),
        lessons: useStorage('lessons',[]),
        portfolio: useStorage('portfolio',[]),
        money: useStorage('money',0),
        checkedLessons: useStorage('checkedLessons',[])
    })
    ,
    actions:{
        changeCur(item){
            this.currency = item.name
        },
        actionLesson(lesson){
            const existingLessons = this.lessons.filter(el => el.id === lesson.id);
            if(existingLessons.length === 0){
                this.lessons.push(lesson)
                const checkedLessons = this.checkedLessons.filter(el => el.id === lesson.id);
                if(checkedLessons.length === 0){
                    this.checkedLessons.push(lesson)
                    this.money+=lesson.prise
                    console.log(this.money)
                }
            }else{
                this.lessons = this.lessons.filter(el=>el.id !== lesson.id)
            }
        },
        checkLesson(lesson){
            const existingLessons = this.lessons.filter(el => el.id === lesson.id);
            if (existingLessons.length === 0) {
                return true
            }else{
                return false
            }
        },
        addToPortfolio(coin,amount,price){
            const existingCoin = this.portfolio.filter(el => el.id === coin.id);
            if(existingCoin.length === 0){
                this.portfolio.push({id:coin.id, amount: parseFloat(amount),buying_price: parseFloat(coin.market_data.current_price[this.currency]), price: parseFloat(price), web_slug: coin.web_slug, income: 0});

            }else{
                for (let i = 0; i < this.portfolio.length; i++) {
                    if (this.portfolio[i].id === coin.id) {
                        this.portfolio[i].amount += parseFloat(amount);
                        this.portfolio[i].price += parseFloat(price);
                        break;
                    }
                }
            }
            this.money = (this.money-parseFloat(price))
            this.money = Math.round(this.money*100)/100
        },
        sellFromPortfolio(coin,amount,price){
            for (let i = 0; i < this.portfolio.length; i++) {
                if (this.portfolio[i].id === coin.id) {
                    this.portfolio[i].amount -= parseFloat(amount);
                    this.portfolio[i].price -= parseFloat(price);
                    break;
                }
            }
            console.log(this.money+Math.round(parseFloat(price)*100)/100)
            this.money+=Math.round(parseFloat(price)*100)/100
        },
        userHave(coin){
            for (let i = 0; i < this.portfolio.length; i++) {
                if (this.portfolio[i].id === coin.id) {
                    return {"amount": this.portfolio[i].amount, "price": this.portfolio[i].price};
                }
            }
        }
    }
})