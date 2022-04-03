<template>
    <div class="mt-5 mb-3">
        <div class="animal-list">
            <div class="animal-header">
                <h2 class="text-center fw-bold">Fake New</h2>
                <div class="d-flex justify-content-end">
                    <p class="fw-bold">List All</p>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-2 justify-content-center d-flex">
                        <CardcomponentVue
                            img="https://images.unsplash.com/photo-1524132989408-c8ee48d8f147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            name="Tiger"
                        />
                    </div>
                    <div class="col-md-6 mb-2 justify-content-center d-flex">
                        <CardcomponentVue
                            img="https://images.unsplash.com/photo-1588508435560-585279aa19de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                             name="Deer"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardcomponentVue from './CardNew.vue'
export default {
    components: {
        CardcomponentVue
    }
}
</script>

<style scoped>

</style>