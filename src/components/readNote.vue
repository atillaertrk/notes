<template>
  <div>
    <div class="mt-3" v-if="note">
      <h2 class="text-center">
        <h5>{{ errors }}</h5>

        {{ note.title }}
      </h2>
      <p>
        {{ note.content }}
      </p>
    </div>
  </div>
</template>

<script>
import readNote from "@/composables/readNote";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const { note, errors, getNote } = readNote(route.params.id);
    getNote();
    
    return { note, errors };
  },
  
};
</script>

<style></style>
