import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";


export const useUserPrefStore = defineStore("UserPrefStore",{
    state:() => ({
        currency: useStorage('currency',"eur"),
        lessons: useStorage('lessons',[])
    }),
    actions:{
        changeCur(item){

                this.currency=item.name

        },
        actionLesson(lesson){
            if(this.checkLesson(lesson) === true){
                this.lessons.push(lesson)
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
        }
    }
})