<script setup>
import QrcodeVue from 'qrcode.vue'
import { order } from '../stores/order'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  index: Number
})

const router = useRouter()

const currentGroup = computed(() => order.groups[props.index] || {})
const groupName = computed(() => currentGroup.value.name || '')
const appUrl = computed(() => currentGroup.value.appUrl || '')
const cmsUrl = computed(() => currentGroup.value.cmsUrl || '')
const buttonRef = ref(null)

function goNext() {
  if (props.index === 0) {
    router.push('/groupe/1')
  } else {
    router.push('/conclusion')
  }
}

// 👉 Met le focus sur le bouton dès le montage
onMounted(() => {
  buttonRef.value?.focus()
})
</script>

<template>
  <div class="group-display animate__animated animate__flip">
  <div class="content">
    <h2>{{ groupName }} : Application</h2>
    <div class="qr">
      <qrcode-vue :value="appUrl" :size="200" />
    </div>
    <p><strong>URL :</strong> {{ appUrl || 'à venir' }}</p>
    <hr>
  <div>
    <h2>{{ groupName }} : CMS</h2>
    <div class="qr">
      <qrcode-vue :value="cmsUrl" :size="200" />
    </div>
    <p><strong>URL :</strong> {{ cmsUrl || 'à venir' }}</p>

    <button @click="goNext" ref="buttonRef">Suivant</button>
  </div>
  </div>
  </div>
</template>

<style scoped>
.group-display {
  text-align: center;
  
}
.content {
  
  max-width: 50%;
  margin: auto;
  padding: 1rem;
}
.qr {
  background-color: white;
  padding: .5rem;
  width: 200px;
  margin: auto;
}
</style>