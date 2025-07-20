
<script setup lang="ts">
import Modal from '~/composable/College/Modal/index.vue';
import { ref, onMounted } from 'vue';
import { lyceeList, initializeLyceeList } from '~/composable/lyceeData';

// Reactive state for lycée data
const lyceeData = ref({
  name: "",
  town: "",
  status: ""
});

// Initialize with the first lycée from the list
onMounted(() => {
  initializeLyceeList(); // Ensure random data is set
  lyceeData.value = { ...lyceeData.value, ...lyceeList[0] }; // Set initial value
  console.log("Initial lyceeData:", lyceeData.value); // Debug log
});

// Update lycée data when modal emits
const updateLycee = (data: { lycee: string; town: string; status: string }) => {
  lyceeData.value.name = data.lycee; // Update name
  lyceeData.value.town = data.town;  // Update town
  lyceeData.value.status = data.status; // Update status
  console.log("Updated lyceeData:", lyceeData.value); // Debug log
};
</script>

<template>
  <div class="w-full py-2 px-2 rounded-3xl" :style="{ background: 'linear-gradient(to right, #FFF5F5, #FFDAB9 40%, #DDA0DD)' }">
    <div class="flex px-4 w-full justify-between items-center">
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
      <div>
        <Modal @updateLycee="updateLycee" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* No additional styles needed */
</style>