<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <line-example></line-example>
  </div>
</template>

<script>
import LineExample from './components/LineChart.js'
export default {
  name: 'App',
  components: {
    LineExample
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
