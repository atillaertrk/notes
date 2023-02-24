<template>
  <div class="container write-note">
    <div v-if="username">Author: {{ username }}</div>
    <div class="add-form clearfix">
      <form @submit.prevent="send">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="title" id="title" />
        <label for="content">Content</label>
        <textarea name="content" id="content" v-model="content"></textarea>
        <button class="btn btn-dark mt-3">Submit</button>
      </form>
    </div>
    <div class="alert" v-if="errors">
      {{ errors }}
    </div>
  </div>
</template>

<script>
import postNote from "@/composables/postNote";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import emitter from "@/composables/eventBus";
import getUser from "@/composables/getUser";
export default {
  setup() {
    let title = ref("");
    let content = ref("");
    let errors = ref("");
    let router = useRouter();
    let userUID = ref("");
    let username = ref("");
    const { user } = getUser();
    onMounted(() => {
      if (user.value !== null && user.value !== undefined) {
        userUID.value = user.value.uid;
        username.value = user.value.displayName;
      }
    });

    const send = async () => {
      const { posting, state } = postNote(
        title.value,
        content.value,
        userUID.value
      );
      try {
        await posting();
        if (!state.errs) {
          emitter.emit("degisken");

          router.push({ name: "home" });
        }
      } catch (err) {
        errors.value = state.errs;
      }
    };

    return { errors, title, content, send, userUID, username };
  }
};
</script>

<style>
.add-form label {
  display: block;
  font-size: 1.2rem;
  margin-top: 10px;
}
.add-form input {
  display: block;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #9597a6;
  padding: 10px;
  outline: none;
}
.add-form input:active {
  border: 1px solid black;
}
.add-form textarea {
  display: block;
  width: 100%;
  padding: 5px;
  font-size: 1rem;
  height: 50vh;
}
.add-form button {
  float: right;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.write-note {
  background-color: #ffff;
  width: 75% !important;
  position: relative;
  left: 50%;
  margin-top: 75px !important;
  transform: translate(-50%);
  padding: 60px !important;
  color: var(--bs-navbar-color);
  border-radius: 10px;
  font-size: 14px !important;
  color: #777777;
  height: inherit;
  background-image: url("@/assets/write.png");
  background-blend-mode: lighten;
  background-size: cover;
}
@media only screen and (max-width: 1000px) and (min-width: 0px) {
  .write-note {
    display: block !important;
    width: 100% !important;
    padding: 10px !important;
    padding-bottom: 20px;
  }
}
</style>
