<script setup>
import NavBar from './components/NavBar.vue'
import Carousel from './components/Carousel.vue'
import About from './components/About.vue'
import Carouselautosilder from './components/Carouselautosilder.vue'
import ListAnimal from './components/ListAnimal.vue'
import Backtotop from './components/Backtotop.vue'
import ComponentNew from  './components/NewsComponent.vue'
import Footer from './components/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container-fulid">
        <header>
    <section id="navbar">
                <NavBar />
    </section>
        </header>
      <Backtotop />
      <router-view />
        <section id="footer">
            <Footer />
        </section>
  </div>
  
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'BIZ UDGothic', sans-serif;
    font-family: 'Prompt', sans-serif;
    font-family: 'Roboto Serif', serif;
}

body,
html {
    height: 100%;
    background: #c2ffa845 !important;
  
}


</style>
