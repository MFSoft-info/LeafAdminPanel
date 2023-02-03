<template>
  <Backdrop @click="$emit('close')">
    <div @click.stop class="modal-wrapper modal-centered">
      <div class="d-flex justify-content-end pointer">
        <div @click="$emit('close')">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <b-row class="mb-2 mt-5">
        <b-col md="5">
          <span class="head">Nombre : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.full_nombre }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Nombre de usuario : </span>
        </b-col>
        <b-col md="7">
          <span>{{ content.nombre_usuario }}</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Fecha : </span>
        </b-col>
        <b-col md="7">
          <span> {{ new Date(content.created_at).toLocaleString() }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">URL Publicacion : </span>
        </b-col>
        <b-col md="7">
          <span style="word-break: break-all"> {{ content.post_link }} </span>
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
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Backdrop from '@/components/Backdrop.vue'
const store = useStore()
</script>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Advertise Modal',
  props: ['content'],
  data: function () {
    return {
      content: {
        full_nombre: '',
        nombre_usuario: '',
        created_at: '',
        post_link: '',
      },
    }
  },
  computed: {
    ...mapGetters(['getAdvertiseInfo']),
  },
  methods: {
    handleApproveClick(e) {
      this.$store.dispatch('setAdsModalRoute', 'approve')
      this.$emit('show-confirm')
    },
    handleDenyClick(e) {
      this.$store.dispatch('setAdsModalRoute', 'deny')
      this.$emit('show-confirm')
    },
  },
}
</script>