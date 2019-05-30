<template>
    <div id="socials">
        <h1>Check me out online!</h1>
        <div class="social-card">
            <h3>Github</h3>
            <div class="github-card" :data-github="github.handle" data-width="400" data-height="150" data-theme="default"></div>
        </div>

        <div class="social-card">
            <h3>LinkedIn</h3>
            <div>
                <img src="../assets/linkedIn.png" alt="">
            </div>
        </div>

        <div class="social-card">
            <h3>Github</h3>
            <div class="github-card" :data-github="github.handle" data-width="400" data-height="150" data-theme="default"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            linkedIn:{
                handle: "",
                imgsrc: "",
                link: ""
            },
            instagram:{
                handle: "",
                imgsrc: "",
                link: ""
            },
            github:{
                handle: "rowatk",
                imgsrc: "",
                link: ""
            },

        }
    },
    mounted(){
        let gcScript = document.createElement('script');
        gcScript.setAttribute('src', "//cdn.jsdelivr.net/github-cards/latest/widget.js");
        document.head.appendChild(gcScript);
    }
    
}
</script>

<style scoped>
    #socials{

    }

    .social-card{
        padding: 30px;
    }
</style>
