<template>
  <Backdrop>
    <div class="modal-wrapper modal-centered">
      <div class="w-100 text-center">
        <p class="my-4">¿Estás seguro que quieres aprobar a este negocio?</p>
      </div>
      <div class="d-flex justify-content-around mb-4">
        <button @click="$emit('close', true)" class="sign-in-button green">
          Si
        </button>
        <button @click="$emit('close')" class="sign-in-button red">No</button>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'
</script>
