<template>
  <div class="stats-wrapper">
    <h2>{{ title }}</h2>
    <div class="stats">
      <!-- Content may change depending on API data -->
      <div class="stat" v-for="(stat, i) in stats" :key="i">
        <p>{{ stat.name }}</p>
        <p>{{ stat.amount }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  stats: Array,
})
</script>

<style scoped>
h2 {
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.stats {
  border-radius: 4px;
  background: var(--bs-white);
  display: flex;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  padding: 10px 15px;
  /* mobile screen */
  flex-wrap: wrap;
  justify-content: center;
}

.stat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
}

p:nth-child(2) {
  font-weight: 600;
  color: #323c43;
}
</style>
