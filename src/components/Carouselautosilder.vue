<template>
  <swiper
   :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
     :modules="modules"
       :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
   >
    <swiper-slide>
        <img src="../assets/istockphoto-1213727367-612x612.jpg" class="w-100">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/judith-prins-AJa7S1fjy-I-unsplash.jpg" class="w-100">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/sam-carter-GHOiyov2TSQ-unsplash.jpg" class="w-100">
        </swiper-slide>
         <swiper-slide>
        <img src="../assets/istockphoto-872646276-612x612.jpg" class="w-100">
        </swiper-slide>
  </swiper>
</template>

<script>
  import SwiperClass, { Pagination,Autoplay } from 'Swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  import 'swiper/css'           
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
         const onSwiper = (swiper) => {     
      };
      const onSlideChange = () => {
      };
      return {
             onSwiper,
        onSlideChange,
        modules: [Autoplay],
      }
    }
  }
</script>

<style scoped>
  @media only screen and (min-width: 600px) {
   img{
        height: 400px;
    }
}

    @media only screen and (max-width: 599px){
           img{
        height: 300px;
    }
        }
</style>