<template>
    <div class="auth-content">
    <div class="auth-modal">
      <!-- <img src="@/assets/logo-login.png" width="200" alt="Logo" /> -->
      <hr />
      <div class="auth-title">Login</div>

      <b-form-input class="login" v-model="user.login" type="text" placeholder="Login" />
      <b-form-input
        v-if="showSignup"
        v-model="user.email"
        name="email"
        type="text"
        placeholder="E-mail"
      />
      <b-form-input
        v-model="user.password"
        class="password"
        name="password"
        type="password"
        placeholder="Senha"
        @keydown.enter="signin"
      />

      <b-button class="login-button" @click="signin">
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