<template>
  <div class="container mt-3">
    <div class="add-form">
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
import { ref } from "vue";
import { useRouter} from "vue-router";
import emitter from '@/composables/eventBus';


export default {
  setup() {
    let title = ref("");
    let content = ref("");
    let errors = ref("");
    let router = useRouter();
    
    
    const send = async () => {
      const { posting, state } = postNote(title.value, content.value);
      try {
        await posting();
        if (!state.errs) {
          
          emitter.emit("degisken", )
          
          router.push({ name: "home" });
          
        }
      } catch (err) {
        errors.value = state.errs;
      }
    };

    return { errors, title, content, send };
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
  padding: 5px;
  font-size: 1.2rem;
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
</style>
