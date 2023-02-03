<template>
  <Backdrop @click="$emit('close')">
    <div @click.stop class="modal-wrapper">
      <div class="d-flex justify-content-end">
        <div @click="$emit('close')" class="pointer">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Nombre completo</label>
          <input
            v-model="userDetail.full_nombre"
            type="text"
            class="form-control"
            placeholder="Alfredo zevallos"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Nombre de usuario</label>
          <input
            v-model="userDetail.nombre_usuario"
            type="text"
            class="form-control"
            placeholder="Equipeolite"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Correo</label>
          <input
            v-model="userDetail.email"
            type="email"
            class="form-control"
            placeholder="alfredo@gmail.com"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Busd direccion</label>
          <input
            v-if="userDetail.usd_direction"
            v-model="userDetail.usd_direction"
            type="text"
            class="form-control"
            placeholder="Busd direccion"
          />
          <input
            v-else
            type="text"
            ref="usd_direction"
            class="form-control"
            placeholder="Busd direccion"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Leal direccion</label>
          <input
            v-if="userDetail.leal_direction"
            v-model="userDetail.leal_direction"
            type="text"
            class="form-control"
            placeholder="Leal direccion"
          />
          <input
            v-else
            type="text"
            ref="leal_direction"
            class="form-control"
            placeholder="Leal direccion"
          />
        </div>
        <div
          class="mb-3"
          v-for="(data, index) in userDetail.payment_methods"
          :key="index"
        >
          <label class="form-label text-left fs-14">Métodos de pago</label>
          <input
            v-model="data.bank"
            type="text"
            class="form-control"
            placeholder="Banco"
            @input="(e) => handleBank(e, index)"
          />
          <input
            v-model="data.account"
            type="text"
            class="form-control mt-2"
            placeholder="Conta"
            @input="(e) => handleAccount(e, index)"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">País</label>
          <input
            v-model="userDetail.codigo_pais"
            type="text"
            class="form-control"
            placeholder="Peru"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Teléfono</label>
          <input
            v-model="userDetail.telefono"
            class="form-control"
            type="tel"
            pattern="[+]{1}[0-9]{11,14}"
            placeholder="921141833"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14"
            >Descripción de perfil</label
          >
          <textarea
            v-if="userDetail.habilidades"
            v-model="userDetail.habilidades"
            class="form-control"
            id="floatingTextarea"
            placeholder="Habilidades"
          ></textarea>

          <textarea
            v-else
            class="form-control"
            id="floatingTextarea"
            ref="floatingTextarea"
            placeholder="Habilidades"
          ></textarea>
        </div>
        <div
          class="mb-3 d-inline-flex align-items-center"
          v-if="role == 'superadmin'"
        >
          <span class="fs-14">Hacer admin a este usuario:</span>
          <div class="form-check ms-2">
            <input
              class="form-check-input custom-checkbox float-right"
              type="checkbox"
              @change="handleMarkAdmin($event)"
              :checked = "userDetail.is_user_admin"
            />    
          </div>
        </div>
        <div class="mb-3">
          <b-row>
            <b-col md="3">
              <span class="fs-14">Paquete: </span
              ><strong class="fs-14">{{ userDetail.pack_1 }}</strong>
            </b-col>
            <b-col md="5">
              <span class="fs-14">Total compras p2p: </span
              ><strong class="fs-14">{{ userDetail.buys }}</strong>
            </b-col>
            <b-col md="4">
              <span class="fs-14">Total ventas p2p: </span
              ><strong class="fs-14">{{ userDetail.sells }}</strong>
            </b-col>
          </b-row>
        </div>
        <div class="mb-3">
          <b-row>
            <b-col md="5">
              <span class="fs-14">Disponible wallet: </span
              ><strong class="fs-14" v-if="userDetail.balance">{{
                userDetail.balance
              }}</strong>
              <strong class="fs-14" v-else>0</strong>
            </b-col>
            <b-col md="5">
              <span class="fs-14">No disponible wallet: </span
              ><strong class="fs-14" v-if="userDetail.not_available">{{
                userDetail.not_available
              }}</strong>
              <strong class="fs-14" v-else>0</strong>
            </b-col>
          </b-row>
        </div>
        <div class="mb-3">
          <b-row>
            <b-col md="5">
              <span class="fs-14">Total negocios: </span
              ><strong class="fs-14">{{ userDetail.businesses_total }}</strong>
            </b-col>
            <b-col md="5">
              <span class="fs-14">Balance wallet scrow: </span
              ><strong class="fs-14">{{ userDetail.scrow_balance }}</strong>
            </b-col>
          </b-row>
        </div>
        <div class="mb-3">
          <span class="fs-14 d-block"
            >Bloquear los botones de compra y venta a este usuario:
          </span>
          <button
            class="common chw mt-2"
            @click="handleBlockUser"
            v-if="!userDetail.is_user_blocked_p2p"
          >
            block
          </button>
          <button
            class="common chw mt-2"
            @click="handleUnBlockUser"
            v-if="userDetail.is_user_blocked_p2p"
          >
            unblock
          </button>
        </div>
        <div class="mb-3">
          <span class="fs-14 d-block">Reenviar correo: </span>
          <button class="common chw mt-2">Resend email</button>
        </div>

        <div class="mb-3">
          <button class="common chg" @click="save">GUARDAR</button>
        </div>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'

