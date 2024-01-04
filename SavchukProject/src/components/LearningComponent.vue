<script>
  import learning from "/src/assets/learning.json"
  import lessons from "@/assets/lessons.json";
export default {
  name: "LearningComponent",
  data(){
    return {
      items: learning,
      title: learning[0].title,
      text: learning[0].text,
      img: learning[0].img
    }
  },
  methods:{
    chooseLearning(num){
      this.title = learning[num].title;
      this.text = learning[num].text;
      this.img = learning[num].img;
    }
  }
}
</script>

<template>
  <section class="crypto" id="learn-section">
    <h1 class="name">What you'll learn</h1>
    <div class="item">
      <img :src="img" alt="" id="crypto-img">
      <div class="present">
        <ul id="btns">
          <li v-for="(el,ind) in items"><button class="btn" @click="chooseLearning(ind)">{{ el.title }}</button> </li>
        </ul>
        <div class="text">
          <h1 id="crypto-name">{{ title }}</h1>
          <p id="crypto-text">{{ text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>