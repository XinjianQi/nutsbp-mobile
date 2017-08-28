<template>
  <div id="app">
    <!-- <img src="./assets/img/logo.png"> -->
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src='./assets/css/Reset.css'></style>
<style src='./assets/css/Index.css'></style>
<style>
#app {
  /* position: absolute;      */
  width: 100%; 
  height: 100%;  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
