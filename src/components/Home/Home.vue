<template>    
  <div>
      <div class="bg-dark py-5">    
          <div class="container px-4 px-lg-5 my-5">
              <div class="text-center text-white">
                  <!--<h1 class="display-4 fw-bolder">Shop in style</h1> -->
                  <span class = "circle-image">
                      <img src = "@/assets/logo_pequeno.jpeg" />
                      </span>
                      <p class="lead mb-4">Bem vindo ao <em>Folhinha.Net</em> o site com os melhores produtos do seu supermercado preferido!</p>
                      <p class="lead mb-4">Em nosso site você encontrar as melhores ofertas e os melhores produtos!</p>
                      <button id="setup_button" onclick="installApp()">Instalar App</button>
              </div>
          </div>
      </div>

      <div class="b-example-divider"></div>
    
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
              <a href="ofertas.html">
                  <img src="@/assets/ofertas.png" class="d-block mx-lg-auto img-fluid" alt="Logo Ofertas" width="400" height="200" loading="lazy">
              </a>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">As melhores ofertas do supermercado!</h1>
            <p class="lead">Verifique quais são as melhores ofertas que preparamos para você!</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="ofertas.html" class="btn btn-primary btn-lg px-4 me-md-2">Ver Ofertas</a>                
            </div>
          </div>
        </div>
      </div>
    
      <div class="b-example-divider"></div>

      <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <a href="produtos.html">
                  <img src="@/assets/produtos.png" class="d-block mx-lg-auto img-fluid" alt="Logo Ofertas" width="400" height="200" loading="lazy">
              </a>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Os melhores produtos das melhores marcas!</h1>
              <p class="lead">Verifique a lista de produtos da melhor qualidade que temos para você!</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="produtos.html" class="btn btn-primary btn-lg px-4 me-md-2">Ver Produtos</a>                
              </div>
            </div>
          </div>
        </div>

      <div class="b-example-divider"></div>
    
      <div class="bg-dark text-secondary px-4 py-5 text-center">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">Folhinha.Net o melhor site com as melhores ofertas!</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">Este site foi desenvolvido para a disciplina de PWP (Programação de dispositivos Windows Phone) do curso de Especialização Lato Sensu em Desenvolvimento de Sistemas para Dispositivos Móveis (SDM).</p>
            <p class="fs-5 mb-4">Prof. Dr. Fernando Vernal Salina</p>
            <p class="fs-5 mb-4">Alunos: Luis Nakamura, Paula Milani e Roger Peratello</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="https://scl.ifsp.edu.br/" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">IFSP São Carlos</a>
              
              <a href="https://www.ifsp.edu.br/" class="btn btn-outline-light btn-lg px-4">IFSP</a>
            </div>
          </div>
        </div>
      </div>      
     
  </div>

</template>

<script>

export default {
  name: "cp-home"
};

</script>

<style scoped>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }

    .b-example-divider {
      height: 3rem;
      background-color: rgba(0, 0, 0, .1);
      border: solid rgba(0, 0, 0, .15);
      border-width: 1px 0;
      box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    }

    .b-example-vr {
      flex-shrink: 0;
      width: 1.5rem;
      height: 100vh;
    }

    .bi {
      vertical-align: -.125em;
      fill: currentColor;
    }

    .nav-scroller {
      position: relative;
      z-index: 2;
      height: 2.75rem;
      overflow-y: hidden;
    }

    .nav-scroller .nav {
      display: flex;
      flex-wrap: nowrap;
      padding-bottom: 1rem;
      margin-top: -1px;
      overflow-x: auto;
      text-align: center;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }

    #setup_button {
      display: none;
    }
</style>