<template>
  <b-row class="mb-5">
    <b-col md="12">
      <div class="mt-2 mb-2">
        <span class="cong-span-heading">Paquetes</span>
      </div>
      <div
        class="m-p2p  d-inline-flex  flex-wrap"
        v-for="(pack, i) in packages"
        :key="i"
      >
        <input
          v-model="pack.usdt_quantity"
          type="text"
          class="btn btn-outline-primary me-2 mt-2"
          @input="(e) => handleBank(e, i)"
        />
        <div>
          <button
            class="btn btn-outline-primary me-2 mt-2"
            @click="deletePackage(i)"
          >
            -
          </button>
        </div>
      </div>
      <div
        class="m-p2p d-inline-flex flex-wrap"
        v-for="(pack, i) in newPackages"
        :key="i"
      >
        <input
          v-model="pack.usdt_quantity"
          type="text"
          class="btn btn-outline-primary me-2 mt-2"
          @input="(e) => handleNewBank(e, i)"
        />
      </div>
      <div>
        <button
          class="btn btn-outline-primary me-2 mt-2"
          @click="addUserPackageNewField"
        >
          +
        </button>
      </div>
    </b-col>
    <b-col md="12">
      <!-- <div class="mt-2 mb-2">
        <span class="cong-span-heading"
          >Numero de usuarios para liberar los paquetes</span
        >
      </div> -->
      <!-- <div class="m-p2p" v-for="(userPack, i) in dataa.packages" :key="i">
        <input
          v-model="userPack.users_to_free_package"
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
      </div> -->
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
  data: function () {
    return {
      packages: [],
      newPackages: [],
      deletePackages: [],
      usdt_quantity: ''
    }
  },
  computed: {},
  beforeMount() {
    this.getPackagesList()
  },
  methods: {
    getPackagesList() {
      this.$store.dispatch('getPackagesList').then((response) => {
        if (response.status == true) {
          this.packages = response.content
        }
      })
    },
    addUserPackageNewField() {
      this.newPackages.push({usdt_quantity: ''})
    },
    deletePackage(i) {
      this.deletePackages.push(this.packages[i].package_id)
      if(this.deletePackages.length > 0){
        const deletePackages = JSON.stringify({
          packages_id: this.deletePackages,
        })
        this.$store.dispatch('deletePackage', deletePackages).then((response) => {
          if (response.status == true) {
              Swal.fire({
              title: 'Success!',
              text: 'Successfully updated',
              icon: 'success',
            })
            this.getPackagesList()
          } else {
            Swal.fire({
              title: 'Error!',
              text: response.content,
              icon: 'error',
            })
          }
        })
      }
    },
      
    submitp2p() {
      const data = JSON.stringify({
        withdrawal_minimum_amount: this.dataa.withdrawal_minimum_amount,
        sell_minimum_amount: this.dataa.sell_minimum_amount,
        transfer_minimum_amount: this.dataa.transfer_minimum_amount,
      })
      this.$store.dispatch('updateMinAmount', data).then((response) => {
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

      if(this.newPackages.length > 0){
          this.$store.dispatch('createPackage',{"new_packages": this.newPackages}).then((response) => {
            if (response.status == true) {
              this.newPackages = [];
              this.getPackagesList()
            } else {
              Swal.fire({
                title: 'Error!',
                text: response.content,
                icon: 'error',
              })
            }
          })
      }

      let updatedPackage = this.packages.filter(
        (item) => item.isChanged == true
      )
      updatedPackage = updatedPackage.map((item) => {
        return {
          id_package: item.package_id,
          usdt_quantity: item.usdt_quantity,
          users_to_free_package: item.users_to_free_package,
        }
      })

      const packages = JSON.stringify({
        new_list: updatedPackage,
      })
      this.$store.dispatch('updatePackages', packages).then((response) => {
        if (response.status == false) {
          Swal.fire({
            title: 'Error!',
            text: response.content,
            icon: 'error',
          })
        }
      })

     
      
      const sellVsBuys = JSON.stringify({
        new_amount: this.dataa.sells_vs_buys,
      })
      this.$store.dispatch('updateSellsVsBuys', sellVsBuys).then((response) => {
        if (response.status == false) {
          Swal.fire({
            title: 'Error!',
            text: response.content,
            icon: 'error',
          })
        }
      })

      const P2PSellsFee = JSON.stringify({
        p2p_sells_fee: this.dataa.p2p_sells_fee,
        usdt_address_penalty: this.dataa.usdt_address_penalty,
        amount_penalty: this.dataa.amount_penalty,
        usdt_address_fees: this.dataa.usdt_address_fees
      })
      this.$store.dispatch('updateP2PSellsFee', P2PSellsFee).then((response) => {
        if (response.status == false) {
          Swal.fire({
            title: 'Error!',
            text: response.content,
            icon: 'error',
          })
        }
      })
    },
    handleBank(e, i) {
      this.packages[i].isChanged = true
    },
    handleNewBank(e, i) {
      this.newPackages[i].usdt_quantity = e.target.value;
    },
  },
}
</script>

