<template>
  <div class="conclusion animate__animated animate__lightSpeedInRight">
    <h2>Bravo à toutes les équipes !</h2>
    <p>Une belle démonstration de collaboration, de créativité et de passion pour le Web.</p>
    <img src="@/assets/ville2.png" alt="">
    <blockquote>
      "Se réunir est un début, rester ensemble est un progrès,<br>travailler ensemble est la réussite." – Henry Ford
    </blockquote>
  </div>
</template>

<style scoped>
.conclusion {
  text-align: center;
  padding: 2rem;
}
blockquote {
  font-style: italic;
}
img {
  max-height: 500px;
}
</style>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/remerciements')
  }, 10000) // 10 secondes
})
</script>