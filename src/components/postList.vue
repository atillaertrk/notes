<template>
  <div class="container list-group menu-list mt-3">
    <div>
      <li class="list-group-item posts-main-title">Posts</li>
      <router-link
        v-for="post in state.posts"
        :key="post.id"
        :to="{ name: 'readNote', params: { id: post.id } }"
        class="list-group-item list-group-item-action capitalize-item d-flex justify-content-between"
        >{{ post.title }}
        <span class="dateSpan">{{ post.creationDate }}</span></router-link
      >
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
      getNoteList();
    });
    onMounted(() => {
      
      getNoteList();
    });
  
    return { state };
  }
};
</script>

<style>
.menu-list {
  padding: 15%!important;
}
.capitalize-item {
  text-transform: capitalize;
}
.dateSpan {
  font-size: 0.7rem;
  color: var(--bs-gray);
  text-align: right;
}
.posts-main-title{
  background: #b29a68!important;
  text-align: center;
  color: #eaeaea!important;
  font-variant: all-small-caps;
}
</style>
