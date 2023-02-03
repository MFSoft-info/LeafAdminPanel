<template>
  <div class="mt-5 mb-2">
    <div class="headling">
      <h2>Ganancias por nivel</h2>
    </div>
  </div>
  <div
    class="d-inline-flex flex-wrap"
    v-for="(pack, i) in data.rules_commissions"
    :key="i"
  >
    <div class="m-p2p">
      <span class="d-block span-psp">n {{ pack.level }} </span>
      <input
        v-model="pack.commission"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
  </div>
  <!-- second-->
  <div class="mt-2 mb-2">
    <div class="headling">
      <h2>Mínimo directos requeridos para ganar por nivel</h2>
    </div>
  </div>
  <div
    class="d-inline-flex flex-wrap"
    v-for="(pack, i) in data.rules_commissions"
    :key="i"
  >
    <div class="m-p2p">
      <span class="d-block span-psp">n {{ pack.level }}</span>
      <input
        v-model="pack.expected_children_qty"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
  </div>

  <!--          third-->
  <div class="m-p2p">
    <!-- //////// -->

    <div class="box-wrapper">
      <span class="d-block m-2 span-psp">Ganancia semanal</span>
      <div class="d-flex">
        <div v-for="(pack, i) in data.rules_ads" :key="i">
          <input
            type="text"
            v-model="pack.percentage"
            class="m-2 btn btn-outline-primary mb-4"
          />
        </div>
      </div>
    </div>
    <!-- //////// -->
    <span class="d-block m-2 span-psp">Minimo de anuncios por cada %</span>
    <div class="d-flex">
      <div v-for="(pack, i) in data.rules_ads" :key="i">
        <input
          type="text"
          v-model="pack.ads_quantity"
          class="m-2 btn btn-outline-primary mb-4"
        />
      </div>
    </div>
    <!-- //////// -->

    <span class="d-block m-2 span-psp"
      >nuevos negocios registrados por semana 6%</span
    >
    <div class="d-flex">
      <div v-for="(pack, i) in data.rules_ads" :key="i">
        <input
          v-model="pack.new_businesses"
          type="text"
          class="m-2 btn btn-outline-primary mb-4"
        />
      </div>
    </div>
  </div>
  <!-- //////// -->

  <div class="d-flex flex-wrap">
    <div class="m-p2p">
      <p class="d-block m-2 span-psp">
        Tope de ganancia <span>(no disponible)</span>
      </p>
      <input
        v-model="data.not_available_earnings_stop"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
    <div class="m-p2p">
      <span class="d-block m-2 span-psp">Direcion usdt para penalidad </span>
      <input
        v-model="data.usdt_address_penalty"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
    <div class="m-p2p">
      <span class="d-block m-2 span-psp">Direcion usdt para fee </span>
      <input
        v-model="data.usdt_address_fees"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
  </div>

  <!--          4th-->
  <div class="d-flex flex-wrap">
    <div class="m-p2p">
      <span class="d-block m-2 span-psp">Tiempo de envio hash</span>
      <input
        v-model="data.sending_time_hash_seconds"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
    <div class="m-p2p">
      <span class="d-block m-2 span-psp">Costo de penalidad</span>
      <input
        v-model="data.amount_penalty"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
    <div class="m-p2p">
      <span class="d-block m-2 span-psp">Minimo de retiro </span>
      <input
        v-model="data.withdrawal_minimum_amount"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
    <div class="m-p2p">
      <span class="d-block m-2 span-psp">Mínimo de venta </span>
      <input
        v-model="data.sell_minimum_amount"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
  </div>

  <!--          5th-->
  <!-- //////// -->

  <div class="d-flex flex-wrap">
    <div class="m-p2p">
      <span class="d-block m-2 span-psp">Mínimo de transferencias </span>
      <input
        v-model="data.transfer_minimum_amount"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
    <div class="m-p2p">
      <span class="d-block m-2 span-psp">Comision por venta </span>
      <input
        v-model="data.p2p_sells_fee"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
    <div class="m-p2p">
      <span class="d-block m-2 span-psp">Superacion ventas vs compras </span>
      <input
        v-model="data.sells_vs_buys"
        type="text"
        class="btn btn-outline-primary mb-4"
      />
    </div>
  </div>
  <!-- //////// -->

  <!--          6th-->
  <Packages :dataa="data" />
</template>

<script setup>
import Packages from './Packages.vue'
</script>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'P2P Setting',
  props: ['data'],
  computed: {},
  methods: {
    handleApproveClick(e) {
      this.$store.dispatch('setAdsModalRoute', 'approve')
      this.$emit('show-confirm')
    },
    handleDenyClick(e) {
      this.$store.dispatch('setAdsModalRoute', 'deny')
      this.$emit('show-confirm')
    },
  },
}
</script>

