<template>
  <div class="app-wrapper">
    <div class="page-wrapper" v-if="!isLog">
      <Sidebar />
      <Header />
      <!--     with baseLayout router-->
      <div class="content-wrapper">
        <router-view />
      </div>
    </div>
    <!--     without baseLayout router-->
    <div id="app" v-else>
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      isLog: false,
    }
  },

  // Use mounted hook to manipulate the base layout & login screens on page load
  mounted() {
    this.$route.name === 'Login' ? (this.isLog = true) : (this.isLog = false)
  },

  // Use route watch hook to manipulate the base layout & login screens
  watch: {
    $route: {
      immediate: true,
      handler(newValue) {
        newValue.name === 'Login' ? (this.isLog = true) : (this.isLog = false)
      },
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

:root {
  --bg-shadow--: 0 0.5rem 1rem rgb(0 0 0 / 15%);
}

#app {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
}

.modal-wrapper {
  padding: 1em;
  width: min(90%, 500px);
  background: var(--bs-white);
}

.modal-wrapper.modal-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*width: initial;*/
}

.app-wrapper {
  width: 100%;
}

.content-wrapper {
  padding: 30px;
  margin: 64px 0 0 260px;
  width: 100%;
  height: calc(100vh - 64px);
  overflow-y: scroll;
}

.page-wrapper {
  display: flex;
  align-items: flex-start;

  /*background-color: #f6f9fc;*/
  background-color: #f8f9fa;
  width: 100%;
}

.sign-in-button {
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  margin-top: 50px;
  width: 120px;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
}

.green {
  background-color: $green-text;
  border: 1px solid $green-text;
}

.red {
  background-color: $red;
  border: 1px solid $red;
}

body {
  margin: unset;
  height: 100vh;
}

* {
  box-sizing: border-box;
}

.card-header {
  background-color: #ffffff !important;
  border: unset !important;
  border-radius: 1rem !important;
  padding-left: unset !important;
}
.card {
  box-shadow: var(--bg-shadow--);
  border: unset !important;
  border-radius: 1rem !important;
}
.tabs {
  border-radius: 1rem !important;
  padding: 20px;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  border: 1px solid #031f4b !important;
  color: #031f4b;
  font-weight: 600;
  transition: 0.2s ease-in;
  text-align: center;
  font-size: 16px;
  border-radius: 8px;
}
.nav-link {
  color: #031f4b !important;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.shake {
  animation: shake .7s;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
