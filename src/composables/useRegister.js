import { ref } from "vue";
import { auth } from "@/firebase/config";

const hata = ref(null);

const signup = async (email, password, username) => {
  hata.value = null;
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password, username);
    if (!res) {
      throw new Error("An error was encountered. Please try again");
    }
    
    await res.user.updateProfile({displayName:username})
    hata.value = null;
    return res;
  } catch (error) {
    hata.value = error.message;
  }
};

const useRegister = () => {
  return { hata, signup };
};

export default useRegister;
