<template>
    <div class="flex sm:items-center items-start sm:flex-row flex-col justify-center gap-5 mb-12">
        <template v-for="link, index in links">
            <div class="flex  items-center gap-2">
                <div :class="index === activeLink ? 'border-black' : 'border-black/40'"
                    class="border-2  p-2 shadow-lg bg-white rounded-full flex items-center justify-center w-8 h-8">
                    {{ index + 1 }}
                </div>
                <span :class="index === activeLink ? 'text-black' : 'text-black/40'">
                    {{ link }}
                </span>
            </div>

            <hr v-if="index < 2" class="sm:w-12 w-full border-2 rounded-full">
        </template>

    </div>
</template>
<script setup>
defineProps({
    links: {
        type: Array,
        default: () => [],
    },
    activeLink: {
        type: String,
        default: ''
    }
})
</script>
