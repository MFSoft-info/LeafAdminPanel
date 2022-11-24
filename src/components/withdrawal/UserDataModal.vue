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
          <span>marilu melendrez</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Nombre de usuario: </span>
        </b-col>
        <b-col md="7">
          <span>maricucha:</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Fecha:</span>
        </b-col>
        <b-col md="7">
          <span>12/09/2021</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Monto:</span>
        </b-col>
        <b-col md="7">
          <span>240 leal</span>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col md="5">
          <span class="head">Direccion LEAL:</span>
        </b-col>
        <b-col md="7">
          <span> 1ST5CD6DF36FS66FA52DSDD52</span>
        </b-col>
      </b-row>
      <div class="mt-5 mb-4 text-center">
        <button @click="$emit('modal-delete')" class="common sm-btn-c">
          PROCESAR
        </button>
        <button @click="$emit('modal-delete')" class="ms-3 common sm-btn-c">
          NEGAR
        </button>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'
</script>
