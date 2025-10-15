<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const step = ref(0)

function handleKey(e) {
  if (e.key === 's' || e.key === 'S') {
    router.push('/intro')
  }
   if (e.key === 'n' || e.key === 'N') {
    step.value++
    if(step.value > 2) {
        router.push('/intro')
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)

  setTimeout( () => {
    step.value++
  },2000)
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

    <div class="bloc1" v-if="step==1">
     <h2>Le pitch</h2>
    <ul class="steps ">
        <li>Des explorateurs urbains</li>
        <li>Des parcours et des étapes</li>
        <li>1 étape = 1 déclencheur, 1 énigme et 1 fragment</li>
        <li>Étape finale = 1 énigme à résoudre avec les fragments</li>
    </ul>
    </div>
    <transition name="fade" mode="out-in">
    <div class="bloc2" v-if="step>1">
    <h2>Les déclencheurs, la résolution des énigmes<br>et la restitution des fragments :</h2>
    <ul class="steps">
        <li>Simples textes</li>
        <li>Puzzles</li>
        <li>Photos, vidéos, sons</li>
        <li>Géolocalisation, accéléromètre,...</li>
        <li>AR/VR</li>
    </ul>
    </div>
    </transition>
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
.steps, h2 {
    text-align: left;
}
</style>
