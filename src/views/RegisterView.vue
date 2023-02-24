<template>
  <div class="container rel">
    <div class="alert alert-danger" v-if="hata">
      {{ hata }}
    </div>
    <div class="box">
      <div class="row register-area">
        <div class="col back"></div>
        <div class="col side">
          <form @submit.prevent="register">
            <div class="form_wrap">
              <div class="input_grp">
                <div class="input_wrap">
                  <label for="fname"
                    >Real Name <small>(*optional)</small></label
                  >
                  <input type="text" id="fname" v-model="realName" />
                </div>
                <div class="input_wrap">
                  <label for="lname">UserName</label>
                  <input type="text" id="lname" v-model="userName" required />
                </div>
              </div>
              <div class="input_wrap">
                <label for="email">Email Address</label>
                <input type="email" id="email" v-model="mail" required />
              </div>

              <div class="input_wrap">
                <label for="pass">Password</label>
                <input type="password" id="pass" v-model="pass" required />
              </div>
              <div class="input_wrap">
                <label for="passag">Password Again</label>
                <input type="password" id="passag" v-model="passAgain" required/>
              </div>
              <div class="input_wrap">
                <input type="submit" value="Register Now" class="submit_btn" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useRegister from "@/composables/useRegister";
import { useRouter } from "vue-router";
export default {
  setup() {
    let realName = ref("");
    let mail = ref("");
    let userName = ref("");
    let pass = ref("");
    let passAgain = ref("");
    let router= useRouter()
    const { hata, signup } = useRegister();
    const register = async () => {
      if (userName.value && mail.value) {
        if (pass.value == passAgain.value) {
          if (pass.value.length >= 6) {
            await signup(mail.value, pass.value, userName.value).then(()=>{
              if(hata.value==null){
              router.push({name:'login'})

              }
            })
          } else {
            hata.value = "Password must be at least 6 characters.";
          }
        } else{
          hata.value= 'Passwords do not match, please check'
        }
      } else{
        hata.value='Username or Email cannot be blank'
      }

    };
    return { mail, realName, userName, pass, passAgain, register, hata };
  }
};
</script>

<style>
.rel {
  position: relative;
  margin-top: 80px;
}
.box {
  border-radius: 25px;
  width: 50vw;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  background-color: #303030;
}
.back {
  background-image: url("@/assets/login.png");
  background-size: cover;
  width: 100% !important;
  background-position: center;
  border-radius: 25px 0 0 25px;
}
.side {
  padding-bottom: 20px;
}
.register-area {
  width: 100%;
  height: 100%;
}

.form_wrap {
  margin-top: 25px;
}

.form_wrap .input_wrap {
  margin-bottom: 15px;
}

.form_wrap .input_wrap:last-child {
  margin-bottom: 0;
}

.form_wrap .input_wrap label {
  display: block;
  margin-bottom: 3px;
  color: #9597a6;
}

.form_wrap .input_grp {
  display: flex;
  justify-content: space-between;
}

.form_wrap .input_grp input[type="text"] {
  width: 165px;
}
.form_wrap .input_grp input[type="email"] {
  width: 165px;
}
.form_wrap .input_grp input[type="password"] {
  width: 165px;
}

.form_wrap input[type="text"] {
  width: 100%;
  border-radius: 3px;
  border: 1px solid #9597a6;
  padding: 10px;
  outline: none;
}
.form_wrap input[type="password"] {
  width: 100%;
  border-radius: 3px;
  border: 1px solid #9597a6;
  padding: 10px;
  outline: none;
}
.form_wrap input[type="email"] {
  width: 100%;
  border-radius: 3px;
  border: 1px solid #9597a6;
  padding: 10px;
  outline: none;
}


.form_wrap input[type="text"]:focus {
  border-color: #ebd0ce;
}

.form_wrap ul {
  background: #fff;
  padding: 8px 10px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
}

.form_wrap ul li:first-child {
  margin-right: 15px;
}

.form_wrap .submit_btn {
  width: 100%;
  background: #b29a68;
  padding: 10px;
  border: 0;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
}

.form_wrap .submit_btn:hover {
  background: #b3934e;
}

@media only screen and (max-width: 1200px) {
  .back {
    display: none;
  }
  form {
    padding: 10px;
  }
}
@media only screen and (max-width: 1000px) and (min-width: 0px) {
  .rel {
    display: block !important;
    width: 100% !important;
    padding: 10px !important;
    padding-bottom: 20px;
    margin: 0 !important;
  }
  .box {
    width: 100%;
  }
  .form_wrap .input_grp {
    display: block;
  }
  .form_wrap .input_grp input[type="text"] {
    width: 100% !important;
  }
}
</style>
