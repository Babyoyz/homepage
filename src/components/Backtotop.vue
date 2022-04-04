<template>
  <div v-show="visible">
    <a @click="scrollToTop()" class="bottom-right">
      <img src="../assets/backtotop.png" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  }
}
</script>

<style>
.bottom-right {
  position: fixed;
  bottom: 50px;
  right: 20px;
  cursor: pointer;
  z-index: 100;
}
img {
  width: 5rem;
}
</style>
