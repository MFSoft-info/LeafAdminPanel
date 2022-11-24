<template>
  <Backdrop @click="$emit('close')">
    <div @click.stop class="modal-wrapper">
      <div class="d-flex justify-content-end">
        <div @click="$emit('close')" class="pointer">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Nombre completo</label>
          <input
            type="text"
            class="form-control"
            placeholder="Alfredo zevallos"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Nombre de usuario</label>
          <input type="text" class="form-control" placeholder="Equipeolite" />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Correo</label>
          <input
            type="email"
            class="form-control"
            placeholder="alfredo@gmail.com"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Busd direccion</label>
          <input
            type="text"
            class="form-control"
            placeholder="1xv737df663vesc5zx55"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Métodos de pago</label>
          <input type="text" class="form-control" placeholder="Usdt address" />
          <input
            type="text"
            class="form-control mt-2"
            placeholder="Laeal address"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">País</label>
          <input type="text" class="form-control" placeholder="Peru" />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14">Teléfono</label>
          <input
            class="form-control"
            type="tel"
            pattern="[+]{1}[0-9]{11,14}"
            placeholder="921141833"
          />
        </div>
        <div class="mb-3">
          <label class="form-label text-left fs-14"
            >Descripción de perfil</label
          >
          <textarea class="form-control" id="floatingTextarea"></textarea>
        </div>
        <div class="mb-3 d-inline-flex align-items-center">
          <span class="fs-14">Hacer admin a este usuario:</span>
          <div class="form-check ms-2">
            <input
              class="form-check-input custom-checkbox float-right"
              type="checkbox"
              value=""
            />
          </div>
        </div>
        <div class="mb-3">
          <b-row>
            <b-col md="3">
              <span class="fs-14">Paquete: </span
              ><strong class="fs-14">50</strong>
            </b-col>
            <b-col md="5">
              <span class="fs-14">Total compras p2p: </span
              ><strong class="fs-14">15</strong>
            </b-col>
            <b-col md="4">
              <span class="fs-14">Total ventas p2p: </span
              ><strong class="fs-14">20</strong>
            </b-col>
          </b-row>
        </div>
        <div class="mb-3">
          <b-row>
            <b-col md="5">
              <span class="fs-14">Disponible wallet: </span
              ><strong class="fs-14">230</strong>
            </b-col>
            <b-col md="5">
              <span class="fs-14">No disponible wallet: </span
              ><strong class="fs-14">230</strong>
            </b-col>
          </b-row>
        </div>
        <div class="mb-3">
          <b-row>
            <b-col md="5">
              <span class="fs-14">Total negocios: </span
              ><strong class="fs-14">4</strong>
            </b-col>
            <b-col md="5">
              <span class="fs-14">Balance wallet scrow: </span
              ><strong class="fs-14">230</strong>
            </b-col>
          </b-row>
        </div>
        <div class="mb-3">
          <span class="fs-14 d-block"
            >Bloquear los botones de compra y venta a este usuario:
          </span>
          <button class="common chw mt-2">blocked</button>
        </div>
        <div class="mb-3">
          <span class="fs-14 d-block">Reenviar correo: </span>
          <button class="common chw mt-2">Resend email</button>
        </div>

        <div class="mb-3">
          <button class="common chg" @click="save">GUARDAR</button>
        </div>
      </div>
    </div>
  </Backdrop>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue'

const emit = defineEmits(['close'])

// Use it when api data is available
function save() {
  // emit('close')
}
</script>

<style scoped>
.modal-wrapper {
  margin: 1.75rem auto;
}
</style>
