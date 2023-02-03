<template>
  <div class="categories-container">
    <div class="headling">
      <h2>Categorías de negocios</h2>
    </div>

    <div class="categories-wrapper">
      <transition-group name="fade">
        <div class="category-row" v-for="(categories, index) in dataa.businesses_types_categories" :key="index">
          <p class="type-business">{{categories.type}}</p>
          <input
            v-for="(category, i) in categories.categories"
            :key="i"
            type="text"
            class="box"
            :value="category"
            @input="(e) => handleNewCommission(index, e, i)"
          />
          <button @click="addValue(index)" class="box">+</button>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// const props = defineProps({
//   businessTypes: Object
// })

// function addField(index) {
//   console.log(props.businessTypes[index].name)
//   props.businessTypes[index].categories.push('')
// }

</script>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Business Categories',
  props: ['dataa'],
  data: function () {
    return {
      businesses_types_categories: []
    }
  },
  computed: {},
  methods: {
    addValue(index) {
      this.dataa.businesses_types_categories[index].categories.push('')
      console.log(this.dataa.businesses_types_categories[index].categories)
    },
    handleNewCommission(index, e, i) {
      this.dataa.businesses_types_categories[index].categories[i] = e.target.value;
      console.log(e.target.value)
    },
  },
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
