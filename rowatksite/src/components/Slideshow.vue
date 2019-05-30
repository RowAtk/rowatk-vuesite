<template>
  <div id="slideshow">
    <div id="prev-slide">
      <!-- <img :src="require('../assets/slides/' + images[pslide].filename)" alt="previous slide"> -->
      <img :src="imagesrc[pslide]" alt="previous slide">
    </div>

    <!-- <div class="slidespacer"></div> -->

    <div id="current-slide">
      <!-- <img :src="require('../assets/slides/' + images[cslide].filename)" alt="current slide" style="max-height: 300px"> -->
      <img :src="imagesrc[cslide]" alt="current slide">
    </div>

    <!-- <div class="slidespacer"></div> -->

    <div id="next-slide">
      <!-- <img :src="require('../assets/slides/' + images[nslide].filename)" alt="next slide"> -->
      <img :src="imagesrc[nslide]" alt="next slide">
    </div>

    <!-- <a class="prev" @click="changeSlide(-1)">&#10094;</a>
    <a class="next" @click="changeSlide(1)">&#10095;</a> -->
  </div>
</template>

<script>
import { setInterval } from 'timers';
  export default {
    name: "slideshow",
    props: ['images'],
    data() {
      return {
        imgHeight: 100,
        cslide: 0,
        imagesrc: []
      }
    },
    methods: {
      getSrc: function(name){
        // console.log(this.path + name);
        return require(this.path + name);
      },
      changeSlide: function(num){
        if(this.cslide == this.images.length - 1 && num>0){
          this.cslide = 0;
        }else if(this.cslide == 0 && num < 0){
          this.cslide = this.images.length-1;
        }else{
          this.cslide += num;
        }
      },
      autoChange: function(){
        setInterval(function(){
          this.changeSlide(1)
        }.bind(this), 2000);
      }
    },
    computed: {
      pslide: function(){
        let prev = this.cslide - 1;
        if(prev == -1){
          prev = this.images.length - 1
        }
        return prev
      },
      nslide: function(){
        let next = this.cslide + 1;
        if(next == this.images.length){
          next = 0
        }
        return next
      }
    },
    created: function(){
      for (let i = 0; i < this.images.length; i++) {
        // this.imagesrc.push(require('../assets/slides/' + this.images[i].filename));
        import (/* webpackMode: "lazy" */ `../assets/slides/${this.images[i].filename}`).then(image => {
          this.imagesrc.push(image.default);
        })
      }
      // console.log(this.imagesrc);
      this.autoChange();
    }
  }

</script>

<style scoped>
  * {box-sizing:border-box}

  #slideshow{
    padding: 50px;
    height: 300px;
    max-width: 900px;
    /* display: inline-block; */
    margin: auto; 
    position: relative; 
    /* background-color: rgb(0, 247, 255); */
  }

  #prev-slide{
    width: 15%; 
    height: auto;
    display: inline-block;

  }

  #next-slide{
    width: 15%;
    height: auto;
    display: inline-block;

  }

  #current-slide{
    width: 70%;
    height: auto;
    display: inline-block;

  }

  img{
    width: 100%;
    max-height: 200px;
    object-fit: contain;
  }

  .slidespacer{
    width: 5%;
    height: auto;
    display: inline-block;
  }

  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev {
    left: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }
</style>
