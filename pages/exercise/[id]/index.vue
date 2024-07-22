<script setup>
const { data: exerciseData, pending: isLoading } = useFetch(`/api/exercise/${useRoute().params.id}`)
</script>
<template>
    <ExerciseLayout v-if="!isLoading" :title="exerciseData.title" :objective="exerciseData.objective">
        <div
            class="flex flex-col justify-between md:min-h-[calc(100vh-176px)] min-h-[90vh] overflow-y-scroll no-scrollbar">
            <ExerciseIntro :intro="exerciseData" />
            <NuxtLink :to="`/exercise/${useRoute().params.id}/exercise`"
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
