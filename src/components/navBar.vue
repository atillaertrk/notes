<template>
  <div class="navbar">
    <img class="image" src='../assets/nav-unsplash.jpg' alt="">
    <div class="menu">
        <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item">

              <router-link :to="{name:'home'}" class="nav-link active" aria-current="page" >Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/features" class="nav-link" >Features</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name:'WriteNote'}" class="nav-link" >Add Note</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name:'register'}" class="nav-link" >Register</router-link>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link" @click="logOut" >Logout</a>
            </li>
          </ul>
    </div>
  </div>
</template>

<script>
import {auth} from '../firebase/config'
import { useRouter } from 'vue-router';

export default {
  setup() {
    
    const router= useRouter()
    const logout=async()=>{
      await auth.signOut().then(()=>{
        router.push({name:'home'})
      })
    }
    return {logout}
  }
}

</script>

<style>
.navbar{    
    position: relative;
    padding: 0!important;
}
.image{
    width: 100%;
    height: 50vh;
    object-fit: cover;
    z-index: 1;
    

}
.nav-item{
    padding: 10px;
}
.menu{
    position: absolute;
    bottom: 5px;
    left: 20px;
    z-index: 2;
}
</style>