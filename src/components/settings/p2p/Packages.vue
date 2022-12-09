<template>
  <b-row class="mb-5">
    <b-col md="6">
      <div class="mt-2 mb-2">
        <span class="cong-span-heading">Paquetes</span>
      </div>
      <div class="m-p2p" v-for="(pack, i) in dataa.packages" :key="i">
        <input
          v-model="pack.available_packages"
          type="text"
          class="btn btn-outline-primary me-2 mt-2"
        />
        <!-- <button v-if="dataa.packages.length == i+1"
          class="btn btn-outline-primary me-2 mt-2"
          @click="addPackageField"
        >
          + 
        </button> -->
      </div>
    </b-col>
    <b-col md="6">
      <div class="mt-2 mb-2">
        <span class="cong-span-heading"
          >Numero de usuarios para liberar los paquetes</span
        >
      </div>
      <div class="m-p2p" v-for="(userPack, i) in dataa.packages" :key="i">
        <input
          v-model="userPack.usdt_quantity"
          type="text"
          class="btn btn-outline-primary me-2 mt-2"
        />
        <button
          v-if="dataa.packages.length == i + 1"
          class="btn btn-outline-primary me-2 mt-2"
          @click="addUserPackageField"
        >
          +
        </button>
      </div>
      <b-row>
        <div class="d-flex justify-content-end mb-4 mx-4">
          <button
            class="btn btn-primary"
            @click="submitp2p"
            style="margin-right: 30px; margin-top: 40px"
          >
            Guardar cambios
          </button>
        </div>
      </b-row>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from 'vue'

// Temporaly arrays, this data comes from API
// const packs = ref([
//   '10',
//   '20',
//   '40',
//   '100',
//   '140',
//   '200',
//   '240',
//   '280',
//   '320',
//   '360',
//   '400',
//   '600',
//   '700',
//   '800',
//   '900',
//   '1000',
// ])

// const userPacks = ref([
//   '10',
//   '20',
//   '40',
//   '100',
//   '140',
//   '200',
//   '240',
//   '280',
//   '320',
//   '360',
//   '400',
//   '600',
//   '700',
//   '800',
//   '900',
//   '1000',
// ])

// function addPackageField() {
//  packages.value.push('')
// }

// function addUserPackageField() {
//   dataa.packages.push('')
// }
</script>
<script>
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex'
export default {
  name: 'Packages',
  props: ['dataa'],
  data: function () {},
  computed: {},
  methods: {
    //  addPackageField() {
    //     this.dataa.packages.push('')
    //   },
    addUserPackageField() {
      this.dataa.packages.push('')
    },
    submitp2p() {
      const data = JSON.stringify({
        new_amount: this.dataa.wthdrawal_sell_minimun_amount,
      })
      this.$store
        .dispatch('updateSellWithdrawalMinAmount', data)
        .then((response) => {
          // if (response.content) {
          //   // this.data.value = response.content
          // }
          if (response.status == true) {
            Swal.fire({
              title: 'Success!',
              text: 'Successfully updated',
              icon: 'success',
            })
          } else {
            Swal.fire({
              title: 'Error!',
              text: response.content,
              icon: 'error',
            })
          }
        })
      const dataa = JSON.stringify({
        new_time: this.dataa.sending_time_hash_seconds,
      })
      this.$store.dispatch('updateSendingTimeHash', dataa).then((response) => {
        // if (response.content) {
        //   // this.data.value = response.content
        // }
        if (response.status == true) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully updated',
            icon: 'success',
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: response.content,
            icon: 'error',
          })
        }
      })
      const payload = JSON.stringify({
        new_stop: this.dataa.not_available_earnings_stop,
      })
      this.$store.dispatch('updateEarningsStop', payload).then((response) => {
        // if (response.content) {
        //   // this.data.value = response.content
        // }
        if (response.status == true) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully updated',
            icon: 'success',
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: response.content,
            icon: 'error',
          })
        }
      })
      const ruleList = JSON.stringify({
        new_list: this.dataa.rules_commissions,
      })
      this.$store
        .dispatch('updateCommissionRule', ruleList)
        .then((response) => {
          // if (response.content) {
          //   // this.data.value = response.content
          // }
          if (response.status == true) {
            Swal.fire({
              title: 'Success!',
              text: 'Successfully updated',
              icon: 'success',
            })
          } else {
            Swal.fire({
              title: 'Error!',
              text: response.content,
              icon: 'error',
            })
          }
        })
      const rulesAds = JSON.stringify({
        new_list: this.dataa.rules_ads,
      })
      this.$store.dispatch('updateRulesAds', rulesAds).then((response) => {
        // if (response.content) {
        //   // this.data.value = response.content
        // }
        if (response.status == true) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully updated',
            icon: 'success',
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: response.content,
            icon: 'error',
          })
        }
      })
    },
  },
}
</script>

