<template>
  <div class="stats-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.stats-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 60px;
  width: 100%;
  gap: 40px 10px;
}
</style>
