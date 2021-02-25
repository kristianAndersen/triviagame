<template>
    <div id="questionTime">
     <!--Do noyt show the question if it is not yet loaded -->         
    <h1 id="thequestion" class="fade-in" v-html="loading ? 'Loading...' : getCurQuestion.question"></h1>
    
    <hr class="divider"/> 

    <div id="btnwrap" >
        <div id="btnwrapinner" v-if="getCurQuestion">
        <button class="fade-in"
          v-for="answer in getCurQuestion.answers"
          :index="getCurQuestion.key"
          :key="answer"
          v-html="answer"
          @click.prevent="handleButtonClick"
        ></button>
         </div>
      </div>
 <hr class="divider"/> 
            <score :scoreNum.sync="scoreCount"/>
            <endgame :totalScore="scoreCount" :qCount="questionCount"/>
      </div>

</template>

<script>

import score from './scorer';
import endgame from './EndGame';
export default {
  name: 'game',
  data(){
    return {
      questionCount:null,
      scoreCount:null,
      questions:[],
      loading:true
    }
  },components:{
        score,
        endgame
  },
   props: {
    apidata:Promise,
    totalScore:Number
  },
  created:function(){
      this.questionCount=0;
      this.scoreCount=0;
      
      this.apidata.then((result) => { 
         this.questions=result;  
         this.loading=false   
      })
  
    
  },
  methods:{
    setQcount:function(){
        this.questionCount++
    },
    handleButtonClick: function(evt) {
        let index = evt.target.getAttribute("index");
        let answer =evt.target.innerHTML;
        let target=evt.target;
        this.isAnswerCorrect(answer,index,target);
    },
    isAnswerCorrect: function(answer,index,target){
        
        if(answer==this.questions[index].correct_answer){
         target.classList.add("answerCorrect");
         this.scoreCount++
        }else{
            target.classList.add("answerLooser");
            
        }
         setTimeout(
            function() {
                target.classList.remove("answerCorrect");
                target.classList.remove("answerLooser");
              this.questionCount++
            }.bind(this),
            1000
          );
       

    }
  },computed:{
      getCurQuestion(){
        if (this.questions !== []) {
           
                return this.questions[this.questionCount];
            }
      return null;
      },
      getQcount(){
          return this.questionCount;
      },
  
  }
 
};
</script>
<style scoped>
#questionTime{
    position: relative;
    margin: 0 auto;
    width: 90vw;
    min-height: 12rem;
    background-color: aqua;
    border-radius: 1rem;
}
#thequestion{
    padding: 2rem;
    text-transform: uppercase;
}
.divider {
   flex-grow: 1;
  border-bottom: 0.1rem solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

#btnwrap {
  position: relative;
  display: block;
  min-height: 10rem;
  width: 90%;
  margin: 0 auto;
  

}
#btnwrapinner{
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
button:focus {outline:0;}

button {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 2rem;
  margin: 0.3rem;
  width: 47%;
  background-color: rgba(100, 100, 100, 0.3);
  border: none;
  border-radius: 0.4rem;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
button.answerCorrect{
 background: linear-gradient(
    180deg,
    rgba(100, 100, 100, 0.3),
    rgba(0, 178, 72, 0.5)
  );

}

button.answerLooser{
 background: linear-gradient(
    180deg,
    rgba(100, 100, 100, 0.3),
    rgb(202, 1, 1)
  );
}
button:hover {
  transform: scale(1.02);
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -1px rgba(0, 0, 0, 0.2);
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