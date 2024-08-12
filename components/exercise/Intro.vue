<template>
    <div class="space-y-4">
        <!-- <h1 class="text-black font-semibold text-2xl">
            {{ intro.title }}
        </h1>
        <p>
            <span class="text-lg font-semibold mr-1">Objective:</span>{{ intro.objective }}
        </p> -->
        <div class="space-y-4">

            <h2 class="text-black font-semibold text-2xl">
                Instructions
            </h2>
            <ul class="space-y-2">
                <li class="text-gray-600" v-for="list, index in intro.instructions" :key="index">
                    <span class="text-lg font-semibold mr-1 text-gray-800">{{ list.topic }}</span>
                    {{ list.value }}
                </li>
            </ul>
        </div>
        <h2 class="text-gray-800 font-semibold text-2xl">
            {{ intro?.understanding?.title }}
        </h2>
        <p class="text-gray-600">
            <span :class="isReadMore ? 'line-clamp-none' : 'line-clamp-2'">
                {{ intro?.understanding?.value }}
            </span>
            <button @click="() => isReadMore = !isReadMore" class="text-blue-600 leading-relaxed">Read
                {{ isReadMore? 'less' : 'more' }}</button>
        </p>
    </div>
</template>
<script setup>
defineProps({
    intro: {
        type: Object,
        default: {
            id: "1",
            title: "Exercise 1: Your Top Talents",
            objective: "Your top Talents are unique aspects of your personality that set you apart from others. This exercise helps identify key Talents that define who you are.",
            instructions: [
                {
                    topic: "Selecting Talents",
                    value: "Choose a minimum of 3 and a maximum of 5 Talents from the grid below that best represent you. These Talents could be qualities like 'Adventurous,' 'Creative,' 'Driven,' etc. If you don't see a specific Trait listed, feel free to type it into the User Defined boxes provided."
                },
                {
                    topic: "Why It Matters",
                    value: "These Talents will form the foundation of your brand narrative. They showcase what makes you a valuable candidate and how you can contribute uniquely to a workplace."
                }
            ],
            understanding: {
                title: "Understanding Your Top Talents",
                value: "Talents are innate traits that define your character or personality. They reflect your strengths and what you naturally bring to any role or team. Select traits that genuinely resonate with you. They should reflect not only what you do but also who you are as a professional. Once you've chosen your traits, we'll help you weave them into a compelling narrative. Employers look beyond just skills; they want to know what drives you and how you fit into their team culture."
            }
        },
    }
})
const isReadMore = ref(false)

</script>
