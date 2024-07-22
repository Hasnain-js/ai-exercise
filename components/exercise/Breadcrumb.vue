<template>
    <div class="flex sm:items-center items-start sm:flex-row flex-col justify-center gap-5 mb-12">
        <template v-for="link, index in links">
            <NuxtLink :to="link.link" class="flex items-center gap-2">
                <div :class="link.link === useRoute().path ? 'border-black' : 'border-black/40'"
                    class="border-2 p-2 shadow-lg bg-white rounded-full flex items-center justify-center w-8 h-8">
                    {{ index + 1 }}
                </div>
                <span :class="link.link === useRoute().path ? 'text-black' : 'text-black/40'">
                    {{ link.name }}
                </span>
            </NuxtLink>

            <hr v-if="index < 2" class="sm:w-12 w-full border-2 rounded-full">
        </template>

    </div>
</template>
<script setup>
defineProps({
    links: {
        type: Array,
        default: () => [
            {
                name: '',
                link: '',
            }
        ],
    },
})
</script>
