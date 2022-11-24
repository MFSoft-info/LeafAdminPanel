<template>
  <Backdrop @click="$emit('close')">
    <div @click.stop class="modal-wrapper modal-centered">
      <div class="d-flex justify-content-end">
        <div @click="$emit('close')" class="pointer">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <h4 class="heading-users m-0">QUITAR SALDO</h4>
      <div class="mb-3">
        <label class="form-label text-left fs-14">Seleccionar usuario(s)</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Todos</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label text-left fs-14">Monto</label>
        <input type="number" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label text-left fs-14"
          >Motivo de la transaccion</label
        >
        <textarea class="form-control" id="floatingTextarea"></textarea>
      </div>
      <div class="mb-3">
        <button class="common chg">Quitar saldo</button>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'

const emit = defineEmits(['close'])
</script>
