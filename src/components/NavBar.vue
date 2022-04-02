<template>
           <nav class="navbar navbar-expand-md fixed-top bg-navbar">
            <div class="container">
                <div class="d-flex">
                    <img src="../assets/logo.png" alt="" width="50" height="50" class="d-inline-block align-text-top gap-2">
                    <a class="navbar-brand fw-bold align-self-center" href="#">
                    My World Animal
                  </a>
                </div>
               
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <img src="../assets/icons8-nest-60.png" class="img-icons">
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#about" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" @click="hrefsection('about')">Intoduce</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" @click="hrefsection('list-animal')">list-animal</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
</template>

<script>
export default {

    methods:{
        hrefsection(params){
            window.location.href =`#${params}`
        }
    }
}

</script>

<style scoped>
    .bg-navbar{
       background: rgb(40,61,61);
background: linear-gradient(127deg, rgba(40,61,61,0.773546918767507) 31%, rgba(57,255,1,0.49343487394957986) 90%);
    }
    .img-icons{
        width: 40px;
    }
    .gap-2{
        gap:1.5rem;
    }
</style>