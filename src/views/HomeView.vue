<script setup>
import Carousel from '../components/Carousel.vue'
import About from '../components/About.vue'
// import Carouselautosilder from '../components/Carouselautosilder.vue'
import ListAnimal from '../components/ListAnimal.vue'
import ComponentNew from '../components/NewsComponent.vue'
import SeachComponentVue from '../components/SeachComponent.vue'
</script>
<template>
  <main>
    <section id="header-colrasape">
      <Carousel />
    </section>
    <div class="container">
      <section id="about">
        <About />
      </section>
      <section id="" data-aos="flip-up">
        <!-- <Carouselautosilder /> -->
      </section>
      <section data-aos="zoom-in" id="list-animal">
        <ListAnimal />
      </section>
    </div>
    <section>
      <SeachComponentVue />
    </section>
    <div class="container">
      <section data-aos="zoom-in" id="list-animal">
        <ComponentNew />
      </section>
    </div>
  </main>
</template>
