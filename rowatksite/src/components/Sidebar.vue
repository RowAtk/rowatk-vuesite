<template>
    <!-- The sidebar -->
    <div id="sidebar">
        <!-- <img alt="Rowatk" src="../assets/branding/logo.png"> -->
        <Portfolio/>
        <SideNav id="sidenav"/>
    </div>
</template>


<script>
import Portfolio from './Portfolio.vue'
import SideNav from './SideNav.vue'
export default {
    name: 'sidebar',
    components:{
        Portfolio,
        SideNav
    }
}
</script>


<style scoped>
    /* The side navigation menu */
    #sidebar {
        margin: 0;
        padding: 0;
        width: 250px;
        background-color: #6e6e6e;
        position: fixed;
        height: 100%;
        overflow: auto;
        text-align: center;
        display: inline-block;
        /* white-space: nowrap; */
    }

    /* Page content. The value of the margin-left property should match the value of the sidebar's width property */
    div.content {
        margin-left: 200px;
        padding: 1px 16px;
        height: 1000px;
    }

    /* On screens that are less than 700px wide, make the sidebar into a topbar */
    @media screen and (max-width: 700px) {
    #sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }
    #sidebar a {float: left;}
        div.content {margin-left: 0;}
    }

    /* On screens that are less than 400px, display the bar vertically, instead of horizontally */
    @media screen and (max-width: 400px) {
        #sidebar a {
            text-align: center;
            float: none;
        }
    } 

</style>


