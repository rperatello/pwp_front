<template>
  <div id="app">
    <div>
      <Header class="header"/>
      <Navbar class="navbar"/>
    </div>
    <Content class="content"/>
    <div><Footer class="footer footerFixed"/></div>
    
  </div>
</template>

<script>

  import Header from "./components/Template/Header.vue";
  import Navbar from "./components/Template/Navbar.vue";
  import Content from "./components/Template/Content.vue";
  import Footer from "./components/Template/Footer.vue";

  import { validateToken, clearAllData } from "./global";

  export default {
  name: "App",
  components: { Header, Navbar, Content, Footer },
  data: function () {
    return {
      validatingToken: true,
    };
  },
  methods: {
    async checkToken() {
      this.validatingToken = true;
      const userKey = localStorage.getItem("userKey");
      const tk = localStorage.getItem("tk"); 

      this.$store.commit("setUser", null);
      this.$store.commit("setToken", null);

      if (!userKey) {
        this.validatingToken = false;
        this.$router.push({ path: "/" }).catch(()=>{});
        return;
      } 
      
      const res = await validateToken()
      
      if (res) {
        this.$store.commit("setUser", userKey);
        this.$store.commit("setToken", tk);
      } else {
        console.log("Token expirado");
        this.$store.commit("setUser", null);
        this.$store.commit("setToken", null);
        clearAllData()

        this.$router.push({ name: "auth" }).catch(()=>{});
      }
      this.validatingToken = false;
    }
  },
  async created() {
    await this.checkToken();    
  },
};
</script>

<style>

body {
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 45px 1fr 40px;
  /* grid-template-columns: 170px 1fr; */
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "navbar"
    "content"
    "footer";
}
#app.hide-menu {
  grid-template-areas:
    "header"
    "content"
    "content"
    "footer";
}

.headerFixed {
  position: fixed;
  top: 0px;
  z-index: 1;
  width: 100%;
}

.footerFixed {
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 1;
}

ul.dropdown-menu.show {
    background-color: white;
}

.groupBtn {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}

.groupBtn img {
  cursor: pointer;
  height: 35px;
  width: 35px;
}

.noselect {
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

:-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: #F4F4F4;
}

::-webkit-scrollbar-thumb {
    background: #dad7d7;
    border-radius: 2px;
}

</style>
