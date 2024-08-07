<script setup>
definePageMeta({
    middleware: ['auth']
})
const exercises = ref(null)
const titles = ['Talents', 'Top Skills', 'Disciplines', 'Industries']
onMounted(async () => {
    getUserData().then((res) => {
        exercises.value = res.exercises
    }).catch(() => {
        useRouter().push(`/`)
    })
})

const maxSelections = computed(() => {
    if (exercises.value) {
        return Math.max(...Object.values(exercises.value).map(item => Array.isArray(item.selected) ? item.selected.length : 0));
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
                                <th :id="index" :key="index" v-for="result, index in titles"
                                    class="text-start text-gray-700 border md:text-base text-xs p-4 bg-gray-50">{{
                                        result }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="index in maxSelections" :key="index">
                                <td v-for="(exercise, key) in exercises"
                                    class="text-start text-gray-900 border whitespace-nowrap md:text-base text-xs p-4 bg-white"
                                    :key="key">
                                    {{ exercise.selected[index - 1] || '' }}
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
                                <th class="text-start text-gray-700 border md:text-base text-xs p-4 bg-gray-50">Title
                                </th>
                                <th class="text-start text-gray-700 border md:text-base text-xs p-4 bg-gray-50">Narative
                                </th>
                            </tr>
                        </thead>
                        <tbody v-if="exercises" >
                            <tr :key="index" v-for="result, index in titles">
                                <th
                                    class="text-start text-gray-900 border whitespace-nowrap  md:text-sm text-xs p-4 bg-white">
                                    {{ result }}</th>
                                <td
                                    class="text-start text-gray-900 border whitespace-nowrap md:text-sm text-xs p-4 bg-white">
                                    {{ exercises[`exercise${index + 1}`].narrative }}</td>
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
