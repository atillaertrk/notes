<template>
  <div class="container">
    <div v-if="userInfo" class="alert alert-primary">
      <div>
        {{ userInfo.photoURL }}
      </div>
      <p>
        Username: <span>{{ userInfo.displayName }}</span>
      </p>
      <p>
        Email : <span> {{ userInfo.email }}</span>
      </p>
      <p>
        Verified: <span v-if="userInfo.emailVerified">Verified</span ><span v-if="!userInfo.emailVerified">Unapproved</span>
      </p>
      <p>
        userUid: <span> {{ userInfo.uid }} </span>
      </p>
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
