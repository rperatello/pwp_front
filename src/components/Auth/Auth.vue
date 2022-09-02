<template>
  <div class="auth-content">
  <div class="auth-modal">
      <section class="min-vh-100 gradient-custom">
        <div class="container py-5 h-75">
          <div class="row d-flex justify-content-center align-items-center h-75">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">
      
                  <div class="mb-md-5 mt-md-4 pb-5">
      
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Please enter your login and password!</p>
      


                    <b-form-input class="login" v-model="user.login" type="text" placeholder="Login" />
                    <div class="form-outline form-white mb-4">
                      <b-form-input
                        v-if="showSignup"
                        v-model="user.email"
                        name="email"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="E-mail"
                      />
                  </div>
                  <div class="form-outline form-white mb-4">  
                    <b-form-input
                      v-model="user.password"
                      class="form-control form-control-lg"
                      name="password"
                      type="password"
                      placeholder="Senha"
                      @keydown.enter="signin"
                    />
                  </div>

                   
                    <b-button class="btn btn-outline-light btn-lg px-5" @click="signin">
                      <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm mr-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Entrar
                    </b-button>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</div>
</template>

<script>
import { baseURL, defaultSuccess, showError } from '@/global';
  export default {
      name: "cp-auth",
  data: function() {
    return {
      showSignup: false,
      user: {},
      loading: false,
    };
  },
  methods: {
    signin() {
      localStorage.clear();
      if (
        this.user.login != undefined ||
        this.user.password != undefined
      ) {
        const obj = JSON.parse(JSON.stringify(this.user));          
        this.loading = true;
        this.$http.post(`${baseURL}/login`, obj)
          .then((res) => {  
            
            this.$store.commit("setToken", res.data.token)
            localStorage.setItem("tk", res.data.token)

            let user = {}    
            user.id = res.data.id   
            user.name = res.data.name  
            console.log(user)
            
            this.$store.commit("setUser", user)
            localStorage.setItem("userKey", JSON.stringify(user))         
          

            this.$router.push({ path: "/" })
            defaultSuccess("Login realizado com sucesso !")
          })
          .catch()
          .finally(() => {
            this.loading = false
          });
      } else {
        showError("Usuário ou senha não informado !")
      }
    },
    
  },
  created() {  }
};        

</script>

<style scoped>

</style>