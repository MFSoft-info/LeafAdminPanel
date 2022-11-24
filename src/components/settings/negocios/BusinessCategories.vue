<template>
  <div class="categories-container">
    <div class="headling">
      <h2>Categorías de negocios</h2>
    </div>

    <div class="categories-wrapper">
      <transition-group name="fade">
        <div class="category-row" v-for="(business, i) in businessTypes" :key="i">
          <p class="type-business">{{business.name}}</p>
          <input
            v-for="(category, i) in business.categories"
            :key="i"
            type="text"
            class="box"
            :value="category"
          />
          <button @click="addField(i)" class="box">+</button>
        </div>
      </transition-group>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  businessTypes: Object
})

function addField(index) {
  console.log(props.businessTypes[index].name)
  props.businessTypes[index].categories.push('')
}

</script>

<style scoped>
.categories-wrapper {
  display: flex;
  flex-wrap: wrap;
  /*justify-content: center;*/
  gap: 10px;
}
.category-row {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 160px;
  gap: 10px;
}

.type-business {
  margin-top: 10px;
}
</style>
