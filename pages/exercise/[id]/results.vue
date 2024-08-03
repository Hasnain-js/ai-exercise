<script setup>
definePageMeta({
    middleware: ['auth']
})
const route = useRoute()
const exerciseData = fetchExercise(route.params.id)
const answerValue = ref([])
onMounted(() => {
    if (useExerciseStore().exercise.length > 0) {
         answerValue.value = useExerciseStore().exercise.find(item => item.id == route.params.id)?.selected
    } else {
        useRouter().push(`/exercise/${route.params.id}/exercise`)
    }
})
</script>
<template>
    <ExerciseLayout :title="exerciseData.title" :objective="exerciseData.objective">
        <div
            class="flex flex-col justify-between md:min-h-[calc(100vh-176px)] min-h-[90vh] overflow-y-scroll no-scrollbar">
            <div class="p-4">
                <h2 class="text-black text-2xl capitalize font-bold">
                    Your answers:
                </h2>
                <ul class="list-decimal list-inside space-y-3 mt-6 text-sm text-gray-500">
                    <li v-for="ans in answerValue" :key="'answer-value' + ans">
                        {{ ans }}
                    </li>
                </ul>
            </div>
            <NuxtLink v-if="useRoute().params.id != 4" :to="`/exercise/${Number(useRoute().params.id) + 1}`"
                class="w-fit block ml-auto my-4 px-11 sticky bottom-0 py-3 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
                Next
            </NuxtLink>
        </div>
    </ExerciseLayout>
</template>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
