<template>
    <div class="col mb-5">
        <div class="card ">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Oferta</div>
            <!-- Product image-->
            <!-- <img class="card-img-top" :src="product.url_image" alt="..." /> -->
            <img class="card-img-top" src="@/assets/noImage.png" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <div class="fw-bolder">{{product.description}}</div>
                    <!-- <div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                    </div> -->
                    <!-- Product price-->
                    R$ {{ product.price }}
                </div>
            </div>                            
        </div>
    </div>    
</template>


<script>
  export default {
    name: "ProductCard", 
    props: {product: Object},
    data() {
      return {}
    },  
    watch: {},
    methods: {},
    mounted() { }
  }
</script>

<style scoped>

.card-img-top {
    max-height: 55px;
    max-width: 55px;
    margin: 10px auto;
}

.card {
    min-width: 220px;
    min-height: 190px;
}


</style>