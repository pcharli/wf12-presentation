<template>
  <div class="thanks animate__animated animate__fadeIn">
    <h1>Merci 🙏</h1>
    <div class="cols">
    <div class="col col1">
    <img src="@/assets/ville3.png" alt="">
    </div>
    <div class="col col2">
    <ul>
      <li class="visitors">
      <h2>Nos visiteurs</h2>
      <div class="content">
        <img src="@/assets/odoo.png" alt="Odoo">&nbsp;
        <!--<img src="@/assets/e-net.svg" alt="e-net.">-->
        <img src="@/assets/lieu.png" alt="Etat des lieux">
         </div>
      </li>
      <li><h2>Les stagiaires et formateurs</h2></li>
      <li class="content"><img src="@/assets/cepegra.png" alt=""></li>
    </ul>
    </div>
    </div>
    
    <p class="finale">À bientôt pour de nouvelles aventures !</p>
  </div>
</template>

<style scoped>
.thanks {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
}
.cols {
    display: flex;
    margin: auto;
    width: 50%;
}
.col {
    width: 50%;
}
.col2 {
    text-align: left;
}
img {
    max-width: 90%;
}
.finale {
    margin-top: 2rem;
    font-size: 2rem;
}
.content img {
    height: 50px;
     background-color: white;
    padding: 1rem;
}

</style>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleKey(e) {
  if (e.key === 'r' || e.key === 'R') {
    router.push('/')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>
