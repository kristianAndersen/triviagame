<template>
<!--Component for displaying score related to total questions-->
  <div id="scorenum" >{{"You have "+correctQuestions+" correct answers out of "+numOfQuestions}} </div>
       
    
</template>

<script>
export default {
 name: "score",
      props: {
         correctQuestions: Number,
         numOfQuestions:Number
      }
}
</script>
 
<style scoped>

#scorenum{
text-transform: uppercase;
font-weight: bolder;
color: rgb(55, 74, 160);
font-size: clamp(

  var(--fluid-type-min, 2rem),
    calc(1rem + var(--fluid-type-target, 3vw)),
    var(--fluid-type-max, 3rem)
)
};

</style>
