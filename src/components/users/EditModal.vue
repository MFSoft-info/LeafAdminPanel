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
            placeholder="1xv737df663vesc5zx55"
          />
          <input
            v-else
            value="Busd direccion"
            type="text"
            class="form-control"
            placeholder="1xv737df663vesc5zx55"
          />
        </div>
        <!-- v-if="userDetail.usd_direction ? 'v-model'== userDetail.usd_direction : 'value'== 'sdsf' "  -->
        <div v-if="userDetail.payment_methods">
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
              placeholder="Usdt address"
            />
            <input
              v-model="data.account"
              type="text"
              class="form-control mt-2"
              placeholder="Laeal address"
            />
          </div>
        </div>
        <div
          v-else
          class="mb-3"
          v-for="(data, index) in userDetail.payment_methods"
          :key="index"
        >
          <label class="form-label text-left fs-14">Métodos de pago</label>
          <input
            value="bank"
            type="text"
            class="form-control"
            placeholder="Usdt address"
          />
          <input
            value="account"
            type="text"
            class="form-control mt-2"
            placeholder="Laeal address"
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
            v-model="userDetail.habilidades"
            class="form-control"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div class="mb-3 d-inline-flex align-items-center">
          <span class="fs-14">Hacer admin a este usuario:</span>
          <div class="form-check ms-2">
            <input
              class="form-check-input custom-checkbox float-right"
              type="checkbox"
              @change="handleMarkAdmin($event)"
              value=""
            />
          </div>
        </div>
        <div class="mb-3">
          <b-row>
            <b-col md="3">
              <span class="fs-14">Paquete: </span
              ><strong class="fs-14">50</strong>
            </b-col>
            <b-col md="5">
              <span class="fs-14">Total compras p2p: </span
              ><strong class="fs-14">15</strong>
            </b-col>
            <b-col md="4">
              <span class="fs-14">Total ventas p2p: </span
              ><strong class="fs-14">20</strong>
            </b-col>
          </b-row>
        </div>
        <div class="mb-3">
          <b-row>
            <b-col md="5">
              <span class="fs-14">Disponible wallet: </span
              ><strong class="fs-14">230</strong>
            </b-col>
            <b-col md="5">
              <span class="fs-14">No disponible wallet: </span
              ><strong class="fs-14">230</strong>
            </b-col>
          </b-row>
        </div>
        <div class="mb-3">
          <b-row>
            <b-col md="5">
              <span class="fs-14">Total negocios: </span
              ><strong class="fs-14">4</strong>
            </b-col>
            <b-col md="5">
              <span class="fs-14">Balance wallet scrow: </span
              ><strong class="fs-14">230</strong>
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
            blocked
          </button>
          <button
            class="common chw mt-2"
            @click="handleUnBlockUser"
            v-if="userDetail.is_user_blocked_p2p"
          >
            unblocked
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
      payment_methods: [],
    }
  },
  methods: {
    handleMarkAdmin(e) {
      e.preventDefault()
      if (e.target.checked) {
        let payload = JSON.stringify({
          user_id: localStorage.getItem('userId'),
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
        user_id: localStorage.getItem('userId'),
        data: {
          full_nombre: this.userDetail.full_nombre,
          email: this.userDetail.email,
          telefono: this.userDetail.telefono,
          codigo_pais: this.userDetail.codigo_pais,
          habilidades: this.userDetail.habilidades,
          usd_direction: this.userDetail.usd_direction,
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
        } else {
          Swal.fire({
            title: 'Error!',
            text: response.content,
            icon: 'error',
          })
        }
      })
    },
  },
}
</script>
<style scoped>
.modal-wrapper {
  margin: 1.75rem auto;
}
</style>
