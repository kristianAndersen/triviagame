<template>
  <div id="app">
       <router-view/>
  </div>
</template>

<script>



export default {
  name: 'App',
}
</script>

<style>
*,
*:after,
*:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
}
body{
   font-size: clamp(
    var(--fluid-type-min, 1rem),
    calc(1rem + var(--fluid-type-target, 3vw)),
    var(--fluid-type-max, 1.3rem)
  );
 background-color: rgb(11, 119, 119);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>
