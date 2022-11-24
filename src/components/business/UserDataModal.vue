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
          <span> marilu melendrez </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Nombre de usuario : </span>
        </b-col>
        <b-col md="7">
          <span> maricucha</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Tipo de negocio : </span>
        </b-col>
        <b-col md="7">
          <span> local</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Nombre del negocio : </span>
        </b-col>
        <b-col md="7">
          <span> pez grande </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Categoria : </span>
        </b-col>
        <b-col md="7">
          <span> Restaurante</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Hora de apertura : </span>
        </b-col>
        <b-col md="7">
          <span> 8am</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> hora de ciere : </span>
        </b-col>
        <b-col md="7">
          <span> 10pm</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Direccion del negocio: </span>
        </b-col>
        <b-col md="7">
          <span> guardia civil 230, chorrillos</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Facebook : </span>
        </b-col>
        <b-col md="7">
          <span> ........</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Whatsapp : </span>
        </b-col>
        <b-col md="7">
          <span> ........</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Tiktok : </span>
        </b-col>
        <b-col md="7">
          <span> ........</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Website : </span>
        </b-col>
        <b-col md="7">
          <span> ........</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Youtube : </span>
        </b-col>
        <b-col md="7">
          <span> ........</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Descripcion : </span>
        </b-col>
        <b-col md="7">
          <span> preparacion de todo tipo de comida </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Monto minimo para regalar token : </span>
        </b-col>
        <b-col md="7">
          <span> 20usdt Comission que regala 2usdt </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Fecha : </span>
        </b-col>
        <b-col md="7">
          <span> 12/09/2021 </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head"> Fotos del negocio : </span>
        </b-col>
        <b-col md="7">
          <span> ..... </span>
        </b-col>
      </b-row>
      <div class="mt-5 mb-4 text-center">
        <button @click="$emit('show-confirm')" class="common sm-btn-c">
          APROBAR
        </button>
        <button @click="$emit('show-confirm')" class="ms-3 common sm-btn-c">
          NEGAR
        </button>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'
</script>

<style scoped>
.modal-wrapper {
  margin: 1.75rem auto;
}
</style>
