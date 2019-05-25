<template>
    <div id="main-content">
        <Home/>
    </div>
</template>

<script>
import Home from "./Home.vue";
import routes from "../routes.js";

// TO DO
// import Resume from "./Resume.vue";
// import Contact from "./Contact.vue"
// import Social from "./Social.vue";
export default {
    name: 'main-content',
    data: function(){
        return{
            currentPage: window.location.pathname
        }
    },  
    components: {
        Home,
        // Resume,
        // Contact,
        // Social
    },
    computed: {
        ViewComponent: function(){
            return routes[this.currentPage]
        }
    },
    created: function(){
        console.log(routes);
    },
    render (h) { return h(this.ViewComponent) }
}
</script>

<style scoped>
    #main-content{
        display: inline-block;
        padding: 20px;
        height: auto;
    }
</style>
