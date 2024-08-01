<script setup>
import Swal from 'sweetalert2'
const exerciseData = fetchExercise(useRoute().params.id)
const answerValue = ref([]);
const onSubmit = () => {
    if (answerValue.value.length >= 3 && answerValue.value.length <= 6) {
        const answerString = answerValue.value.join(',');
        useRouter().push({
            path: `/exercise/${useRoute().params.id}/results`,
            query: { answer: answerString }
        })
    } else {
        Swal.fire({
            title: 'Please!',
            text: answerValue.value.length < 4 ?  'Please select any minimum 3 options' : 'Please select any maximum 6 options',
            icon: 'warning',
        })
    }
};

</script>
<template>
    <ExerciseLayout :title="exerciseData.title" :objective="exerciseData.objective">
        <form @submit.prevent="onSubmit"
            class="flex flex-col justify-between md:min-h-[calc(100vh-176px)] min-h-[90vh] overflow-y-scroll no-scrollbar">
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-4">
                <div v-for="item in exerciseData.question" :key="item" class="relative">
                    <input type="checkbox" class="peer hidden" :name="item.replace(' ', '-')"
                        :id="item.replace(' ', '-')" :value="item" v-model="answerValue" />
                    <label :for="item.replace(' ', '-')"
                        class="flex flex-col justify-center border border-black/[0.12] ease-in duration-300 hover:bg-teal-500 text-black hover:text-white peer-checked:text-white peer-checked:bg-teal-500 cursor-pointer peer-checked:scale-105 rounded items-center gap-y-4 p-5 z-10">
                        <h2 class="font-medium text-sm">{{ item }}</h2>
                    </label>
                </div>
            </div>
            <button type="submit"
                class="w-fit block ml-auto my-4 px-11 sticky bottom-0 py-3 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
                Submit
            </button>
        </form>
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
