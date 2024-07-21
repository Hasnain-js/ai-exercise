<script setup>
definePageMeta({
    layout: false
})
const { data: exerciseData, pending: isLoading } = useFetch(`/api/exercise/${useRoute().params.id}`)
const answerValue = ref([]);
const questionValue = [
    'Driven',
    'Empathy',
    'Persuasive',
    'Creative',
    'Curious',
    'Innovative',
    'Strategic',
    'Tenacious',
    'Leader',
    'Problem solver',
    'Negotiator',
    'Data Oriented',
    'Analytical',
    'Teacher / Mentor',
    'Detail Oriented',
    'Organized',
    'User defined',
];
const isShowSelectedValue = ref(false);
const page = ref(0)
const pages = ref(['Introduction', 'Exercise', 'Results'])

const onSubmit = () => {
    if (answerValue.value.length > 0) isShowSelectedValue.value = true;
};

const incrementPage = () => {
    if (page.value < 2) {
        page.value++
        console.log(page.value)
    }
    return
}

</script>
<template>
    <main>
        <div class="flex overflow-hidden h-screen">
            <div class="z-0 sticky h-screen w-1/3 shrink-0 md:block hidden">
                <div class="block overflow-hidden relative w-full h-full">
                    <div class="z-10 relative mt-12 px-5 space-y-5 h-1/2 flex items-center justify-center flex-col">
                        <h2 class="text-white font-semibold font-sans text-center text-4xl">
                            {{  !isLoading && exerciseData.title }}
                        </h2>
                        <p class="text-white/90 font-medium leading-relaxed font-sans text-center text-md">
                            {{  !isLoading && exerciseData.objective }}
                        </p>
                    </div>
                    <img src="/images/auth-bg.png" alt="blue background image"
                        class="block w-full h-full absolute inset-0 ">
                    <img src="/images/sign-up.png" alt="man and women image"
                        class="absolute left-0 bottom-0 box-border  p-0 border-none m-0 block w-full h-auto">
                </div>
            </div>
            <div class="overflow-y-auto flex-grow z-10">
                <div class="flex items-center w-full px-6 mt-12 mx-auto">
                    <div class="flex-1">
                        <!-- breadcrumbs -->
                        <ExerciseBreadcrumb :links="pages" :active-link="page" />

                        <!-- Form signal -->
                        <div class="mt-8">
                            <form @submit.prevent="onSubmit()"
                                class="flex flex-col justify-between min-h-[calc(100vh-176px)] overflow-y-scroll no-scrollbar">
                                <template v-if="page < 1">
                                    <ExerciseIntro :intro="exerciseData" />
                                </template>
                                <template v-else-if="page < 2">
                                    <div
                                        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-4">
                                        <div v-for="item in questionValue" :key="item" class="relative">
                                            <input type="checkbox" class="peer hidden" :name="item.replace(' ', '-')"
                                                :id="item.replace(' ', '-')" :value="item" v-model="answerValue" />
                                            <label :for="item.replace(' ', '-')"
                                                class="flex flex-col justify-center border border-black/[0.12] ease-in duration-300 hover:border-teal-500 peer-checked:border-teal-400 cursor-pointer peer-checked:scale-105 rounded-xl items-center gap-y-4 p-5 z-10">
                                                <h2 class="font-medium text-md text-black">{{ item }}</h2>
                                            </label>
                                        </div>
                                    </div>

                                </template>
                                <div class="p-4" v-else>
                                    <h2 class="text-black text-2xl capitalize font-bold">
                                        Your answers:
                                    </h2>
                                    <ul class="list-decimal list-inside space-y-3 mt-6 text-sm text-gray-500">
                                        <li v-for="ans in answerValue" :key="'answer-value' + ans">
                                            {{ ans }}
                                        </li>
                                    </ul>
                                </div>
                                <button :type="page < 1 ? 'button' : 'submit'" @click="incrementPage"
                                    class="w-fit block ml-auto mt-4 px-11 sticky bottom-0 py-3 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
                                    {{ page < 1 ? 'Next' : 'submit' }} </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
