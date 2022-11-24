<template>
  <b-row class="mb-5">
    <b-col md="6">
      <div class="mt-2 mb-2">
        <span class="cong-span-heading">Paquetes</span>
      </div>
      <div class="m-p2p">
        <input
          v-for="(pack, i) in packs"
          :key="i"
          type="text"
          :value="pack"
          class="btn btn-outline-primary me-2 mt-2"
        />
        <button
          class="btn btn-outline-primary me-2 mt-2"
          @click="addPackageField"
        >
          +
        </button>
      </div>
    </b-col>
    <b-col md="6">
      <div class="mt-2 mb-2">
        <span class="cong-span-heading"
          >Numero de usuarios para liberar los paquetes</span
        >
      </div>
      <div class="m-p2p">
        <input
          v-for="(userPack, i) in userPacks"
          :key="i"
          type="text"
          :value="userPack"
          class="btn btn-outline-primary me-2 mt-2"
        />
        <button
          class="btn btn-outline-primary me-2 mt-2"
          @click="addUserPackageField"
        >
          +
        </button>
      </div>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from 'vue'

// Temporaly arrays, this data comes from API
const packs = ref([
  '10',
  '20',
  '40',
  '100',
  '140',
  '200',
  '240',
  '280',
  '320',
  '360',
  '400',
  '600',
  '700',
  '800',
  '900',
  '1000',
])

const userPacks = ref([
  '10',
  '20',
  '40',
  '100',
  '140',
  '200',
  '240',
  '280',
  '320',
  '360',
  '400',
  '600',
  '700',
  '800',
  '900',
  '1000',
])

function addPackageField() {
  packs.value.push('')
}

function addUserPackageField() {
  userPacks.value.push('')
}
</script>
