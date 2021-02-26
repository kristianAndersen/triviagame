<template>
    <div>
        <div v-if="questionCount!=getQuestionsLength" class="questionTime">
     <!--Do noyt show the question if it is not yet loaded -->         
    <h1  class="thequestion fade-in" v-html="loading ? 'Loading...' : getCurQuestion.question"></h1>
     <score :numOfQuestions=getQuestionsLength :scoreNum.sync="scoreCount"/>
    

    <div class="btnwrap" >
        <hr class="divider"/> 
        <div class="btnwrapinner" v-if="getCurQuestion">
        <button class="fade-in"
          v-for="answer in getCurQuestion.answers"
          :index="getCurQuestion.key"
          :key="answer"
          v-html="answer"
          @click.prevent="handleButtonClick"
        ></button>
         </div>
            <hr class="divider"/> 
      </div>
    
      </div>

           

            <div class="endgameWrap">
            <endgame :totalScore="scoreCount" :qCount="questionCount"/>
            </div>
          
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
      correctQuestions:null,
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
      this.correctQuestions=0;

      this.apidata.then((result) => { 
         this.questions=result;  
         this.loading=false   
      })
  
    
  },
  methods:{
  
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
  },
  computed:{
      getCurQuestion(){
        if (this.questions !== []) {
           
                return this.questions[this.questionCount];
            }
      return null;
      },
      getQuestionsLength(){
          
          return this.questions.length -1
      },
      getQcount(){
          return this.questionCount;
      },
  
  },
 
};
</script>
<style>

.questionTime{
    position: relative;
    padding-bottom: 2rem;
    margin: 0 auto;
    width: 90vw;
    min-height: 33rem;
    background-color: rgb(88, 146, 146);
    border-radius: 1rem;
}
.thequestion{
    padding: 2rem;
    font-size: 150%;
    text-transform: uppercase;
    font-weight: bolder;
}
.divider {
   -webkit-box-flex: 1;
       -ms-flex-positive: 1;
           flex-grow: 1;
  border-bottom: 0.1rem solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.btnwrap {
  position: relative;
  display: block;
  min-height: 17.25rem;
  width: 90%;
  margin: 0 auto;
  

}
.btnwrapinner{

  display: -webkit-box;

  display: -ms-flexbox;

  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
button:focus {outline:0;}

button {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 2rem;
  margin: 0.9rem;
  width: 47%;
  background-color: rgba(100, 100, 100, 0.3);
  border: none;
  border-radius: 0.4rem;
  -webkit-box-shadow: 0.2rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
          box-shadow: 0.2rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: aliceblue;
}
button.answerCorrect{
 background: -webkit-gradient(
    linear,
    left top, left bottom,
    from(rgba(100, 100, 100, 0.3)),
    to(rgba(0, 178, 72, 0.5))
  );
 background: -o-linear-gradient(
    top,
    rgba(100, 100, 100, 0.3),
    rgba(0, 178, 72, 0.5)
  );
 background: linear-gradient(
    180deg,
    rgba(100, 100, 100, 0.3),
    rgba(0, 178, 72, 0.5)
  );

}

button.answerLooser{
 background: -webkit-gradient(
    linear,
    left top, left bottom,
    from(rgba(100, 100, 100, 0.3)),
    to(rgb(202, 1, 1))
  );
 background: -o-linear-gradient(
    top,
    rgba(100, 100, 100, 0.3),
    rgb(202, 1, 1)
  );
 background: linear-gradient(
    180deg,
    rgba(100, 100, 100, 0.3),
    rgb(202, 1, 1)
  );
}
button:hover {
  -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
          transform: scale(1.05);
  -webkit-box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.14), 0 0.2rem 0.7rem 0 rgba(0, 0, 0, 0.12),
    0 0.2rem 0.2rem -0.2rem rgba(0, 0, 0, 0.2);
          box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.14), 0 0.2rem 0.7rem 0 rgba(0, 0, 0, 0.12),
    0 0.2rem 0.2rem -0.2rem rgba(0, 0, 0, 0.2);
}

.fade-in {
animation: fadeIn ease 2s;
-webkit-animation: fadeIn ease 2s;
-moz-animation: fadeIn ease 2s;
-o-animation: fadeIn ease 2s;
-ms-animation: fadeIn ease 2s;
}
@-webkit-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}
@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

.fade-out {
animation: fadeOut ease 2s;
-webkit-animation: fadeOut ease 2s;
-moz-animation: fadeOut ease 2s;
-o-animation: fadeOut ease 2s;
-ms-animation: fadeOut ease 2s;
}
@-webkit-keyframes fadeOut {
0% {opacity:1;}
100% {opacity:0;}
}
@keyframes fadeOut {
0% {opacity:1;}
100% {opacity:0;}
}

</style>