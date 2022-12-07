<template>
  <Backdrop>
    <div class="modal-wrapper modal-centered">
      <div class="w-100 text-center">
        <p class="my-4">
          Estas seguro que quieres dar por procesado a esta solicitud .?
        </p>
      </div>
      <div class="d-flex justify-content-around mb-4">
        <button @click="handleClick" class="sign-in-button green">Si</button>
        <button @click="$emit('close')" class="sign-in-button red">No</button>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'
</script>

<script>
import { mapGetters } from 'vuex'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
export default {
  name: 'Withdrawal Confirm Modal',
  computed: {
    ...mapGetters(['getWithdrawlInfo', 'getWithdrawlsRoute']),
  },
  methods: {
    handleClick(e) {
      let payload = JSON.stringify({
        withdrawal_id: this.getWithdrawlInfo.content.withdrawal_id,
      })
      this.$emit('close', true)
      let route = ''
      if (this.getWithdrawlsRoute === 'approve') {
        route = 'approveWithdrawl'
      } else if (this.getWithdrawlsRoute === 'deny') {
        route = 'denyWithdrawl'
      }

      this.$store.dispatch(route, payload).then((response) => {
        if (response && response.status == true) {
          Swal.fire({
            title: 'Success!',
            text: response.content,
            icon: 'success',
          })
          $emit('close', true)
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

