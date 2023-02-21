<template>
  <div class="navbar-content mt-3">
    <div class="container" v-for="post in state.posts" :key="post.id">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            :to="{ name: 'readNote', params: { id: post.id } }"
            class="nav-link"
          >
            {{ post.title }}
            <span class="dateSpan">{{ post.creationDate }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-if="state.errs">
      {{ state.errs }}
    </div>
    
  </div>
</template>

<script>
import { onMounted } from "vue";
import getNotes from "@/composables/getNotes";
import emitter from "@/composables/eventBus";

export default {
  setup() {
    const { state, getNoteList } = getNotes();
    
    emitter.on("degisken", () => {
        
        getNoteList()
      });
    onMounted(() => {
      getNoteList();
      
    });
    // watch(
      
    //   () => degisken,
    //   () => {
        
    //   }
    // );

    return { state };
  }
};
</script>

<style>
.nav-item {
  text-transform: capitalize;
}
.dateSpan {
  font-size: 0.7rem;
  color: var(--bs-gray);
}
</style>
