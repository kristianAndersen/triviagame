<template>
<div>
  <h2 v-if="totalScore==10 && qCount==10">YOU WIN</h2>
  <div v-if="totalScore<=10 && qCount==10">
  <h2>YOU ARE A BIG LOOSER</h2>
  <button> TRY AGAIN</button>
  </div>
</div>
</template>

<script>

export default {

props:{
    totalScore:Number,
    qCount:Number
}
}
</script>

<style>

</style>