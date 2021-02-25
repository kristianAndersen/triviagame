<template>
  <div id="scorenum" v-html="scoreNum"> </div>
       
    
</template>

<script>
export default {
 name: "score",
      props: {
         scoreNum: Number
      }
}
</script>
 
<style scoped>

#scorenum{

font-weight: bolder;
font-size: clamp(

  var(--fluid-type-min, 2.5rem),
    calc(1rem + var(--fluid-type-target, 5vw)),
    var(--fluid-type-max, 5rem)
)
};

</style>