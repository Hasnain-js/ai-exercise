<script setup>
definePageMeta({
	layout: false
})
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
	// 'User defined',
	// 'User defined',
	// 'User defined',
];
const isShowSelectedValue = ref(false);
const onSubmit = () => {
	if (answerValue.value.length > 0) isShowSelectedValue.value = true;
};
</script>
<template>
	<main>
		<div class="flex overflow-hidden h-screen">
			<div class="z-0 sticky h-screen w-1/3">
				<div class="block overflow-hidden relative w-full h-full">
					<div class="z-10 relative mt-16 px-5 space-y-5">
						<h2 class="text-white font-semibold font-sans text-center text-4xl">
							Ace your interview and win the job!
						</h2>
						<p class="text-white/90 font-medium leading-relaxed font-sans text-center text-sm">
							We've seen it time and again. The candidates who excel in job interviews are the ones who
							prepare. Preparation doesn't mean reading an article or two. It means being intentional
							about crafting your answers, designing your examples, and above all, practicing.
						</p>
						<p class="text-white/90 font-medium font-sans leading-relaxed text-center text-sm">
							We've made it simple.
						</p>
					</div>
					<img src="/images/auth-bg.png" alt="blue background image"
						class="block w-full h-full absolute inset-0 ">
					<img src="/images/sign-up.png" alt="man and women image"
						class="absolute left-0 bottom-0 box-border  p-0 border-none m-0 block w-full h-auto">
				</div>
			</div>
			<div class="border border-white overflow-y-auto flex-grow z-10">
				<div class="flex items-center w-full px-6 mt-12 mx-auto">
					<div class="flex-1">
						<!-- Radio options -->
						<div class="flex items-center justify-center gap-5 mb-12">
							<div class="flex  items-center gap-2">
								<div
									class="border-2 border-black/40 p-2 shadow-lg bg-white rounded-full flex items-center justify-center w-8 h-8">
									1
								</div>
								<span>
									Introduction
								</span>
							</div>

							<hr class="w-12 border-2 rounded-full">

							<div class="flex items-center gap-2">
								<div
									class="border-2 border-black/40 p-2 shadow-lg bg-white rounded-full flex items-center justify-center w-8 h-8">
									2
								</div>
								<span>
									Self-Assessment
								</span>
							</div>
							<hr class="w-12 border-2 rounded-full">

							<div class="flex text-black items-center gap-2">
								<div
									class="border-2 border-black/60 p-2 shadow-lg bg-white rounded-full flex items-center justify-center w-8 h-8">
									3
								</div>
								<span>
									Self-Assessment Exercise
								</span>
							</div>
						</div>

						<!-- Form signal -->
						<!-- <div class="">
							<h1 class="mt-3 text-black font-bold text-4xl capitalize">Exercise No 1</h1>
						</div> -->
						<div class="mt-8">
							<form>
								<template v-if="!isShowSelectedValue">
									<div
										class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 px-4">
										<div v-for="item in questionValue" :key="item" class="relative">
											<input type="checkbox" class="peer hidden" :name="item.replace(' ', '-')"
												:id="item.replace(' ', '-')" :value="item" v-model="answerValue" />
											<label :for="item.replace(' ', '-')"
												class="flex flex-col justify-center border border-black/[0.12] ease-in duration-300 hover:border-teal-500 peer-checked:border-teal-400 cursor-pointer peer-checked:scale-105 rounded-xl items-center gap-y-4 p-5 z-10">
												<h2 class="font-medium text-md text-black">{{ item }}</h2>
											</label>
										</div>
									</div>
									<button type="submit" @click="onSubmit"
										class="w-fit block ml-auto px-12 py-2 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
										Submit
									</button>
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
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

</template>
