<template>
    <div>
        <div>
            <td>description</td>
            <td>url_image</td>
            <td>price</td>
            <td>offer</td>
        </div>
        <div class="cardContainer" v-for="(product, index) in productList" :key="index">
            <tr class>
                <input type="text" :id="'item-'+ index" v-model="productList[index]['description']">
                <input type="text" :id="'item-'+ index" v-model="productList[index]['url_image']">
                <input type="number" :id="'item-'+ index" v-model="productList[index]['price']">
                <input type="checkbox" :id="'item-'+ index" v-model="productList[index]['offer']">
                <button onclick="this.saveobject(index)">Salvar</button>
            </tr>
        </div>
    </div>
</template>

<script>
    import { baseURL } from '@/global';

    export default {
        name: "cp-update",
        components: {          
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
                        console.log("Entrou axios")             
                        console.log(res.data)
                        this.productList = res.data
                        console.log("this.productList: ", this.productList)
                    })
                    .catch(() => {})
                    .finally(() => {this.loading = false})
            },
            saveobject(index){
                console.log(index)
                this.loading = true
                this.$http
                    .put(`${baseURL}/product`, this.productList[index])
                    .then((res) => {           
                        console.log(res.data)
                    })
                    .catch(() => {})
                    .finally(() => {this.loading = false})                
            }
        },
        created () {
            // this.user = this.$store.state.user;
            this.getProducts()
        }
    };
  </script>

<style scoped>

    .cardContainer{
        display: flex;
        flex-wrap: wrap;
    }

    .cardProduct {
        max-width: 250px;
        max-height: 190px;
        font-size: 0.8em;
    }

</style>
