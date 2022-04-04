<template>
  <div class="bg-green p-5">
    <div class="container">
      <h2 class="text-center fw-bold">Filter-List</h2>
      <SreachList />
    </div>
  </div>
</template>

<script>
import SreachList from './ListCarouselEffect.vue'
export default {
  components: {
    SreachList
  }
}
</script>

<style scoped>
.bg-green {
  background: #c2ffa8 !important;
}
</style>
