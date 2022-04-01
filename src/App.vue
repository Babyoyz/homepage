<script setup>

import NavBar from './components/NavBar.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'

</script>

<template>
<div id="app">
    <div class="container-fulid">
        <section navbar>
        <NavBar />
         </section>
        <section id="header-colrasape">
            <Carousel />
        </section>
        <section id="footer">
            <Footer />
        </section>
    </div>
   
</div>

</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'BIZ UDGothic', sans-serif;
font-family: 'Prompt', sans-serif;
font-family: 'Roboto Serif', serif;
}
body{
background: #c2ffa8;
}
  body, html {
    height: 100%;
  }
</style>
