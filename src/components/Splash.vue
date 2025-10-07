<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleKey(e) {
  if (e.key === 's' || e.key === 'S') {
    router.push('/intro')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>

<template>
  <div class="splash-screen animate__animated animate__fadeIn">
  <img src="@/assets/cepegra.png" alt="" class="cepegra">
    <img src="@/assets/charleroi.svg" alt="Logo" class="splash-image" />
    <h1>Parcours urbains interactifs</h1>
    <p class="hint">Appuyez sur "S" pour commencer</p>
  </div>
</template>

<style scoped>
.splash-screen {
  height: 100vh;
  width: 100vw;
  background-color: #121212;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.splash-image {
  max-width: 400px;
  margin-bottom: 2rem;
}
.hint {
  margin-top: 1rem;
  font-style: italic;
  opacity: 0.7;
}
.cepegra {
    height: 50px;
    background-color: white;
    padding: 1rem;
    position: absolute;
    right:150px;
    bottom:150px;
}
</style>
