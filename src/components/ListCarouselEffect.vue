<template>
  
  <div class="row">
      <div class="col-sm-6 col-md-3 mb-2  d-flex justify-content-center">
          <button :class="filterclass == 99 ?'btn-active':'btn-default'" @click="filters('99')">All</button>
      </div>
        <div class="col-sm-6 col-md-3 mb-2  d-flex justify-content-center">
          <button :class="filterclass == 1 ?'btn-active':'btn-default'" @click="filters('1')">Land animals</button>
      </div>
        <div class="col-sm-6 col-md-3 mb-2  d-flex justify-content-center">
          <button :class="filterclass == 2 ?'btn-active':'btn-default'" @click="filters('2')">Aquatic</button>
      </div>
      <div class="col-sm-6 col-md-3 mb-2 d-flex justify-content-center">
          <button :class="filterclass == 3 ?'btn-active':'btn-default'" @click="filters('3')">Reptile</button>
      </div>
  </div>
    <div class="row mt-2">
        <div class="col-md-4 mb-5 d-flex justify-content-center" v-for="item in array" :key="item.no"
        >
            <div class="card" style="width: 18rem;">
            <img :src="item.img" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-text text-center fw-bold">{{item.name}}</h2>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.Calldata()
    },
    data(){
        return{
            array:[],
            filterclass:'99'
        }
    },
methods:{
    async Calldata (){

        const  data  = await fetch('/src/assets/db.json')

        const result = await data.json()

            this.array = result.data

            this.arraydeault = result.data
   
    },

    filters(prarms){

       
        if(prarms == 99){
            this.filterclass = 99

            this.array = this.arraydeault

        }else{

                this.filterclass = prarms
           
                let result = this.arraydeault.filter((el) =>{

                    if(el.Type == prarms){
                        return el
                    }
                })

                this.array = result
        }   
    }
}
}
</script>

<style scoped>
.btn-active{
    width: 120px;
    background: green;
    border-radius: 12px;
    height: 37px;
}
.btn-default{
 width: 120px;
    background: transparent;
    border-radius: 12px;
    height: 37px;
}
img{
    height: 200px;
}
</style>