const emit = defineEmits(['close'])

// Use it when api data is available
// function save() {
// emit('close')
// }
</script>
<script>
import Swal from 'sweetalert2'
import { ref } from 'vue'
export default {
  name: 'Edit Modal',
  props: ['userDetail'],
  data: function () {
    return {
      full_nombre: '',
      nombre_usuario: '',
      email: '',
      telefono: '',
      codigo_pais: '',
      habilidades: '',
      usd_direction: '',
      leal_direction: '',
      payment_methods: [],
      role: localStorage.getItem('userRole'),
    }
  },
  updated() {
    if (!this.userDetail.payment_methods) {
      this.userDetail.payment_methods = [{ bank: '', account: '' }]
    }

    var payment_method = this.userDetail.payment_methods
    if (!payment_method) {
      payment_method = []
    }
    for (let i = payment_method.length; i < 3; i++) {
      payment_method.push({ bank: '', account: '' })
    }
    this.payment_methods = payment_method
  },
  methods: {
    handleMarkAdmin(e) {
      e.preventDefault()
      console.log("yyyyyy",e.target.checked)

      if (e.target.checked == true) {
        let payload = JSON.stringify({
          user_id: this.userDetail.id
        })
        this.$store.dispatch('makeAdmin', payload).then((response) => {
          if (response && response.status == true) {
            Swal.fire({
              title: 'Success!',
              text: response.content,
              icon: 'success',
            })
          } else {
            Swal.fire({
              title: 'Error!',
              text: response.content,
              icon: 'error',
            })
          }
        })
      }
      else if (e.target.checked == false) {
        let data = JSON.stringify({
          user_id: this.userDetail.id
        })
        this.$store.dispatch('deleteAdmin', data).then((response) => {
          if (response && response.status == true) {
            Swal.fire({
              title: 'Success!',
              text: response.content,
              icon: 'success',
            })
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
    handleUnBlockUser(e) {
      e.preventDefault()
      let payload = JSON.stringify({
        user_id: this.userDetail.id,
      })
      this.$store.dispatch('unBlockUser', payload).then((response) => {
        if (response && response.status == true) {
          Swal.fire({
            title: 'Success!',
            text: response.content,
            icon: 'success',
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to update',
            icon: 'error',
          })
        }
      })
    },
    handleBlockUser(e) {
      e.preventDefault()
      let payload = JSON.stringify({
        user_id: this.userDetail.id,
      })
      this.$store.dispatch('blockUser', payload).then((response) => {
        if (response && response.status == true) {
          Swal.fire({
            title: 'Success!',
            text: response.content,
            icon: 'success',
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to update',
            icon: 'error',
          })
        }
      })
    },
    save(e) {
      e.preventDefault()
      let payload = JSON.stringify({
        user_id: this.userDetail.id,
        data: {
          full_nombre: this.userDetail.full_nombre,
          email: this.userDetail.email,
          telefono: this.userDetail.telefono,
          codigo_pais: this.userDetail.codigo_pais,
          habilidades:
            this.userDetail.habilidades || this.$refs.floatingTextarea.value,
          usd_direction:
            this.userDetail.usd_direction || this.$refs.usd_direction.value,
          payment_methods: this.userDetail.payment_methods,
        },
      })
      this.$store.dispatch('updateUserProfile', payload).then((response) => {
        if (response.status == true) {
          Swal.fire({
            title: 'Success!',
            text: response.content,
            icon: 'success',
          })
          this.$emit('close')
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
<style scoped>
.modal-wrapper {
  margin: 1.75rem auto;
}
</style>
