<template>
  <Backdrop @click="$emit('close')">
    <div @click.stop class="modal-wrapper modal-centered">
      <div class="w-100 text-center">
        <p class="my-4 fs-5">¿Estás seguro que quieres hacer cambios?.</p>
      </div>
      <div class="d-flex justify-content-around mb-4">
        <button @click="$emit('confirm')" class="sign-in-button green">
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
