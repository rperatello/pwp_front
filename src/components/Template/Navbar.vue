<template>
  <div class="bg-dark">    
    <span>
      <b-navbar id="nav" class="nav-draggable"  type="dark" toggleable="lg" variant="dark">
      <b-navbar-toggle id='button-list' target="nav-collapse" class="align-items-center ml-0"> </b-navbar-toggle>
      
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class='all-menus nav-draggable'>
            <b-nav-item href="" to="/">Home</b-nav-item>
            <b-nav-item href="" to="/about">Sobre Nós</b-nav-item>
            <b-nav-item href="" to="/products">Produtos</b-nav-item>
            <b-nav-item href="" to="/offers">Ofertas</b-nav-item>
            <b-nav-item v-if="user" href="#" to="/update">Atualizar</b-nav-item>
            <b-nav-item v-if="!user"  href="#" to="/login">Login</b-nav-item>
            <b-nav-item v-if="user"  href="#" @click="logout()">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </span>
    <span class="txtColor">Folhinha.Net</span>
  </div>
  </template>
  
  <script>

  import { mapState } from "vuex";
  
  export default {
    name: "cp-navbar",
    components: {},  
    props: { },
    computed: mapState(["user"]),
    data() {
      return{
      }    
    },
    watch:{ },
  
    methods: {
      logout() {
        localStorage.removeItem("userKey");
        localStorage.removeItem("tk");
        this.$store.commit("setUser", null);
        this.$store.commit("setToken", null);
        this.$router.push({ path: "/" });
      }
    },
    created(){ }
  };
  </script>
  
  <style>
    
    .txtColor{
      color: white;
    }
  
  :root{
    --width-dropdown: 310px;
  }

  .navbar {
    grid-area: navbar;
  }
  
  #nav, .all-menus {
    height: 45px;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-end;
    font-size: 0.85rem;
    align-items: center;
  }
    
  ul.nav {
    align-items: center;
  }
  
  ul.nav > img {
    width: 27px;
    height: 27px;
  }
  
  .user-dropdown{
    width: 100%;
    justify-content: flex-end;
  }
  
  #button-list:hover{
    background-color: #fff1;    
  }
  
  #button-list:active{
    border: 4px solid #fff5;
  }
  
  #button-list > span{
    width: 20px;
    height: 20px;
  }
  
  
  ul.nav, .nav-item {
    padding: 10px 0px 0px 0px;
  }
  
  .collapse.show {
    background-color: #343a40;
    z-index: 1;
    position: absolute;
    left: 10px;
    top: 45px;
    width: 130px;
    border: #fff 1px solid;
  }
  
  .fullScreen {
    position: relative;
    cursor: pointer;
  }
  
  img.Item {
    height: 25px;
    width: 25px;
  }

  
  @media only screen and (max-width: 990px) {
  
    /* INICIO GLOBAL */
    .toggled {
      min-width: var(--width-dropdown);
      height: auto;
      overflow-x:scroll;
    }
  
    .all-menus {
      height: inherit;
      padding-bottom: 10px;
    }
  
    .fullScreen {
      display: none;
    }
  
    #nav-collapse{
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  
    .user-dropdown{
      width: 100%;
      justify-content: flex-end;
    }
  
    #button-list{
      display: flex;
      justify-content: center;
      padding: 0px;
      width: 35px;
      height: 30px;
      border: 2.5px solid #fff5;
      outline: none;
      transition-duration: .3s;
    }
  
    .nav>li::-webkit-scrollbar{
      display: none;
    }
  
    .nav>li>ul>li {
      width: 290px;
    }
  
    .nav>li>ul>li>a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      white-space: pre-wrap;
    }
  
    .nav-item.nav-single-item,
    .nav>li, 
    .dropdown{
      box-sizing: border-box;
      transition-duration: .5s;
    }
  
    .nav>li>a{
      margin-right: 0;
    }
  
    .dropdown:hover, 
    .nav-item.nav-single-item:hover{
      color: #fff;
      background: linear-gradient(to right, #fff3,#343a40);
      border-bottom: 2px solid #fff3;
    }
  
    .nav>li>a>span:hover{
      color: #fff;
    }
  
    ul.dropdown-menu.show {
      min-width: var(--width-dropdown);
      background-color: white;
    }
  
    ul.nav, .nav-item{
      justify-content: flex-start;
      padding: 0 0 0 10px;
    }
  
    .nav-item.nav-single-item{
      align-self: normal;
      margin: 0 0 0 10px;
    }
  
    /* INICIO INICIAR DROPDOWN */
    .toToggle2 {
      display: none;
    }
  
    .drop-item {
      width: 450px;
      font-size: 13px ;
    }
  
    .dropItem{
     width: 25px;
     height: 25px;
    }
  
    .dropItem{
     width: 25px;
     height: 25px;
    }
  
    .nav-toggled{
      width: 340px;
    }
  }
  </style>
  