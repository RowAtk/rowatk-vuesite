<template>
    <div id="main-content">
        <Home/>
    </div>
</template>

<script>
import Home from "./Home.vue";

// TO DO
// import Resume from "./Resume.vue";
// import Contact from "./Contact.vue"
// import Social from "./Social.vue";
export default {
    name: 'main-content',
    components: {
        Home,
        // Resume,
        // Contact,
        // Social
    }
}
</script>

<style scoped>
    #main-content{
        display: inline-block;
        padding: 20px;
        height: auto;
    }
</style>
