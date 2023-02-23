<template>
  <div class="overflow-hidden">
    <div class="row">
      <navBar />
    </div>
    <div class="row gx-3 main-app-row">
      <div class="col-md-8 main-app-col">
        <div class="h-100 p-3 mainView"><router-view :key="$route.path" /></div>
      </div>
      <div class="col-md-4 post-list-view">
        <postList />
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "./components/navBar.vue";
import postList from "./components/postList.vue";
export default {
  components: {
    navBar,
    postList
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
  min-width: 400px;
}

@media only screen and (max-width: 1000px) and (min-width: 0px) {
  .main-app-row {
    display: block;
    flex-direction: column;
    width: 100%;
    margin: 10px!important;
  }
  .main-app-col{
    width: 100%!important;
  }
  .post-list-view{
    width: 100%!important;

  }
  
}
</style>
