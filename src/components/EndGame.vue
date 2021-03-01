<template>

<div>
  <div class="endgamestats fade-in" v-if="qCount==10">
  <div v-if="correct>=10">
    <img class="looserimg" src="winner.gif">
     <h2 class="htag">#WINNING <br>you got {{totalScore}} points</h2>
    
       <div class="score"> You answered <span class="highlight">{{
                  howGoodBad}} % correctly!
              </span>
       </div>
      <hr class="divider"/> 
  <button> TRY AGAIN</button>
    <hr class="divider"/> 
  </div>

  <div v-if="correct<10">
    <img class="looserimg" src="looser.gif">
    <h2 class="htag">WHAT A LOSER <br>you only got {{totalScore}} points</h2>

        <div class="score"> You answered <br><span class="highlight">{{
                  howGoodBad}} % correctly. That is {{correct}} out of {{qCount}} pathetic!
              </span>
       </div>
    <hr class="divider"/> 
    <router-link to="/">
  <button> TRY AGAIN</button>
    </router-link>
    <hr class="divider"/> 
  </div>
</div>
</div>
</template>

<script>

export default {

props:{
    totalScore:Number,
    qCount:Number,
    correct:Number
},
computed:{
    howGoodBad(){
          return Math.floor( (this.correct / this.qCount) * 100)
      }
}
};
</script>

<style scoped>

.endgamestats{
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
  width: 70%;
  height: 70%;
  border-radius: 50%;
}
.score{
  padding: 1rem;
}
.highlight{
color: rgb(207, 7, 7);
}
</style>