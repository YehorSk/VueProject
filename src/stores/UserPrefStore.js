import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";


export const useUserPrefStore = defineStore("UserPrefStore",{
    state:() => ({
        currency: useStorage('currency',"eur"),
        lessons: useStorage('lessons',[]),
        portfolio: useStorage('portfolio',[]),
        money: useStorage('money',0),
        checkedLessons: useStorage('checkedLessons',[])
    }),
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
                console.log("added")
            }else{
                this.lessons = this.lessons.filter(el=>el.id !== lesson.id)
                console.log("deleted")
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
            this.portfolio.push({ ...coin, amount: amount, price: price});
            this.money -= price
        }
    }
})