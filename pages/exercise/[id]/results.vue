<script setup>
const { data: exerciseData, pending: isLoading } = useFetch(`/api/exercise/${useRoute().params.id}`)
const answerValue = ref([])
const route = useRoute()
onMounted(() => {
    if (route.query.answer) {
        const answerString = route.query.answer.split(',')
        answerValue.value = answerString
    } else {
        useRouter().push(`/exercise/${useRoute().params.id}/exercise`)
    }
})
</script>
<template>
    <ExerciseLayout v-if="!isLoading" :title="exerciseData.title" :objective="exerciseData.objective">
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
