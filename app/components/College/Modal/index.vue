<script setup lang="ts">
import { ref } from 'vue'
import { lyceeList } from '~/composable/lyceeData'

const isOpen = ref(false)

const emit = defineEmits(['updateLycee'])

const handleLyceeSelection = (lycee: { name: string; town: string; status: string }) => {
  emit('updateLycee', {
    lycee: lycee.name,
    town: lycee.town,
    status: lycee.status
  })
  isOpen.value = false
}
</script>

<template>
  <UModal :open="isOpen" @close="isOpen = false">
    <UButton class="text-gray-900 bg-white rounded-full" label="Modifier" color="neutral" variant="subtle" @click="isOpen = true" />
    <template #content>
      <div class="p-6 bg-white rounded-lg shadow-lg max-h-[70vh] overflow-y-auto">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">Choisir un Lycée</h2>
        <ul class="space-y-2">
          <li
            v-for="lycee in lyceeList"
            :key="lycee.name"
            class="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition duration-200"
            @click="handleLyceeSelection(lycee)"
          >
            <div class="text-gray-900">{{ lycee.name }}</div>
            <div class="text-sm text-gray-600">{{ lycee.town }} - {{ lycee.status }}</div>
          </li>
        </ul>
      </div>
    </template>
  </UModal>
</template>
