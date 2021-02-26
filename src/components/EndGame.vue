<template>

<div v-if="qCount==10" id="endgamestats" class="fade-in">

  <div v-if="totalScore>=10">
    <img class="looserimg" src="winner.gif">
    <h2 class="htag" >#WINNING</h2>
       <div id="score"> You answered <span class="highlight">{{
                  howGoodBad}} % correctly!
              </span>
       </div>
      <hr class="divider"/> 
  <button> TRY AGAIN</button>
    <hr class="divider"/> 
  </div>

  <div v-if="totalScore<10">
    <img class="looserimg" src="looser.gif">
  <h2 class="htag" >YOU ARE A BIG LOOSER</h2>
        <div id="score"> You only answered <span class="highlight">{{
                  howGoodBad}} % correctly. That is {{totalScore}} out of {{qCount}} pathetic!
              </span>
       </div>
    <hr class="divider"/> 
    <router-link to="/">
  <button> TRY AGAIN</button>
    </router-link>
    <hr class="divider"/> 
  </div>
</div>
</template>

<script>

export default {

props:{
    totalScore:Number,
    qCount:Number
},
computed:{
    howGoodBad(){
          return Math.floor( (this.totalScore / this.qCount) * 100)
      }
}
};
</script>

<style scoped>

#endgamestats{
    position: relative;
    margin: 0 auto;
    width: 40vw;
    min-height: 12rem;
    background-color: rgb(194, 175, 66);
    border-radius: 1rem;
    padding-bottom: 2rem;
}
.htag{
    padding: 2rem;
    font-size: 200%;
    text-transform: uppercase;
    font-weight: bolder;
}
.looserimg{
  padding: 3rem;
  vertical-align: middle;
  width: 80%;
  height: 80%;
  border-radius: 50%;
}
.fade-in {
animation: fadeIn ease 2s;
-webkit-animation: fadeIn ease 2s;
-moz-animation: fadeIn ease 2s;
-o-animation: fadeIn ease 2s;
-ms-animation: fadeIn ease 2s;
}
@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}
</style>