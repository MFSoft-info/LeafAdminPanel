<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4 class="heading-users m-0">Profile</h4>
      </b-col>
    </b-row>
    <div class="row-team-1">
      <b-row>
        <div class="mb-3 col-md-6">
          <label class="form-label">Full name </label>
          <input
            placeholder="e.g Alfrdo zaid nini"
            v-model="profileInfo.full_nombre"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">User name</label>
          <input
            v-model="profileInfo.nombre_usuario"
            placeholder="e.g nino123"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Mail</label>
          <input
            v-model="profileInfo.email"
            placeholder="e.g nino123@gmail.com"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Phone</label>
          <input
            v-model="profileInfo.telefono"
            placeholder="e.g +51928464842"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Country</label>
          <input
            v-model="profileInfo.country_name"
            placeholder="peru"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Password 1</label>
          <input
            v-model="profileInfo.password1"
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
            v-model="profileInfo.password2"
            autocomplete="new-password"
            placeholder="e.g d-block-5th street"
            type="password"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Describe Your Ability</label>
          <textarea
            class="form-control"
            v-model="profileInfo.habilidades"
            id="floatingTextarea"
          ></textarea>
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
        <label class="form-label">Payment Method</label>
        <hr />
        <div class="mb-3 col-md-6">
          <label class="form-label">Usd</label>
          <input
            v-model="profileInfo.usd_direction"
            placeholder="usd"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Leal</label>
          <input
            v-model="profileInfo.leal_direction"
            placeholder="leal"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div
          class="mb-3 col-md-6"
          v-for="(data, index) in payment_methods"
          :key="index"
        >
          <label class="form-label">Name Bank</label>
          <input
            v-model="data.bank"
            placeholder="Bank"
            type="text"
            class="form-control mb-3"
            aria-describedby="emailHelp"
            @input="(e) => handleBank(e, index)"
          />
          <input
            v-model="data.account"
            placeholder="Account"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            @input="(e) => handleAccount(e, index)"
          />
        </div>
        <div class="mb-3 col-md-6">
          <label class="form-label">Currency</label>
          <input
            v-model="profileInfo.currency"
            placeholder="Currency"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
      </b-row>
      <b-row>
        <b-col md="12" class="d-flex justify-content-center">
          <button type="submit" @click="submit" class="common w-0X">
            Submit
          </button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'Profile',
  data: function () {
    return {
      profileInfo: {
        full_nombre: '',
        nombre_usuario: '',
        email: '',
        telefono: '',
        codigo_pais: '',
        currency: '',
        country_name: '',
        password1: '',
        password2: '',
        habilidades: '',
        usd_direction: '',
        payment_methods: [],
      },
    }
  },
  computed: {
    ...mapGetters(['getUserId', 'getUserInfo']),
  },
  beforeMount() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      let payload = JSON.stringify({
        user_id: this.getUserId || localStorage.getItem('userId'),
      })
      this.$store.dispatch('getUserProfile', payload).then((response) => {
        if (response.status) {
          this.profileInfo = response.content;
          var payment_method = response.content.payment_methods;
          if(!payment_method){
              payment_method = [];
          }
          for(let i=payment_method.length; i < 3; i++ )
              payment_method.push({bank: '', account: ''});
          }
          this.payment_methods = payment_method;
          console.log(this.payment_methods)
      })
    },
    submit(e) {
      e.preventDefault()
      let payload = JSON.stringify({
        user_id: localStorage.getItem('userId'),
        data: {
          full_nombre: this.profileInfo.full_nombre,
          email: this.profileInfo.email,
          telefono: this.profileInfo.telefono,
          codigo_pais: this.profileInfo.codigo_pais,
          habilidades: this.profileInfo.habilidades,
          usd_direction: this.profileInfo.usd_direction,
          payment_methods: this.payment_methods,
        },
      })
      this.$store.dispatch('updateUserProfile', payload).then((response) => {
        if (response && response.status == true) {
          Swal.fire({
            title: 'Success!',
            text: response.content,
            icon: 'success',
          })
          this.$router.push({ name: 'Home' })
          this.profileInfo = response
        } else {
          Swal.fire({
            title: 'Error!',
            text: response,
            icon: 'error',
          })
        }
      })
    },
    handleBank(e, index) {
      this.payment_methods[index]['bank'] = e.target.value
    },
    handleAccount(e, index) {
      this.payment_methods[index]['account'] = e.target.value
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
