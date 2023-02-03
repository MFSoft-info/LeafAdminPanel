<template>
  <div>
    <div class="mt-5 mb-2">
      <div class="headling">
        <h2>Ganancias por nivel y cashback</h2>
      </div>
    </div>
    <div class="d-inline-flex flex-wrap">
      <div class="m-p2p">
        <span class="d-block span-psp">Para el consumidor</span>
        <input v-model="data.cashback_for_customer" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">Para leals</span>
        <input v-model="data.leals_cashback" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="d-flex">
        <div class="m-p2p" v-for="(earn, i) in data.earnings_by_level" :key="i">
          <span class="d-block span-psp">n {{ earn.level }}</span>
          <input v-model="earn.percentage_earnings" class="btn btn-outline-primary mb-4" />
        </div>
      </div>
    </div>

    <Commissions :dataa="data" />

    <BusinessTypes :dataa="data" />

    <BusinessCategories :dataa="data" />

    <BusinessRanking :dataa="data" />

    <MaximunAllowed :dataa="data" />

    <div class="d-flex justify-content-end mb-4 mx-4">
      <button
        class="btn btn-primary"
        style="margin-right: 30px; margin-top: 40px"
        @click="submitBusinessesConfig"
      >
        Guardar cambios
      </button>
    </div>
  </div>
</template>

<script setup>
import BusinessRanking from './BusinessRanking.vue'
import BusinessTypes from './BusinessTypes.vue'
import BusinessCategories from './BusinessCategories.vue'
import MaximunAllowed from './MaximunAllowed.vue'
import Commissions from './Commissions.vue'

import { ref } from 'vue'

// const businessTypes = ref([
//   {
//     name: 'Local',
//     categories: ['Peluquería', 'Barbería'],
//   },
//   {
//     name: 'Profesional',
//     categories: ['', ''],
//   },
//   {
//     name: 'Freelancers',
//     categories: ['', ''],
//   },
//   {
//     name: 'Mobility',
//     categories: ['', ''],
//   },
//   {
//     name: 'Buy/sell',
//     categories: ['', ''],
//   },
// ])
</script>

<script>
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex'
export default {
  name: 'Businesses Config',
  props: ['data'],
  computed: {},
  methods: {
    submitBusinessesConfig() { 
      console.log(this.data);
      this.data.businesses_types_categories =  this.data.businesses_types_categories.filter (i =>{
        if(i.isNew){
          delete i.isNew;
          return i;
        }
        return i;
      } );
      const data = JSON.stringify({
        cashback_for_customer: this.data.cashback_for_customer,
        leals_cashback: this.data.leals_cashback,
        earnings_by_level: this.data.earnings_by_level,
        commission_businesses_gift: this.data.commission_businesses_gift,
        businesses_types_categories: this.data.businesses_types_categories,
        businesses_rating: this.data.businesses_rating,
      })
      this.$store.dispatch('updateBusinessesConfig', data).then((response) => {
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

<style lang="scss">
.box {
  border: 1px solid #031f4b;
  border-radius: 4px;
  background-color: rgba(140, 207, 238, 0.13);
  padding: 0.8rem;
  text-align: center;
  color: #031f4b;
  font-weight: 600;
  outline: none;
}
</style>

