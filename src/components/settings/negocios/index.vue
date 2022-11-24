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
        <input value="30%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">Para leals</span>
        <input value="20%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n1</span>
        <input value="20%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n2</span>
        <input value="8%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n3</span>
        <input value="6%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n4</span>
        <input value="4%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n5</span>
        <input value="2%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n6</span>
        <input value="2%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n7</span>
        <input value="2%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n8</span>
        <input value="2%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n9</span>
        <input value="2%" class="btn btn-outline-primary mb-4" />
      </div>
      <div class="m-p2p">
        <span class="d-block span-psp">n10</span>
        <input value="2%" class="btn btn-outline-primary mb-4" />
      </div>
    </div>

    <Commissions />

    <BusinessTypes :businessTypes="businessTypes"/>

    <BusinessCategories :businessTypes="businessTypes"/>

    <BusinessRanking />

    <MaximunAllowed />
  </div>
</template>

<script setup>
import BusinessRanking from './BusinessRanking.vue'
import BusinessTypes from './BusinessTypes.vue'
import BusinessCategories from './BusinessCategories.vue'
import MaximunAllowed from './MaximunAllowed.vue'
import Commissions from './Commissions.vue'


import { ref } from 'vue'

const businessTypes = ref([
  {
    name: 'Local',
    categories: ['Peluquería', 'Barbería']
  },
  {
    name: 'Profesional',
    categories: ['', '']
  },
  {
    name: 'Freelancers',
    categories: ['', '']
  },
  {
    name: 'Mobility',
    categories: ['', '']
  },
    {
    name: 'Buy/sell',
    categories: ['', '']
  },
])
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
