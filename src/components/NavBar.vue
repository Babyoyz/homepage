<template>
           <nav class="navbar navbar-expand-lg sticky-top bg-navbar">
            <div class="container">
                <div class="d-flex">
                    <img src="../assets/logo.png" alt="" width="50" height="50" class="d-inline-block align-text-top gap-2">
                    <a class="navbar-brand fw-bold align-self-center" href="#">
                    My World Animal
                  </a>
                </div>
               
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <img src="https://cdn-icons.flaticon.com/png/512/2469/premium/2469794.png?token=exp=1648807505~hmac=243c675cb5980af4d5fff623695d0c34" class="img-icons">
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Aboutme" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About me</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
</template>

<script>
export default {


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