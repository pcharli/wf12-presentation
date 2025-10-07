<template>
  <div class="draw">
    <h2>Tirage au sort</h2>
    <p v-if="winner">L'équipe qui commence est : <strong>{{ winner }}</strong></p>
    <button @click="drawWinner" v-if="!winner">Tirer au sort</button>
    <router-link v-if="winner" :to="'/groupe1'">
      <button>Continuer</button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const groups = ['Équipe Alpha', 'Équipe Beta']
const winner = ref(null)

function drawWinner() {
  const index = Math.floor(Math.random() * groups.length)
  winner.value = groups[index]
}
</script>

<style scoped>
.draw {
  text-align: center;
}
</style>