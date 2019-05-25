<template>
  <div id="">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Sidebar id="sidebar"/>
    <main-content id="main-content"/>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import MainContent from "./MainContent.vue"

export default {
  name: 'main',
  components: {
    Sidebar,
    MainContent
  }
}
</script>

<style scoped>
    #main{
        display: 'inline-block';
    }

    #main-content{
        margin-left: 250px;
    }


</style>
