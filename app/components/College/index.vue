<script setup lang="ts">
import Modal from './Modal/index.vue'
import { ref, onMounted } from 'vue'
import { lyceeList, initializeLyceeList } from '~/composable/lyceeData'

const lyceeData : any = ref(null)
const isLoading = ref(true)

onMounted(() => {
  initializeLyceeList()

  setTimeout(() => {
    const saved = localStorage.getItem('selectedLycee')
    if (saved) {
      try {
        lyceeData.value = JSON.parse(saved)
      } catch {
        lyceeData.value = { ...lyceeList.value[0] }
      }
    } else {
      lyceeData.value = { ...lyceeList.value[0] }
    }

    isLoading.value = false
  }, 3000) // 3 seconds
})

const updateLycee = (data: { lycee: string; town: string; status: string }) => {
  lyceeData.value = {
    name: data.lycee,
    town: data.town,
    status: data.status
  }
  localStorage.setItem('selectedLycee', JSON.stringify(lyceeData.value))
}
</script>

<template>
  <div
    class="w-full py-4 px-4 rounded-3xl"
    :style="{ background: 'linear-gradient(to right, #FFF5F5, #FFDAB9 40%, #DDA0DD)' }"
  >
    <div class="px-4 w-full">
      <div v-if="isLoading" class="animate-pulse space-y-4">
        <div class="h-6 w-1/3 bg-white/50 rounded"></div>
        <div class="h-4 w-1/2 bg-white/30 rounded"></div>
      </div>

      <div v-else class="flex justify-between items-center">
        <div class="flex flex-col text-white">
          <h1 class="text-xl font-semibold">{{ lyceeData.name }}</h1>
          <div class="mt-2 flex space-x-4">
            <div class="flex space-x-1 items-center">
              <UIcon name="i-lucide-map-pin" class="size-4" />
              <span class="text-sm">{{ lyceeData.town }}</span>
            </div>
            <div class="flex space-x-1 items-center">
              <UIcon name="i-lucide-building" class="size-4" />
              <span class="text-sm">{{ lyceeData.status }}</span>
            </div>
          </div>
        </div>
        <Modal @updateLycee="updateLycee" />
      </div>
    </div>
  </div>
</template>
