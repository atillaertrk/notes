<template>
  <div>
    <div class="alert alert-danger" v-if="hata">
      {{ hata }}
    </div>
    <div class="container rel">
      <div class="box">
        <div class="row register-area">
          <div class="col back"></div>
          <div class="col side">
            <form @submit.prevent="loginUser">
              <div class="form_wrap">
                <div class="input_wrap">
                  <label for="email">Email Address</label>
                  <input type="text" id="email" v-model="mail" required />
                </div>

                <div class="input_wrap">
                  <label for="pass">Password</label>
                  <input type="password" id="pass" v-model="pass" required />
                </div>

                <div class="input_wrap">
                  <input type="submit" value="LOGIN" class="submit_btn" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useLogin from "@/composables/useLogin";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const mail = ref("");
    const pass = ref("");
    const hata = ref(null);
    const { login } = useLogin();

    const loginUser = async () => {
      try {
        await login(mail.value, pass.value);
        store.commit("setIsLoggedIn", true);
        router.push({ name: "home" });
      } catch (error) {
        hata.value = error.message;
      }
    };

    return { mail, pass, hata, loginUser };
  },
};
</script>

<style></style>
