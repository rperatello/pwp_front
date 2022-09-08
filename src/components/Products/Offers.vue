<template>
    <div class="showCards">
        <div class="cardContainer" v-for="(product, index) in productList" :key="index">
            <ProductCardVue class="cardProduct" :product="product" ></ProductCardVue>
        </div>
    </div>
</template>

<script>
    import { baseURL } from '@/global';
    import ProductCardVue from '../Template/ProductCard.vue';

    export default {
        name: "cp-offer",
        components: { 
            ProductCardVue            
        },
        data: () => {
            return {
                productList: [],
            }
        },
        methods: {
            getProducts() {            
                this.loading = true
                this.$http
                    .get(`${baseURL}/product`)
                    .then((res) => {              
                        console.log(res.data)
                        let fullList = res.data
                        this.productList = fullList.filter(x => x.offer == true)
                    })
                    .catch(() => {})
                    .finally(() => {this.loading = false})
            }
        },
        created () {
            this.getProducts()
        }
    };
  </script>

<style scoped>

    .cardContaine, .showCards {
        display: flex;
        flex-wrap: wrap;
    }

    .cardProduct {
        max-width: 250px;
        max-height: 190px;
        font-size: 0.8em;
    }

</style>
