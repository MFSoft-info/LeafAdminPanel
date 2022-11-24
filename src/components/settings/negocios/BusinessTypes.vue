<template>
  <div class="types-container">
    <div class="headling">
      <h2>Tipos de negocios</h2>
    </div>

    <div class="types-wrapper">
      <input
        v-for="(type, i) in businessTypes"
        :key="i"
        type="text"
        :value="type.name"
        class="box"
      />

      <div @dblclick="closeCreateValue" class="new-field" :class="{shake: valueEmpty}">
        <div class="input-wrapper">
          <input
            v-if="createValue"
            type="text"
            class="box"
            ref="inputNewValue"
            v-model="newValue"
            @keyup.enter="saveField"
          />
        </div>
        <button v-if="createValue" @click="saveField" class="button box">
          <i class="fas fa-check"></i>
        </button>
          <p v-if="valueEmpty && createValue">Inserta un valor</p>
      </div>

        <button 
          v-if="!createValue" 
          class="box button" 
          @click="showCreateValue"
        >
          +
        </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'

const props = defineProps({
  businessTypes: Object
})

const createValue = ref(false)
const newValue = ref('')
const inputNewValue = ref(null)
const valueEmpty = ref(false)

defineExpose({ inputNewValue })

watch(newValue, () => {
  if (valueEmpty.value) valueEmpty.value = false
})

function saveField(){
  if (!newValue.value) return valueEmpty.value = true

  props.businessTypes.push({ name:  newValue.value, categories: [''] })

  closeCreateValue()
}

async function showCreateValue() {
  createValue.value = true
  await nextTick()
  inputNewValue.value.focus()
}

function closeCreateValue() {
  if (valueEmpty.value) valueEmpty.value = false
  createValue.value = false
  
  newValue.value = ''
}
</script>

<style scoped lang="scss">
.types-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  // justify-content: center;

  .box {
    width: 160px;

    &.button {
      width: 80px;
    }
  }
}

.new-field {
  display: flex;
  gap: 10px;
  position: relative;
  justify-content: center;

  p {
    position: absolute;
    top: calc(100% + 5px);
    font-style: italic;
  }

  .input-wrapper {
    position: relative;

    .icon-wrapper {
      --ratio: 20px;
      position: absolute;
      top: -6px;
      right: -6px;
      background: #031f4b;
      height: var(--ratio);
      width: var(--ratio);
      border-radius: 50%;
      font-size: .9rem;
      color: #fff;

      display: grid;
      place-items: center;
      cursor: pointer;

    }
  }
}
</style>
