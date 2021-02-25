<template>
    <div id="questionTime">
      
        <h2 v-html="quest[questionCount]"></h2>
      
           <div v-for="(q, index) in quest" :key="index" v-show="index === questionCount">
                <div v-if="q.type == 'boolean'">
                 <button @click="isAvnswerCorrect('True',questionCount)">TRUE</button>
                 <button @click="isAvnswerCorrect('False',questionCount)">FALSE</button>
            </div>

            <div v-else>
                <div v-for="(aws, index) in aws[index]" :key="index">
            <h2>{{q.correct_answer}}</h2>
                <button @click="isAvnswerCorrect(aws,questionCount)" v-html="aws"></button>
          </div>
            </div>
            <score :scoreNum.sync="scoreCount"/>
           </div>
      <endgame :totalScore="scoreCount" :qCount="questionCount"/>
      <!--
           
            -->
      </div>

</template>

<script>

import {getAnswers} from '../utills/answers.js'
import {getQuestion} from '../utills/getQuestions.js'
import score from './scorer';
import endgame from './EndGame';
export default {
  name: 'game',
  data(){
    return {
      questionCount:null,
      scoreCount:null,
      qaObj:[],
      quest:[],
      aws:[]
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
         this.qaObj=result;     
         this.aws=getAnswers(result);
         this.quest=getQuestion(result);
      })
  
    
  },
  methods:{
    setQcount:function(){
        this.questionCount++
    },
    isAvnswerCorrect(answer,index){
        console.log(answer+" -- "+this.qaObj[index].correct_answer)

        if(answer==this.qaObj[index].correct_answer){
        this.scoreCount++
        }
        this.questionCount++

    }
  },computed:{
      getQcount(){
          return this.questionCount;
      },
        getType(num){
          return this.qaObj[num].type;
      }
  }
 
};
</script>
<style scoped>
#questionTime{
    position: relative;
    margin: 0 auto;
    width: 90vw;
    background-color: aqua;
}
</style>