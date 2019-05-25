<template>
    <div id="home">
        <About id="about"/>
        <div style="height: 25px"></div>
        <h3>Language/Framework Experience</h3>
        <Slideshow v-bind:images="images"/>
    </div>      
</template>


<script>
import About from "../components/About";
import Slideshow from "../components/Slideshow";
export default {
    name: 'home',
    components: {
        About,
        Slideshow
    },
    data(){
        return{
            images: [
                { 
                    filename: "c.png", 
                    caption: "C"
                },
                { 
                    filename: "gamemaker.png", 
                    caption: "Game Maker Studio 2"
                },
                { 
                    filename: "godot.png", 
                    caption: "Gofot Game Engine"
                },
                { 
                    filename: "html5.png", 
                    caption: "HTML5"
                },
                { 
                    filename: "java.png", 
                    caption: "Java"
                },
                { 
                    filename: "python.png", 
                    caption: "Python"
                },
                { 
                    filename: "vue.png", 
                    caption: "Vue Js"
                },
                { 
                    filename: "ionic.png", 
                    caption: "Ionic 3 and 4"
                },
                { 
                    filename: "angular.png", 
                    caption: "AngularJs by Google"
                }
            ]
        }
    }
}
</script>

<style scoped>
    #home{
        height: 100%;
        width: 100%;
        /* overflow: hidden; */
    }

</style>

