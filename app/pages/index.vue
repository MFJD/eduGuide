<script setup lang="ts">
import Header from '~/components/Header.vue';
import College from '~/components/College/index.vue';
import Accordion from '~/components/College/Accordion/index.vue';
import Result from '~/components/result/index.vue';

const showResult = ref(false)

const handleConfirmed = () => {
  showResult.value = true
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <Header />
    <div class="flex mt-10 px-4 flex-col items-center justify-center">
      <div class="max-w-xl w-full">
        <template v-if="!showResult">
          <College />
          <Accordion @confirmed="handleConfirmed" />
        </template>
        <template v-else>
          <Result />
        </template>
      </div>
    </div>
  </div>
</template>