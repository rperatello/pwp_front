<template>
  <div class="content draggable-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "cp-content",
  components: { },
};
</script>

<style scoped>
  .content {
    grid-area: content;
    position: fixed;
    width: 100%;
    overflow: auto;
    top: 101px;
    bottom: 41px;
    background-color: #efefef;
    padding: 8px;
  }


  @media only screen and (max-width: 1160px) {
    .content{
      /* top: 128px; */
    }
  } 
  
</style>
