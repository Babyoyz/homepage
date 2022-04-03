<template>
    <div id="about-div">
        <h2 class="text-center pt-3">Intoduce</h2>
        <div class="row">
            <div class="col-md-6 p-sm-5 mb-3 d-flex justify-content-center"
            data-aos="fade-right"
             >
                <img src="../assets/amimal_about.jpg" class="w-100 align-self-center" />
            </div>
            <div
                class="col-md-6 p-sm-5 mb-3"
            data-aos="fade-down"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vitae molestiae error nam nobis cupiditate at nihil? Nobis rem, nulla quod magnam, nemo sint ex pariatur id at quia veniam placeat officia. Cupiditate sapiente minima iusto. Saepe quas possimus et rem repellat fuga assumenda, laboriosam architecto quasi eveniet asperiores inventore officia cum deserunt incidunt necessitatibus sed iure qui aut suscipit voluptas vel? Officiis distinctio, corrupti officia harum exercitationem enim, repellat vero est ea perspiciatis, quae architecto. Nisi recusandae totam placeat excepturi illum reiciendis ipsa unde accusamus autem voluptatum deleniti iure veniam dignissimos non, saepe sequi eum? Optio architecto impedit soluta.</div>
        </div>
        <div class="row" v-if="width > 750">
            <div
                class="col-md-6 p-sm-5 mb-3 align-self-center"
              data-aos="fade-right"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vitae molestiae error nam nobis cupiditate at nihil? Nobis rem, nulla quod magnam, nemo sint ex pariatur id at quia veniam placeat officia. Cupiditate sapiente minima iusto. Saepe quas possimus et rem repellat fuga assumenda, laboriosam architecto quasi eveniet asperiores inventore officia cum deserunt incidunt necessitatibus sed iure qui aut suscipit voluptas vel? Officiis distinctio, corrupti officia harum exercitationem enim, repellat vero est ea perspiciatis, quae architecto. Nisi recusandae totam placeat excepturi illum reiciendis ipsa unde accusamus autem voluptatum deleniti iure veniam dignissimos non, saepe sequi eum? Optio architecto impedit soluta.</div>
            <div class="col-md-6 mb-3 p-sm-sm-5 d-flex justify-content-center" 
            data-aos="fade-down"
            >
                <img src="../assets/2.jpg" class="w-100 align-self-center" />
            </div>
        </div>
           <div class="row" v-else>
            <div
                class="col-md-6 p-sm-5 mb-3 d-flex justify-content-center"
            data-aos="fade-right"
            ><img src="../assets/2.jpg" class="w-100 align-self-center" />
            </div>
            <div class="col-md-6 mb-3 p-sm-5 align-self-center"
            data-aos="fade-down"
             >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vitae molestiae error nam nobis cupiditate at nihil? Nobis rem, nulla quod magnam, nemo sint ex pariatur id at quia veniam placeat officia. Cupiditate sapiente minima iusto. Saepe quas possimus et rem repellat fuga assumenda, laboriosam architecto quasi eveniet asperiores inventore officia cum deserunt incidunt necessitatibus sed iure qui aut suscipit voluptas vel? Officiis distinctio, corrupti officia harum exercitationem enim, repellat vero est ea perspiciatis, quae architecto. Nisi recusandae totam placeat excepturi illum reiciendis ipsa unde accusamus autem voluptatum deleniti iure veniam dignissimos non, saepe sequi eum? Optio architecto impedit soluta.
            </div>
        </div>
    </div>
</template>
                

<script>
export default {
    data: () => ({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }),
    mounted() {
        window.addEventListener('resize', this.getDimensions)
    },
    unmounted() {
        window.removeEventListener('resize', this.getDimensions)
    },
    methods: {
        getDimensions() {
            this.width = document.documentElement.clientWidth
            this.height = document.documentElement.clientHeight
        }
    }
}
</script>

<style scoped>

img {
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border-radius: 3px;
}


</style>