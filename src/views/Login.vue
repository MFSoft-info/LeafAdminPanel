<template>
  <div id="login">
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form action="#">
          <h1 class="sign-in-title">Sign in</h1>
          <!--         <input @input="checkUser" v-model="User" class="mb-2" autocomplete="off" type="text" placeholder="Username" />-->
          <input
            ref="User"
            class="mb-2"
            autocomplete="off"
            type="text"
            placeholder="Username"
          />

          <!--         <span v-if="isUser" class="validation mb-2"> User name is required.</span>-->
          <input
            v-model="password"
            @input="checkPassword"
            autocomplete="new-password"
            type="password"
            placeholder="Password"
            min="8"
          />
          <span v-if="isPassword" class="validation">
            Your password must be 8 characters long.</span
          >
          <button @click="submit" class="sign-in-button-w">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      isPassword: false,
      password: '',
      isUser: false,
      User: '',
    }
  },
  computed: {
    ...mapGetters(['getUserId']),
  },
  methods: {
    //check the password length is max 8
    checkPassword() {
      if (this.password === '' && this.password.length < 8) {
        this.isPassword = true
      } else {
        this.isPassword = false
      }
    },
    checkUser() {
      //set the custom user validations
      if (this.User === '') {
        this.isUser = true
      } else {
        this.isUser = false
      }
    },
    submit(e) {
      //check the validation & goto home
      // if(this.User  === ""){
      //   this.isUser = true;
      //   return;
      // }else
      //
      e.preventDefault()
      if (this.password === '' || this.password.length < 8) {
        this.isPassword = true
        return
      } else {
        let payload = JSON.stringify({
          username: this.$refs.User.value,
          password: this.password,
        })
        this.$store.dispatch('signInUser', payload).then((response) => {
          if (response.status == true) {
            this.$router.push({ name: 'Home' })
            let payload = JSON.stringify({
              user_id: this.getUserId,
            })
            this.$store.dispatch('getUserProfile', payload)
          } else {
            Swal.fire({
              title: 'Error!',
              text: response.content,
              icon: 'error',
            })
          }
        })
      }
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
#login {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  width: 475px;
}
.sign-in-title {
  font-weight: bold;
  margin-top: 70px;
  margin-bottom: 70px;
}
.sign-in-button-w {
  border: 1px solid $black-text;
  background-color: $black-text;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  margin-top: 50px;
  width: 100%;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
}
form {
  background-color: #ffffff;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  &:focus {
    border: 1px solid $black-text;
  }
  &:focus-visible {
    outline: unset;
  }
}

.container {
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 400px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 100%;
  z-index: 2;
}

@media screen and (max-width: 550px) and (min-width: 300px) {
  #container {
    width: 100% !important;
  }
  form {
    padding: 0 25px !important;
  }
  #login {
    width: 100% !important;
  }
}
.validation {
  font-size: 12px;
  color: $red;
  margin-top: 8px;
  text-align: left !important;
  display: block;
}
</style>
