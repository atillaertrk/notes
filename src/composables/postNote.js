import { db, timeStamp } from "@/firebase/config";
import { reactive } from "vue";
import getNotes from "@/composables/getNotes";

const postNote = (title, content, userUID) => {
  const { getNoteList } = getNotes();
  const state = reactive({
    errs: null,
    posts: []
  });

  const posting = async () => {
    try {
      await db
        .collection("posts")
        .add({
          title: title,
          content: content,
          userUID: userUID,
          creationDate: timeStamp(),
        });
      await getNoteList();
    } catch (error) {
      state.errs = error.message;
    }finally {
        getNoteList();
      }
  };

  return { posting, state };
};

export default postNote;
