<template>
  <div class="main-read">
    <div class="mt-3" v-if="note">
      <div class="read-post-title">
        <h3>
          {{ note.title }}
        </h3>
        <small class="read-notes-date">
          {{ note.creationDate }}
        </small>
      </div>
      <hr />
      <div class="read-post-content">
        <p class="read-post-content">
          {{ note.content }}
        </p>
      </div>
      <h5>{{ errors }}</h5>
    </div>
    <div class="delete-class">
      <div class="delete">
        <button
          v-if="userAuth"
          @click="deletePost"
          class="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import readNote from "@/composables/readNote";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebase/config";
import getUser from "@/composables/getUser";
import { ref, onMounted } from "vue";
import getNotes from '@/composables/getNotes';
import emitter from "@/composables/eventBus";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { note, errors, getNote } = readNote(route.params.id);
    getNote();
    let userInfo = ref(null);
    let userAuth = ref(false);
    let rest=ref("")
    const {getNoteList}= getNotes()
    onMounted(async() => {
      const { user } = getUser();
      if (user) { 
        userInfo.value = user.value.uid;

        console.log("user UID ===> " + userInfo.value);
        console.log("note value id===>" + route.params.id);
        rest.value=await (await db.collection('posts').doc(route.params.id).get()).data().userUID
         console.log(rest.value)
         if (userInfo.value == rest.value) { 
        userAuth.value = true;}
      }
    });
    const deletePost = async () => { //router ekleeeeee!!!!
      
        await db.collection("posts").doc(route.params.id).delete().then(()=>{
          
          emitter.emit("degisken");

          router.push({ name: "home" });
          getNoteList()
        })
      
    };
    return { note, errors, deletePost, userAuth };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap");
.main-read {
  background-color: #ffff;
  width: 75%;
  position: relative;
  left: 50%;
  margin-top: 75px;
  transform: translate(-50%);
  padding: 20px;
  color: var(--bs-navbar-color);
  border-radius: 10px;
  font-size: 14px !important;
  color: #777777;
}
.read-post-title {
  text-transform: capitalize;
  color: #222222 !important;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
.read-notes-date {
  display: block;
  text-align: end;
  font-size: 10px;
}
.read-post-content {
  font-family: "Poppins", sans-serif;
  font-size: 14px !important;
  font-weight: 300;
  line-height: 2em;
}
.delete-class {
  position: relative;
  height: 25px;
}
.delete {
  position: absolute;
  right: 15px;
  bottom: 0;
}
</style>
