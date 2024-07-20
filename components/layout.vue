<template>
    <main>
        <div class="flex">
            <div class="z-0 sticky h-screen w-1/3 md:block hidden">
                <div class="block overflow-hidden relative w-full h-full">
                    <div class="z-10 relative mt-16 px-5 space-y-5">
                        <slot name="header"></slot>
                    </div>
                    <img src="/images/auth-bg.png" alt="blue background image"
                        class="block w-full h-full absolute inset-0 ">
                    <img src="/images/man-women.png" alt="man and women image"
                        class="absolute left-0 bottom-0 box-border  p-0 border-none m-0 block  w-full h-auto">
                </div>
            </div>
            <div class="border border-white flex-grow z-10">
                <div class="flex items-center w-full max-w-xl px-6 mt-28 mx-auto">
                    <div class="flex-1 w-full">
                        <slot name="body"></slot>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup></script>
