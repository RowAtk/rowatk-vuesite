<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Main/>
  </div>
</template>

<script>
import Main from "./components/Main.vue"

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } 

  body{
    font-family: Arial, Helvetica, sans-serif;
    display: inline-block;
  }
</style>
