<template>
  <Backdrop @click="$emit('close')">
    <div @click.stop class="modal-wrapper modal-centered">
      <div class="w-100 text-center">
        <p class="my-4">¿Estás seguro que quieres eliminar a este usuario?.</p>
      </div>
      <div class="d-flex justify-content-around mb-4">
        <button class="sign-in-button green" @click="$emit('delete')">
          Si
        </button>
        <button class="sign-in-button red" @click="$emit('close')">No</button>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'

const emit = defineEmits(['close', 'delete'])
</script>
