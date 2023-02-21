<template>
  <div class="overflow-hidden">
    <div class="row">
      <navBar />
    </div>
    <div class="row gx-3">
      <div class="col-md-8">
        <div class=" h-100 p-3"><router-view :key="$route.path"/></div>
        
      </div>
      <div class="col-md-4">
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

  
}
</style>
