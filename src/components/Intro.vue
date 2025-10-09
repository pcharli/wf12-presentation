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
    
    
    <div class="animate__animated animate__fadeInUp animate__delay-1s">
      <h2>Qui commence ?</h2>

      <div v-if="!drawing">
        <button
          @click="startDraw"
          class="animate__animated animate__zoomIn animate__delay-3s"
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

</style>
