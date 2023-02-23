import { auth } from "@/firebase/config";
import { ref } from "vue";

const user= ref(auth.currentUser)

auth.onAuthStateChanged((k)=>{
    user.value=k
})

const getUser=()=>{
    return {user}
}

export default getUser