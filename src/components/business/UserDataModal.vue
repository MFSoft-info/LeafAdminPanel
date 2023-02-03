<template>
  <Backdrop @click="$emit('close')">
    <div @click.stop class="modal-wrapper">
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
          <span>  {{ content.full_nombre }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Nombre de usuario : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.nombre_usuario }}</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Tipo de negocio : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.type }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Nombre del negocio : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.business_name }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Categoria : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.category }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Hora de apertura : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.opening_time }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> hora de ciere : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.closing_time }}</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Direccion del negocio: </span>
        </b-col>
        <b-col md="7">
          <span>  {{ content.address }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Facebook : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.facebook_url }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Instagram : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.instagram_url }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Whatsapp : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.number_phone }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Tiktok : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.tiktok_url }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Website : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.website_url }} </span>
        </b-col>
      </b-row>
      <!-- <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Youtube : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.number_phone }} </span>
        </b-col>
      </b-row> -->
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Descripcion : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.description }} </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Monto para regalar token : </span>
        </b-col>
        <b-col md="7">
          <span> {{ content.gift_percentage }} </span>
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
      <!-- <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Fotos del negocio : </span>
        </b-col>
        <b-col md="7">
          <span> ..... </span>
        </b-col>
      </b-row> -->
      <div class="mt-5 mb-4 text-center">
        <button @click="handleApproveClick" class="common sm-btn-c">
          APROBAR
        </button>
        <button @click="handleDenyClick" class="ms-3 common sm-btn-c">
          NEGAR
        </button>
      </div>
    </div>
  </Backdrop>
</template>

<style scoped>
.modal-wrapper {
  margin: 1.75rem auto;
}
</style>
<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Backdrop from '@/components/Backdrop.vue'
const store = useStore()
</script>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Business Modal',
  props: ['content'],
  data: function () {
    return {
      content: {
        full_nombre: '',
        nombre_usuario: '',
        type: '',
        business_name: '',
        category: '',
        opening_time: '',
        closing_time: '',
        address: '',
        facebook_url: '',
        instagram_url: '',
        number_phone: '',
        tiktok_url: '',
        website_url: '',
        description: '',
        gift_percentage: '',
        created_at: '',
      },
    }
  },
  computed: {
    ...mapGetters(['getBusinessInfo']),
  },
  methods: {
    handleApproveClick(e) {
      this.$store.dispatch('setBusinessModalRoute', 'approve')
      this.$emit('show-confirm')
    },
    handleDenyClick(e) {
      this.$store.dispatch('setBusinessModalRoute', 'deny')
      this.$emit('show-confirm')
    },
  },
}
</script>
