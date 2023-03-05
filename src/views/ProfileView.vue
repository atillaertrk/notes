<template>
  <div class="container write-note ">
    <div class="d-flex align-items-center">
    <div class="pro-photo">
        <img src="../assets/logo.png" alt="">
    </div>
    <div class="info container">
        <div class="username p-1">
            Username: {{userInfo.displayName}}
        </div>
        <div class="email p-1">
            email : {{userInfo.email}}
        </div>
        <div class="verified p-1">
            verified: <span v-if="userInfo.emailVerified">Verified</span><span v-else-if="!userInfo.emailVerified">Please confirm your email</span>
        </div>
    </div>
    </div>
    <div class="row mt-3 container">
        <div class="col-6 p-0">
            <div class="post-info">
                You have <span class="badge bg-primary">3</span> post
            </div>
            <div class="likes-info">
                You have <span class="badge bg-success">142</span> likes
            </div>
            <div class="dislikes-info">
                You have <span class="badge bg-danger">23</span> dislikes
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import { ref } from "vue";


export default {
  setup() {
    
    const { user } = getUser();
    const userInfo = ref(user.value);
    
    return { userInfo };
  }
};
</script>

<style>
.pro-photo img{
    border: 1px solid rgba(0, 0, 0, 0.293);
    height: 100px;
    width: 100px;
    padding: 10px;
}
</style>