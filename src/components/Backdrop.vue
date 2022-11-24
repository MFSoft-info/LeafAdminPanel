<template>
  <transition name="fade" appear>
    <div class="backdrop-custom">
      <slot></slot>
    </div>
  </transition>
</template>

<style>
.backdrop-custom {
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: 9999;

  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
