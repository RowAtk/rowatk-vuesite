<template>
    <div id="sidenav">
        <a class="active" href="#home">Home</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        <a href="#about">Socials</a>
    </div>
    
</template>


<script>
export default {
    name: 'sidenav',
    components: {

    }
}
</script>


<style>
    #sidenav{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    /* Sidebar links */
    #sidenav a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
        /* border-top: 2px;
        border-bottom: 2px;
        border-right: 4px;
        border-left: 4px;
        border-style: solid;
        border-color: rgb(95, 17, 93); */
    }

    /* Active/current link */
    #sidenav a.active {
        background-color: rgb(95, 17, 93);
        color: white;
    }

    /* Links on mouse-over */
    #sidenav a:hover:not(.active) {
        background-color: #555;
        color: white;
    }
</style>
