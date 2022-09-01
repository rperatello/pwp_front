<template>
    <b-nav class="nav-toggled dropSpace">
      
      <b-nav-item-dropdown class="toggled" :text="Admin" right>
        <!-- <b-nav-item-dropdown text="Usuário" right> -->
        <!-- <b-dropdown-item class="drop-item"
          to="/admin"
          v-if="user.Permissions.cadastrarusuario.allowed && user.Permissions.cadastrarusuario.permission"
          ><img
            class="dropItem"
            src="@/assets/cadastrarusuarios.png"
            alt="Gestão de usuários"
          />Gestão de Usuários</b-dropdown-item
        > -->
        
        <b-dropdown-item class="drop-item" href="#" @click.prevent="logout">
          <!-- <img
            class="dropItem"
            src="@/assets/sair.png"
            alt="Sair"
          /> -->
          Sair</b-dropdown-item
        >
      </b-nav-item-dropdown>
      <template>
        <!-- <img class="Item toToggle2" src="@/assets/Login.png" alt="User" /> -->
        <div>logado</div>
      </template>  
      
    </b-nav>
  </template>
  
  <script>
  import { clearAllData } from '../../global';
  
  export default {
    name: "UserDropdown",
    components: {  },
    data: () => {
      return {
        user: null,
      }
    },
    methods: {
      async clearData(){
        clearAllData();
        this.$store.commit("setUser", null);
        this.$store.commit("setToken", null);
        this.$router.push({ name: "auth" });
      },
      logout() {
        this.clearData();
      }
    },
    created () {
      this.user = this.$store.state.user;
    }
  };
  </script>
  
  <style scoped>
  
  .dropSpace {
    min-width: 165px;
    flex-wrap: nowrap;
  }
  
  img.Item {
    max-height: 37px;
    max-width: 37px;
    border-radius: 5px;
  }
  
  img.dropItem {
    max-height: 25px;
    max-width: 25px;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .txt {
    color: white;
    padding: 10px 20px;
  }
  
  .ilink {
    margin-right: 10px;
  }
  
  </style>
  