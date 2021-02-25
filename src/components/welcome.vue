<template>
  <div class="hello">
  
  <h1>{{msg}}</h1>
     
  <!--Wrap the button in the router link-->
  <router-link to="/game">
  <v-button :onClick="clickFromButton">PLAY GAME</v-button>
  </router-link>

  <router-view>


  </router-view>
  </div>
</template>

<script>
import Button from './vButton'


export default {
  name: 'welcome',
  props: {
    msg: String
  },
    components: {
    'v-button':Button
  },
 
  methods:{
    clickFromButton() {
      
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
