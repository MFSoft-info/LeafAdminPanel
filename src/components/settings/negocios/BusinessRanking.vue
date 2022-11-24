<template>
  <div class="business-ranking">
    <div class="headling">
      <h2>Calificación de rangos para los negocios</h2>
      <p>(Cantidad de personas que califican 5 estrellas)</p>
    </div>

    <div class="ranking-wrapper">
      <div
        class="ranking-box"
        v-for="(ranking, i) in rankingCategories"
        :key="i"
      >
        <p>{{ ranking.title }}</p>
        <input :value="ranking.amount" class="box" />
      </div>

      <div @dblclick="closeAddField" class="new-field" v-if="addFieldVisible"
          :class="{shake: newFieldEmpty}"
       >
        <input
          ref="newFieldInput"
          class="form-control"
          type="text"
          v-model="newField"
          @keyup.enter="saveField"
        />
        <input disabled type="text" class="box" />
          <p v-if="newFieldEmpty && addFieldVisible">Inserta un valor</p>
      </div>

      <button v-if="!addFieldVisible" @click="showAddField" class="button box">
        +
      </button>
      <button v-else @click="saveField" class="button box">
        <i class="fas fa-check"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose, nextTick, watch } from 'vue'

const newField = ref('')
const newFieldInput = ref(null)
const addFieldVisible = ref(false)
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

defineExpose({ newFieldInput })

async function showAddField() {
  addFieldVisible.value = true
  await nextTick()
  newFieldInput.value.focus()
}

watch(newField, () => newFieldEmpty.value = false)

function saveField() {
  if (!newField.value) return newFieldEmpty.value = true

  rankingCategories.value.push({ title: newField.value, amount: '' })

  closeAddField()
}

function closeAddField() {
  if (newFieldEmpty.value) newFieldEmpty.value = false
  addFieldVisible.value = false
  newField.value = ''
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
