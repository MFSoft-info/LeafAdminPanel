<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4 class="heading-users m-0">Profile</h4>
        {{getUserInfo}}
      </b-col>
    </b-row>
    <div class="row-team-1">
      <b-row>
        <div class="mb-3 col-md-6">
          <label class="form-label">Full name </label>
          <input
            placeholder="e.g Alfrdo zaid nini"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">User name</label>
          <input
            placeholder="e.g nino123"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Mail</label>
          <input
            placeholder="e.g nino123@gmail.com"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Phone</label>
          <input
            placeholder="e.g +51928464842"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Country</label>
          <input
            placeholder="peru"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Payment Method</label>
          <input
            placeholder="gvv56vyd65dx5xs52x"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Currency</label>
          <input
            placeholder="usd"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Password 1</label>
          <input
            autocomplete="new-password"
            placeholder="e.g d-block-5th street"
            type="password"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Password 2</label>
          <input
            autocomplete="new-password"
            placeholder="e.g d-block-5th street"
            type="password"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Describe Your Ability</label>
          <textarea class="form-control" id="floatingTextarea"></textarea>
        </div>
        <div class="mb-3 col-md-6 ok d-inline-flex justify-content-between">
          <label class="form-label">Notification</label>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" />
          </div>
        </div>
        <div class="mb-3 col-md-6 ok d-inline-flex justify-content-between">
          <label class="form-label">Local professional</label>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" />
          </div>
        </div>
        <div class="mb-3 col-md-6 ok d-inline-flex justify-content-between">
          <label class="form-label">Mobility</label>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" />
          </div>
        </div>
      </b-row>

      <b-row>
        <b-col md="12" class="d-flex justify-content-center">
          <button type="submit" class="common w-0X">Submit</button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: 'Profile',
  // data() {
  //   return {
  //     isPassword: false,
  //     password: '',
  //     isUser: false,
  //     User: '',
  //   }
  // },
  computed: {
    ...mapGetters([
      "getUserInfo",
    ]),
  },
  methods: {
    submit(e) {
      e.preventDefault();
        let payload= JSON.stringify({
          username: this.$refs.User.value,
          password: this.password,

        })
         this.$store.dispatch("signInUser", payload).then((response) => {
          if (response.status == true) {
            this.$router.push({ name: "Home" });
            let payload = JSON.stringify({
              "user_id": this.getUserId
            })
            this.$store.dispatch("getUserProfile", payload);
          } else {
            Swal.fire({
              title: "Error!",
              text: response.content,
              icon: "error",
            });
          }
        })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables';
:root {
  --bg-shadow--: 0 0.5rem 1rem rgb(0 0 0 / 15%);
}

.row-team-1 {
  box-shadow: var(--bg-shadow--);
  border-radius: 1rem;
  background-color: #ffffff;
  padding: 40px;
  label {
    font-weight: 600;
    font-size: 16px;
    color: #323c43;
  }
}
.ok {
  .form-check input {
    width: 4em;
  }
}
.w-0X {
  margin-top: 30px;
  width: 25%;
}

@media screen and (max-width: 767px) and (min-width: 300px) {
  .w-0X {
    margin-top: 30px;
    width: 100%;
  }
}
</style>
