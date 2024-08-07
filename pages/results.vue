<script setup>
definePageMeta({
    middleware: ['auth']
})
const route = useRoute()
const answerValue = ref([])
onMounted(() => {
    if (useExerciseStore().exercise.length > 0) {
        answerValue.value = useExerciseStore().exercise
    } else {
        useRouter().push(`/exercise/${route.params.id}/exercise`)
    }
})

const maxSelections = computed(() => {
    if (useExerciseStore().exercise.length > 0) {

        return Math.max(...useExerciseStore().exercise.map(item => item.selected.length));
    }
})
</script>
<template>
    <ExerciseLayout :title="'Your progress based on your selection'" :objective="''">
        <div
            class="flex flex-col justify-between w-full md:min-h-[calc(100vh-176px)] min-h-[90vh] relative overflow-y-scroll no-scrollbar">
            <div class="px-2">
                <h2 class="text-slate-700 text-2xl capitalize font-semibold">
                    Results
                </h2>
                <div class="relative md:my-8 my-6 overflow-x-auto">
                    <table class="rounded w-full">
                        <thead>
                            <tr>
                                <th :id="result.id" :key="result.id" v-for="result in answerValue"
                                    class="text-start text-gray-700 border md:text-base text-xs p-4 bg-gray-50">{{
                                    result.title }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="index in maxSelections" :key="index">
                                <td v-for="result in answerValue"
                                    class="text-start text-gray-900 border whitespace-nowrap md:text-base text-xs p-4 bg-white"
                                    :key="result.id">
                                    {{ result.selected[index - 1] || '' }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 class="text-slate-700 text-2xl capitalize font-semibold">
                    Narative
                </h2>
                <div class="relative md:my-8 my-6 overflow-x-auto">
                    <table class="rounded w-full">
                        <thead>
                            <tr>
                                <th class="text-start text-gray-700 border md:text-base text-xs p-4 bg-gray-50">Title</th>
                                <th class="text-start text-gray-700 border md:text-base text-xs p-4 bg-gray-50">Narative</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :key="result.id" v-for="result in answerValue">
                                <th class="text-start text-gray-900 border whitespace-nowrap  md:text-sm text-xs p-4 bg-white">{{ result.title }}</th>
                                <th class="text-start text-gray-900 border whitespace-nowrap md:text-sm text-xs p-4 bg-white">{{ result.narative }}</th>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <NuxtLink to="/"
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
