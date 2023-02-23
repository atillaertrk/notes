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
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');
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
  font-size: 14px!important;
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
  font-size: 14px!important;
  font-weight: 300;
  line-height: 2em;
}
</style>
