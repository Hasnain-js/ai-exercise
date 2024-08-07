<template>
    <main>
        <div class="flex overflow-hidden">
            <div class="z-0 sticky h-screen w-1/3 md:block hidden shrink-0">
                <div class="block overflow-hidden relative h-full">
                    <div class="z-10 relative mt-16 px-5 space-y-5">
                        <slot name="header"></slot>
                    </div>
                    <img src="/images/auth-bg.png" alt="blue background image"
                        class="block w-full h-full absolute inset-0 ">
                    <img src="/images/man-women.png" alt="man and women image"
                        class="absolute left-0 bottom-0 box-border  p-0 border-none m-0 block  w-full h-auto">
                </div>
            </div>
            <div class="overflow-auto h-screen flex-grow z-10">
                <div class="w-full px-6 mb-6 mt-16">
                        <slot name="body"></slot>
                </div>
            </div>
        </div>
    </main>
</template>
