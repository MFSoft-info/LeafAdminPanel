<template>
  <div class="business-ranking">
    <div class="headling">
      <h2>Calificación de rangos para los negocios</h2>
      <p>(Cantidad de personas que califican 5 estrellas)</p>
    </div>

    <div class="ranking-wrapper">
      <div
        class="ranking-box"
        v-for="(ranking, i) in dataa.businesses_rating"
        :key="i"
      >
        <!-- <p>{{ ranking.name }}</p> -->
        <input
          style="width:130px"
          class="form-control text-center mb-2"
          type="text"
          name="name"
          v-model="ranking.name"
          @keyup.enter="saveField"
        />
        <input v-model="ranking.users_quantity" @keyup.enter="saveField" name="qty" class="box" />
      </div>

      <div
        @dblclick="closeAddField"
        class="new-field"
      >
        <!-- <input
          class="form-control"
          type="text"
          v-model="name"
          @keyup.enter="saveField"
        />
        <input v-model="users_quantity" type="text" class="box" /> -->
        <!-- <p v-if="newFieldEmpty && addFieldVisible">Inserta un valor</p> -->
      </div>

      <button @click="saveField" class="button box">
        +
      </button>
      <!-- <button v-else @click="saveField" class="button box">
        <i class="fas fa-check"></i>
      </button> -->
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose, nextTick, watch } from 'vue'

const newField = ref('')
// const addFieldVisible = ref(false)
const newFieldEmpty = ref(false)
const rankingCategories = ref([
  {
    title: 'Bronce',
    amount: 5,
  },
  {
    title: 'Plata',
    amount: 10,
  },
  {
    title: 'Oro',
    amount: 15,
  },
  {
    title: 'Ruby',
    amount: 20,
  },
  {
    title: 'Esmeralda',
    amount: 25,
  },
  {
    title: 'Diamante',
    amount: 30,
  },
])

// defineExpose({ newFieldInput })

async function showAddField() {
  console.log("calleddd")//
  // addFieldVisible.value = true
  // await nextTick()
  // newFieldInput.value.focus()
}

// watch(newField, () => (newFieldEmpty.value = false))

// function saveField() {
//   if (!newField.value) return (newFieldEmpty.value = true)
//   rankingCategories.value.push({ title: newField.value, amount: '' })
//   closeAddField()
// }

// function closeAddField() {
//   if (newFieldEmpty.value) newFieldEmpty.value = false
//   addFieldVisible.value = false
//   newField.value = ''
// }
</script>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Business Rating',
  props: ['dataa'],
  data: function () {
    return {
      businesses_rating: []
    }
  },
  computed: {},
  methods: {
    saveField() {
      console.log("save fields called")
        // addFieldVisible.value = true
  // await nextTick()
    //   // this.dataa.businesses_rating.push('')
  // addFieldVisible.value = false;

      //  if (!newField.value) return (newFieldEmpty.value = true)
      console.log(this.name)
      console.log(this.users_quantity)
      //   this.dataa.businesses_rating[this.dataa.businesses_rating.length - 1].name = this.name;
      //   this.dataa.businesses_rating[this.dataa.businesses_rating.length - 1].users_quantity = this.users_quantity;
      this.dataa.businesses_rating.push({name: this.name, users_quantity: this.users_quantity})
      console.log(this.dataa.businesses_rating)

    },
    // handleNewCommission(e, i) {
    //   this.dataa.businesses_rating[i] = e.target.value;
    // },
  },
}
</script>


<style scoped lang="scss">
.ranking-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px 10px;
}

.ranking-box {
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
  }

  .box {
    width: 130px;
  }
}

.button {
  height: max-content;
  margin-top: auto;
}

.new-field {
  max-width: 130px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    position: absolute;
    top: calc(100% + 5px);
  }

  input {
    width: 100%;

    &:nth-child(1) {
      height: 20%;
      margin-bottom: 7px;
    }
  }
}
</style>

