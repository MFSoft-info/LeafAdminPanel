<template>
  <div>
    <div class="headling">
      <h2>Comisión que dan los negocios</h2>
    </div>

    <div class="commissions-wrapper">
      <div class="ranking-box" v-for="(commissions, i) in commissions" :key="i">
        <input :value="commissions" class="box" />
      </div>
      <button @click="addField" class="button box">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const commissions = ref(['14%', '12%', '10%', '8%', '6%', '4%'])

function addField() {
  commissions.value.push('')
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
