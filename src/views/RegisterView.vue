<template>
  <div>
    <div class="container rel">
      <div class="box">
        <div class="row register-area">
          <div class="col back"></div>
          <div class="col">
            <form>
              <div class="form_wrap">
                <div class="input_grp">
                  <div class="input_wrap">
                    <label for="fname">Real Name <small>(*optional)</small></label>
                    <input type="text" id="fname" />
                  </div>
                  <div class="input_wrap">
                    <label for="lname">UserName</label>
                    <input type="text" id="lname" />
                  </div>
                </div>
                <div class="input_wrap">
                  <label for="email">Email Address</label>
                  <input type="text" id="email" />
                </div>

                <div class="input_wrap">
                  <label for="pass">Password</label>
                  <input type="password" id="pass" />
                </div>
                <div class="input_wrap">
                  <label for="passag">Password Again</label>
                  <input type="password" id="passag" />
                </div>
                <div class="input_wrap">
                  <input
                    type="submit"
                    value="Register Now"
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
import { ref } from "vue";

export default {
  setup() {
    let mail= ref("")
    let userName= ref("")
    let pass= ref("")
    let passAgain= ref("")

    return {mail, userName, pass, passAgain}
  }
};
</script>

<style>
.rel {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.box {
  border-radius: 25px;
  width: 50vw;
  position: relative;
  left: 50%;
  top: 50%;
  height: 50vh;
  transform: translate(-50%, -70%);
  background-color: #303030;
}
.back {
  background-image: url("@/assets/login.png");
  background-size: cover;
  width: 100% !important;
  height: 100%;
  background-position: center;
  border-radius: 25px 0 0 25px;
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
</style>
