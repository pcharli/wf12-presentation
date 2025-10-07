<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { order } from "../stores/order";

const router = useRouter();
const drawing = ref(false);
const drawnGroupName = ref("");
const buttonRef = ref(null)

// Clés internes pour l'ordre logique
const groupKeys = ["groupe1", "groupe2"];
const groupLabels = {
  groupe1: "Équipe Alpha",
  groupe2: "Équipe Beta",
};

function startDraw() {
  drawing.value = true;

  setTimeout(() => {
    const first = groupKeys[Math.floor(Math.random() * groupKeys.length)];
    const second = groupKeys.find((g) => g !== first);
    order.set(first, second);

    drawnGroupName.value = groupLabels[first];

    // Après animation, redirection vers /groupe/0
    setTimeout(() => {
      router.push("/groupe/0");
    }, 2000);
  }, 1500);
}

// 👉 Met le focus sur le bouton dès le montage
onMounted(() => {
  buttonRef.value?.focus()
})
</script>

<template>
  <div class="intro">
    <img
      src="@/assets/charleroi.svg"
      alt="Une ville"
      class="charleroi-image animate__animated animate__fadeIn"
    />
    <h1 class="animate__animated animate__fadeInDown">
      Développeurs Front-End : présentation 2025
    </h1>
    <div class="animated-lines">
    <div class="cols">
      <p class="animate__animated animate__fadeInUp animate__delay-1s">
        Deux équipes.
      </p>
      <p class="animate__animated animate__fadeInUp animate__delay-2s">
        Une mission.
      </p>
      <p class="animate__animated animate__fadeInUp animate__delay-3s">
        Redécouvrir des lieux à travers le numérique.
      </p>
      </div>
    
    <div class="animate__animated animate__fadeInUp animate__delay-4s">
      <h2>Qui commence ?</h2>

      <div v-if="!drawing">
        <button
          @click="startDraw"
          class="animate__animated animate__zoomIn animate__delay-2s"
          ref="buttonRef"
        >
          On tire au sort ?
        </button>
      </div>

      <div v-else class="picker animate__animated animate__tada">
        <p>Roulette...</p>
        <h2>{{ drawnGroupName }}</h2>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.picker {
  font-size: 1.5rem;
  margin-top: 2rem;
}
.charleroi-image {
  width: 80%;
  max-width: 800px;
  margin: 2rem auto;
  display: block;
}
.intro {
  text-align: center;
  padding: 2rem;
}
.cols {
  display: flex;
  justify-content: center;
}
.cols p {
  margin-right: 2rem;
}
</style>
