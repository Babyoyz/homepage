<template>
  <div class="d-flex justify-content-center mb-3">
    <div class="card" style="width: 20rem;">
    <img class="card-img-top" :src="img" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
  </div>    
</template>

<script>
export default {
    props:{
        img:{
            type:String
        },
        name:{
            type:String
        }
    }
}
</script>

<style scoped>
img{
    height: 20rem;
}
</style>