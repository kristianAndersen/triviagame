<template>
<!--hide button on click-->
  <button v-if="isHidden" id="pbtn" @click="onClick" v-on:click="isHidden = !isHidden">
       <slot>wuub</slot>
  </button>
</template>

<script>


export default {
  name: 'Button',
   data() {
     return{
        isHidden: true
     }
      },
 props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>

#pbtn{
    padding: 1.5rem;
    font-weight: bold;
    border: none;
    border-radius: 0.2rem;
    background-color: rgba(13, 153, 153, 0.644);
    color:white;
    cursor: pointer;
}
</style>