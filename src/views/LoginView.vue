<template>
  <div>
    <div class="alert alert-danger" v-if="hata">
     {{ hata }}
    </div>
    <div class="container rel">
        <div class="box">
          <div class="row register-area">
            <div class="col back"></div>
            <div class="col side">
              <form @submit.prevent="loginUser">
                <div class="form_wrap">
                  <div class="input_wrap">
                    <label for="email">Email Address</label>
                    <input type="text" id="email" v-model="mail" required/>
                  </div>
  
                  <div class="input_wrap">
                    <label for="pass">Password</label>
                    <input type="password" id="pass" v-model="pass" required/>
                  </div>
                  
                  <div class="input_wrap">
                    <input
                      type="submit"
                      value="LOGIN"
                      class="submit_btn"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router'
export default {
    setup() {
        let mail=ref("")
        let pass= ref("")
        let router=useRouter()
        const {hata, login} = useLogin()
        const loginUser=async()=>{
            await login(mail.value,pass.value).then((res)=>{
              if(res){
              router.push({name:'home'})

              }
            })
        }
        return{mail,pass, loginUser, hata}
    }

}
</script>

<style>

</style>