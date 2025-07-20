<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">Mes chances</h2>
            <span class="font-semibold flex items-center" :class="{
                'text-green-600': filledSteps === 5,
                'text-blue-600': filledSteps === 4,
                'text-yellow-600': filledSteps === 3,
                'text-orange-600': filledSteps === 2,
                'text-red-600': filledSteps <= 1,
            }">
                {{ statusText }}
            </span>
        </div>

        <!-- Steppers -->
        <div class="flex justify-between mb-4">
            <template v-for="step in 5" :key="step">
                <div class="h-3 flex-1 mx-1 rounded-full" :class="step <= filledSteps ? 'bg-green-500' : 'bg-gray-200'">
                </div>
            </template>
        </div>

        <!-- Voir moins -->
        <div class="text-sm text-gray-700 mb-4">
            <button class="text-xs text-gray-500 hover:underline" @click="showMore = !showMore">
                {{ showMore ? 'Voir moins ▲' : 'Voir plus ▼' }}
            </button>

            <transition name="fade">
                <p v-if="showMore" class="mt-2">
                    Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation
                    des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons
                    en conséquence notre indice de confiance. Tu peux toujours le renseigner !
                </p>
            </transition>
        </div>

        <!-- Indice de confiance -->
        <div class="mt-2">
            <h3 class="text-sm font-semibold mb-1">Indice de confiance</h3>
            <div class="flex">
                <template v-for="star in 5" :key="star">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400"
                        :class="star <= trustIndex ? 'fill-current' : 'stroke-current text-gray-300'"
                        viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                        <path
                            d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21z" />
                    </svg>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Générer un nombre aléatoire entre min et max inclus
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random steps (1 à 5)
const filledSteps = ref(randomInt(1, 5));

// Random trust index (1 à 5)
const trustIndex = ref(randomInt(1, 5));

// Affichage "Voir plus" par défaut sur true
const showMore = ref(true);

// Texte selon filledSteps
const statusText = computed(() => {
    switch (filledSteps.value) {
        case 5: return 'Très élevées ⚡';
        case 4: return 'Very good 👍';
        case 3: return 'Average 🤔';
        case 2: return 'Low 😕';
        default: return 'Très faibles ⚠️';
    }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

<!-- 
<script setup lang="ts">
const lycee = JSON.parse(localStorage.getItem('selectedLycee') || 'null')
const level = localStorage.getItem('level')
const bac = localStorage.getItem('bac')
const notes = localStorage.getItem('notes')
</script> -->
