import { ref } from "vue";
import { auth } from "@/firebase/config";

const hata = ref(null);

const login = async (email, password) => {
  hata.value = null;
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    
    if (!res) {
      throw new Error("Something went wrong. Please try again or contact the administrator");
    }
    return res;
  } catch (error) {
    hata.value = error.message;
  }
};

const useLogin = () => {
  return { hata, login };
};

export default useLogin;
