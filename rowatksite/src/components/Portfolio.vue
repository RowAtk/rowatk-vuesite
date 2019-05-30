<template>
    <div id='portfolio'>
        <img id='logo' alt="Rowatk" src="../assets/branding/logo.png">
        <!-- HELLLOOOOOOOOOO -->
        <h2 id='name'>{{name}}</h2>
        <h4><a href="mailto: rowaneatkinson@gmail.com">rowaneatkinson@gmail.com</a></h4>
        <h5><a href="tel:+1-876-366-5118">+1 (876) 366-5118</a></h5>
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
        padding-top: 30px;
        padding-bottom: 30px;
        color: rgb(233, 232, 232);
        /* text-shadow: 0.5px 0.5px #000; */
    }

    a{
        color: rgb(0, 0, 0);

    }
</style>
