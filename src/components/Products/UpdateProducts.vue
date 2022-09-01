<template>
    <div class="listContainer">
        <div>Cadastrar Produto</div>
        <div class="rowData">
            <div class="itembox">
                <div>Produto:</div>
                <input type="text" :id="'item-'+ 0" v-model="newProduct['description']" />
            </div>
            <div class="itembox">
                <div>Imagem:</div>
                <input type="text" :id="'item-'+ 1" v-model="newProduct['url_image']" />
            </div>
            <div class="itembox">
                <div>Preço:</div>
                <input type="number" :id="'item-'+ 2" v-model="newProduct['price']" />
            </div>
            <div class="itembox ckeckData">
                <div>Oferta?</div>
                <input type="checkbox" :id="'item-'+ 3" v-model="newProduct['offer']" />
            </div>
            <div class="itembox">
                <button class="btCp" type="button" v-on:click="IncludeProduct()">Cadastrar</button>
                <button class="btCp" type="button" v-on:click="resetNewProduct()">Cancelar</button>
            </div>              
        </div>

        <br/>
        <div>Produtos Cadastrados</div>
        <div class="" v-for="(product, index) in productList" :key="index">
            <div class="rowData">
                <div class="itembox">
                    <div>Produto:</div>
                    <input type="text" :id="'item-'+ index" v-model="productList[index]['description']" />
                </div>
                <div class="itembox">
                    <div>Imagem:</div>
                    <input type="text" :id="'item-'+ index" v-model="productList[index]['url_image']" />
                </div>
                <div class="itembox">
                    <div>Preço:</div>
                    <input type="number" :id="'item-'+ index" v-model="productList[index]['price']" />
                </div>
                <div class="itembox ckeckData">
                    <div>Oferta?</div>
                    <input type="checkbox" :id="'item-'+ index" v-model="productList[index]['offer']" />
                </div>
                <div class="itembox">
                    <button class="btCp" type="button" v-on:click="saveobject(index)">Salvar</button>
                    <button class="btCp" type="button" v-on:click="deleteobject(index)">Deletar</button>
                </div>            
            </div>
        </div>
    </div>
</template>

<script>
    import { baseURL, defaultSuccess, showError } from '@/global';

    export default {
        name: "cp-update",
        components: {          
        },
        data: () => {
            return {
                newProduct: {
                    description: null,
                    url_image: null,
                    price: null,
                    offer: false,
                },
                productList: [],
            }
        },
        methods: {
            getProducts() {            
                this.loading = true
                this.$http
                    .get(`${baseURL}/product`)
                    .then((res) => {
                        this.productList = res.data
                    })
                    .catch(() => { showError("Erro encontrado") })
                    .finally(() => {this.loading = false})
            },
            saveobject(index){
                this.loading = true
                this.$http
                    .put(`${baseURL}/product`, this.productList[index])
                    .then((res) => {           
                        defaultSuccess(res.data.message)
                    })
                    .catch(() => {})
                    .finally(() => {
                        this.loading = false
                        this.getProducts()
                    })                
            },
            deleteobject(index){
                this.loading = true
                this.$http
                    .delete(`${baseURL}/product/${this.productList[index].id}`)
                    .then((res) => {           
                        defaultSuccess(res.data.message)
                    })
                    .catch(() => { showError("Erro encontrado") })
                    .finally(() => {
                        this.loading = false
                        this.getProducts()
                    })                
            },
            resetNewProduct(){
                this.newProduct = {
                    description: null,
                    url_image: null,
                    price: null,
                    offer: false,
                }
            },
            IncludeProduct(){
                this.loading = true
                this.$http
                    .post(`${baseURL}/product`, this.newProduct)
                    .then((res) => {          
                        defaultSuccess(res.data.message)
                    })
                    .catch(() => { showError("Erro encontrado") })
                    .finally(() => {
                        this.loading = false
                        this.resetNewProduct()
                        this.getProducts()
                    })  
            }
        },
        created () {
            this.getProducts()
        }
    };
  </script>

<style scoped>

    .listContainer {        
        width: 100%;
        padding: 10px;
        margin-right: 5px;
        margin-left: 5px;
    }

    .rowData {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .itembox{
        margin-left: 10px;
    }

    .ckeckData {
        justify-content: center;
        text-align: center;
    }

    .btCp {
        margin: 0px 2px;
    }

</style>
