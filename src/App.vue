<template>
  <div class="app dark-mode app-wrapper">
     <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>
.app {
  background-color: #121212;
  color: #f0f0f0;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
}
/* Transition CSS classique */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.app-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* 🧠 coupe toute animation qui déborde */
  background-color: #121212;
  color: #fff;
}
</style>