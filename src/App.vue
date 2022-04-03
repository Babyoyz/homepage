<script setup>
import NavBar from './components/NavBar.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import Carouselautosilder from './components/Carouselautosilder.vue'
import ListAnimal from './components/ListAnimal.vue'
    import Backtotop from './components/Backtotop.vue'
import ComponentNew from  './components/NewsComponent.vue'
</script>

<template>
    <div id="app">
       
        <div class="container-fulid">
            <section id="navbar">
                <NavBar />
            </section>
            <section id="header-colrasape">
                <Carousel />
            </section>
            <div class="container">
                <section id="about">
                    <About />
                </section>
                <section id="" data-aos="flip-up">
                    <Carouselautosilder />
                </section>
                <section data-aos="zoom-in" id="list-animal">
                    <ListAnimal />
                </section>
                <section data-aos="zoom-in" id="list-animal">
                    <ComponentNew />
                </section>
            </div>
                <Backtotop />
            <section id="footer">
                <Footer />
            </section>
        </div>
    </div>
      <router-view />
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
    background-image: none;
}


</style>
