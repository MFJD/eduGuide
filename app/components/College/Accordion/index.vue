<template>
    <div class="min-h-screen bg-gray-100 mt-5">
        <!-- Outer container that wraps all 3 accordions -->
        <div class="max-w-xl mx-auto space-y-4">
            <!-- === Accordion 1 === -->
            <div class="bg-white rounded-xl shadow p-4">
                <button @click="toggle('class')"
                    class="w-full flex justify-between items-center text-left text-sm font-medium text-gray-800">
                    <div class="">
                        <span>En quelle classe es-tu ?</span>
                        <div class="text-xs text-gray-500">À compléter</div>
                    </div>
                    <UIcon :name="isOpen.class ? 'i-lucide-x' : 'i-lucide-pencil'" class="size-4 text-gray-500" />
                </button>

                <div v-if="isOpen.class" class="pt-4 space-y-4">
                    <!-- Level selection -->
                    <div>
                        <p class="text-sm font-semibold mb-2 text-gray-600">Niveau scolaire</p>
                        <div class="flex gap-2 flex-wrap">
                            <button v-for="level in levels" :key="level" @click="selectedLevel = level" :class="[
                                'px-4 py-1 rounded-full text-sm border transition',
                                selectedLevel === level
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            ]">
                                {{ level }}
                            </button>
                        </div>
                    </div>

                    <!-- Bac selection -->
                    <div>
                        <p class="text-sm font-semibold mb-2 text-gray-600">Type de bac</p>
                        <div class="flex gap-2 flex-wrap">
                            <button v-for="type in bacTypes" :key="type" @click="selectedBac = type" :class="[
                                'px-4 py-1 rounded-full text-sm border transition',
                                selectedBac === type
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            ]">
                                {{ type }}
                            </button>
                        </div>
                    </div>

                    <!-- Confirm button -->
                    <button class="w-full px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-100"
                        @click="confirm">
                        Confirmer
                    </button>
                </div>
            </div>

            <!-- === Accordion 2: Spécialités === -->
            <div class="bg-white rounded-xl shadow p-4">
                <button @click="toggle('specialites')"
                    class="w-full flex justify-between items-center text-left text-sm font-medium text-gray-800">
                    <div>
                        <span>Spécialités</span>
                        <div class="text-xs text-gray-500">À compléter</div>
                    </div>
                    <UIcon :name="isOpen.specialites ? 'i-lucide-x' : 'i-lucide-pencil'" class="size-4 text-gray-500" />
                </button>

                <div v-if="isOpen.specialites" class="pt-4 text-sm text-gray-500">
                    À compléter
                </div>
            </div>

            <!-- === Accordion 3: Notes === -->
            <div class="bg-white rounded-xl shadow p-4">
                <button @click="toggle('notes')"
                    class="w-full flex justify-between items-center text-left text-sm font-medium text-gray-800">
                    <div>
                        <span>Notes</span>
                        <div class="text-xs text-gray-500">À compléter</div>
                    </div>
                    <UIcon :name="isOpen.notes ? 'i-lucide-x' : 'i-lucide-pencil'" class="size-4 text-gray-500" />
                </button>
                <div v-if="isOpen.notes" class="pt-4">
                    <label class="text-sm font-semibold text-gray-600 block mb-2">Tes notes</label>
                    <textarea v-model="notes"
                        class="w-full border border-gray-300 rounded-lg p-2 text-sm resize-y min-h-[100px]"
                        placeholder="Écris ici tes notes ou remarques..."></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref({
    class: false,
    specialites: false,
    notes: false
})

const selectedLevel = ref('')
const selectedBac = ref('')
const notes = ref('')

const levels = ['Seconde', 'Première', 'Terminale']
const bacTypes = ['Général', 'Technologique', 'Professionnel']

function toggle(section) {
    isOpen.value[section] = !isOpen.value[section]
}

function confirm() {
    console.log('Classe :', selectedLevel.value)
    console.log('Bac :', selectedBac.value)
}
</script>
