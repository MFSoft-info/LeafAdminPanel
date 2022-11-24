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
          <span> marilu melendrez </span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Nombre de usuario : </span>
        </b-col>
        <b-col md="7">
          <span>maricucha :</span>
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
          <span class="head">URL Publicacion : </span>
        </b-col>
        <b-col md="7">
          <span>facebook/losa… </span>
        </b-col>
      </b-row>

      <div class="mt-5 mb-4 text-center">
        <button @click="$emit('show-confirm')" class="common sm-btn-c">
          PROCESAR
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
