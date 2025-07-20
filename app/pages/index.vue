<script setup lang="ts">
import Header from '~/composable/Header.vue';
import College from '~/composable/College/index.vue';
import Accordion from '~/composable/College/Accordion/index.vue';
</script>

<template>
    <div class="bg-gray-100 min-h-screen">
        <Header />
        <div>
            <div class="flex mt-10 px-4 flex-col items-center justify-center ">
                <div class="max-w-xl w-full">
                    <College />
                    <Accordion />
                </div>
            </div>
        </div>
    </div>
</template>
