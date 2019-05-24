<template>
    <div id="about">
        <!-- Profile pic -->
        <div id="profile-pic">
            <img alt="Profile Image here" src="../assets/placeholder.png"/>
        </div>

        <!-- About message -->
        <div id="msg">
            <!-- <div id="space"></div> -->
            <div>
                <h3>About Me</h3>
                <p>{{aboutmsg}}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'about',
    components: {

    },
    data(){
        return{
            aboutmsg: "My name is Rowan Atkinson. I am a 2nd year Computer Science Major at the University of the West Indies. I currently am interested in mobile application and game development."
        }
    }
}
</script>


<style scoped>
    #about{
        display: inline-block;
    }
    #profile-pic{
        float: left;
        height: 200px;
        width: 200px;
    }

    img{
        height:100%;
        width: 100%;
    }

    #msg{
        /* float: right; */
        height: 200px;
        display: flex;
        align-items:flex-end ;
        justify-content: center;
        padding-left: 10px;
        padding-bottom: 0px;
    }

    #space{
        /* width: 50px;
        height: */
    }
</style>
