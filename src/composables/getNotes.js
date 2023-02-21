import { db } from "../firebase/config";
import moment from "moment/moment";
import { reactive } from "vue";

const getNotes = () => {
  const state = reactive({
    errs: null,
    posts: []
  });
  
  const getNoteList = async () => {
    try {
      let res = await db
        .collection("posts")
        .orderBy("creationDate", "desc")
        .get();
    

      state.posts = res.docs.map((doc) => {
        const data = doc.data();
        return { ...data, id: doc.id, creationDate: moment(data.creationDate.toDate()).locale('tr').calendar() };
      });
    } catch (error) {
      state.errs = error.message;
    }
  };
  
  return { state, getNoteList };
};

export default getNotes;