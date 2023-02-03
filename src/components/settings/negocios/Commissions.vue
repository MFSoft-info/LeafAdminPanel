<template>
  <div>
    <div class="headling">
      <h2>Comisión que dan los negocios</h2>
    </div>

    <div class="commissions-wrapper">
      <div class="ranking-box" v-for="(commissions, i) in dataa.commission_businesses_gift" :key="i">
        <input :value="commissions" class="box" @input="(e) => handleNewCommission(e, i)" />
      </div>
      <!-- <div class="ranking-box" v-for="(value, i) in commission_businesses_gift" :key="i">
        <input :value="value" class="box" 
          @input="(e) => handleNewCommission(e, i)"
        />
      </div> -->
      <button @click="addField()" class="button box">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// const commissions = ref(['14%', '12%', '10%', '8%', '6%', '4%'])

// function addField() {
//   this.commission_businesses_gift.push('')
// }
</script>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Commissions',
  props: ['dataa'],
  data: function () {
    return {
      commission_businesses_gift: []
    }
  },
  computed: {},
  methods: {
    addField() {
      this.dataa.commission_businesses_gift.push('')
    },
    handleNewCommission(e, i) {
      this.dataa.commission_businesses_gift[i] = e.target.value;
    },
  },
}
</script>

<style scoped lang="scss">
.commissions-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  .box {
    width: 120px;
  }

  .button {
    width: 80px;
  }
}
</style>
