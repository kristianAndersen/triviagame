<template>
<!--Component for displaying and handling end result screen-->
    <div>
    <!--Fade in results and restart button when question answered threshold has been reached
        Display appropriate endscreen based on player performance-->
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
            <div v-if="correct<10 && correct>=5">
                <img class="looserimg" src="closebutno.gif">
                <h2 class="htag">SO CLOSE YET SO FAR <br>you got {{totalScore}} points</h2>
                <div class="score"> You answered <br><span class="highlight">{{
                    howGoodBad}} % correctly. That is {{correct}} out of {{qCount}} sad!
                    </span>
                </div>
                <hr class="divider"/> 
                <router-link to="/">
                    <button> TRY AGAIN</button>
                </router-link>
                <hr class="divider"/> 
            </div>
            <div v-if="correct<5">
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
<<<<<<< HEAD
  data() {
    return {
      toggle: false,
    };
  },
  props: {
    totalScore: Number,
    qCount:Number,
    correct:Number,
    uAnswer:null,
    cAnswer:null,
    quest:null
  },
  computed: {
    howGoodBad() {
      return Math.floor((this.correct / this.qCount) * 100);
    },
    allquest() {
      let obj = {};
      for (let i = 0; i < this.quest.length; i++) {
        obj[i] = { q: this.quest[i], ua: this.uAnswer, ca: this.cAnswer };
      }
      return obj;
    }
  },
  methods: {
    showans: function() {
      console.log("wuu");
      this.isActive = !this.isActive;
    }
  }
=======
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
>>>>>>> 5627fa475e279aee4317520feab1bf1a128cca4e
};
</script>

<style scoped>
.endgamestats {
  position: relative;
  display: block;
  margin: 0 auto;
  width: 50vw;
  min-height: 40vh;
  background-color: rgb(194, 175, 66);
  border-radius: 1rem;
  padding-bottom: 1rem;
  overflow: hidden;
}
.ans {
  position: absolute;
  display: block;
  margin: 0 auto;
  width: 50vw;
  height: 100%;
  background-color: rgb(253, 253, 253);
  border-radius: 1rem;
  padding-bottom: 1rem;
  z-index: 100;
  color: rgb(20, 21, 22);
  bottom: 0%;
}
.ansup {
  bottom: 0;
}
.htag {
  padding: 1rem;
  font-size: 180%;
  text-transform: uppercase;
  font-weight: bolder;
}
.loserimg {
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 4rem;
  width: 10%;
  height: 10%;
}
img {
  border-radius: 100%;
  height: 40%;
  width: 40%;
  margin: 0 auto;
  margin-top: 2rem;
  overflow: hidden;
}
.score {
  padding: 1rem;
}
.highlight {
  color: rgb(207, 7, 7);
}

button {
  padding: 1rem;
  margin: 0.4rem;
}
.rightWrong {
  position: relative;
  display: block;
  width: 100%;
}
.row {
  width: 50%;
  float: left;
}
.row1 {
  width: 100%;
  display: block;
  float: left;
}

.qu {
  height: 100%;
  display: block;
  font-weight: bold;
  word-wrap: normal;
  font-size: 70%;
}
.ua {
  float: left;
  height: 100%;
  display: block;
  font-size: 80%;
  margin-bottom: 1.1rem;
}
.ca {
  float: right;
  height: 100%;
  display: block;
  font-size: 80%;
  margin-bottom: 1.1rem;
}
.right {
  color: darkgreen;
}
.wrong {
  color: crimson;
}
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
