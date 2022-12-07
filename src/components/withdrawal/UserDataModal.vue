<template>
  <Backdrop @click="$emit('close')">
    <div
      @click.stop
      id="modal-withdraw-18"
      class="modal-wrapper modal-centered"
    >
      <div class="d-flex justify-content-end pointer">
        <div @click="$emit('close')">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <b-row class="mb-2 mt-5">
        <b-col md="5">
          <span class="head">Nombre: </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.full_nombre }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Nombre de usuario: </span>
        </b-col>
        <b-col md="7">
          <span>{{ content.nombre_usuario }}</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Fecha:</span>
        </b-col>
        <b-col md="7">
          <span> {{ new Date(content.requested_at).toLocaleString() }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Monto:</span>
        </b-col>
        <b-col md="7">
          <span>{{ content.amount }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Direccion LEAL:</span>
        </b-col>
        <b-col md="7">
          <span>{{ content.leal_direction }} </span>
        </b-col>
      </b-row>
      <div class="mt-5 mb-4 text-center">
        <button @click="handleApproveClick" class="common sm-btn-c">
          PROCESAR
        </button>
        <button @click="handleDenyClick" class="ms-3 common sm-btn-c">
          NEGAR
        </button>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
</script>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Withdrawal Modal',
  props: ['content'],
  data: function () {
    return {
      content: {
        full_nombre: '',
        nombre_usuario: '',
        requested_at: '',
        amount: '',
        leal_direction: '',
      },
    }
  },
  computed: {
    ...mapGetters(['getWithdrawlInfo']),
  },
  methods: {
    handleApproveClick(e) {
      this.$store.dispatch('setWithdrawlsModalRoute', 'approve')
      this.$emit('modal-delete')
    },
    handleDenyClick(e) {
      this.$store.dispatch('setWithdrawlsModalRoute', 'deny')
      this.$emit('modal-delete')
    },
  },
}
</script>

