<template>
    <main>
        <div class="flex overflow-hidden h-screen">
            <div class="z-0 sticky h-screen w-1/3 shrink-0 md:block hidden">
                <div class="block overflow-hidden relative w-full h-full">
                    <div class="z-10 relative mt-12 px-5 space-y-5 h-1/2 flex items-center justify-center flex-col">
                        <h2 class="text-white font-semibold text-center text-4xl">
                            {{ 'Exercise: ' + useRoute().params.id }}
                        </h2>
                        <p class="text-white/80 font-normal leading-relaxed text-center text-md">
                            {{ objective }}
                        </p>
                    </div>
                    <img src="/images/auth-bg.png" alt="blue background image"
                        class="block w-full h-full absolute inset-0 ">
                    <div
                        class="absolute right-0 left-0 bottom-0 w-full">

                        <img src="/images/learning-girl.svg" alt="man and women image" class="object-right-bottom  max-w-xs h-auto box-border p-0 border-none">
                    </div>
                </div>
            </div>
            <div class="overflow-y-auto flex-grow z-10">
                <div class="flex items-center w-full px-6 md:mt-12 mt-2 mx-auto">
                    <div class="flex-1">
                        <!-- breadcrumbs -->
                        <h2 class="text-gray-700 capitalize font-semibold text-center text-4xl">
                            {{ title }}
                        </h2>
                        <!-- <ExerciseBreadcrumb class="md:flex hidden" :links="pages" /> -->

                        <div class="mt-8">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
const pages = [
    {
        name: 'Introduction',
        link: `/exercise/${useRoute().params.id}`,
    },
    {
        name: 'Exercise',
        link: `/exercise/${useRoute().params.id}/exercise`,
    },
    {
        name: 'Results',
        link: `/exercise/${useRoute().params.id}/results`,
    },
]

defineProps({
    title: {
        type: String,
        default: "",
    },
    objective: {
        type: String,
        default: "",
    }

})
</script>
