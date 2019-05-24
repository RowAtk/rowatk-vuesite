<template>
    <div id='portfolio'>
        <img id='logo' alt="Rowatk" src="../assets/branding/logo.png">
        <!-- HELLLOOOOOOOOOO -->
        <h2 id='name'>{{name}}</h2>
    </div>
</template>

<script>
export default {
    name: 'portfolio',
    components:{

    },
    data(){
        return {
            name: "Rowan Atkinson"
        }
    }
}
</script>

<style scoped>
    #portfolio{
        /* padding: 10px; */
        padding-bottom: 50px;
    }

    #logo{
        width: 100%;
        height: 100%;
    }

    #name{
        padding: 30px;
        color: rgb(233, 232, 232);
        /* text-shadow: 0.5px 0.5px #000; */
    }
</style>
