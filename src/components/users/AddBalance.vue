<template>
  <Backdrop @click="$emit('close')">
    <div @click.stop class="modal-wrapper modal-centered">
      <div class="d-flex justify-content-end">
        <div @click="$emit('close')" class="pointer">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <h4 class="heading-users m-0">AÑADIR SALDO</h4>
      <div class="mb-3">
        <label class="form-label text-left fs-14">Monto</label>
        <input type="number" class="form-control" ref="amount" />
      </div>
      <div class="mb-3">
        <label class="form-label text-left fs-14"
          >Motivo de la transaccion</label
        >
        <textarea
          class="form-control"
          ref="reason"
          id="floatingTextarea"
        ></textarea>
      </div>
      <div class="mb-3">
        <button class="common chg" @click="submit">Anadir saldo</button>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'

const emit = defineEmits(['close'])
</script>
<script>
import Swal from 'sweetalert2'
export default {
  name: 'Add Balance Modal',
  props: ['data'],
  methods: {
    submit(e) {
      e.preventDefault()
      if (!this.$refs.amount.value) {
        Swal.fire({
          title: 'Error!',
          text: 'Please enter amount.',
          icon: 'error',
        })
        return 0
      }
      let payload = JSON.stringify({
        userid: this.data,
        amount: this.$refs.amount.value,
      })
      this.$store.dispatch('addBalance', payload).then((response) => {
        if (response && response.status == true) {
          Swal.fire({
            title: 'Success!',
            text: response.content,
            icon: 'success',
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to add',
            icon: 'error',
          })
        }
      })
    },
  },
}
</script>
