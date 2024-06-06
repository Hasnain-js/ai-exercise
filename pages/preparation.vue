<script setup>
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
	<div class="">
		<!-- <div class="flex-1 flex flex-col gap-y-16 py-14">
			<div class="flex flex-col gap-y-4 items-center justify-center">
				<p
					class="text-black dark:text-white text-base sm:text-lg font-semibold text-center"
				>
					Exercise no 1
				</p>
				<h1
					class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center"
				>
					Your unique talent
				</h1>
			</div>
			<div
				class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 max-w-[960px] px-4"
			>
				<div
					v-for="item in 8"
					:key="item"
					class="relative"
				>
					<label
						:for="'box' + item"
						class="flex flex-col aspect-square justify-center cursor-pointer peer-checked:scale-105 get-started-gradient-border rounded-xl items-center gap-y-4 p-5 z-10"
					>
						<input
							type="checkbox"
							class="peer"
							hidden
							:name="'box' + item"
							:id="'box' + item"
						/>
						<span
							class="text-white text-xs font-bold border border-white rounded-full items-center justify-center aspect-square px-1 absolute hidden peer-checked:flex top-4 right-4"
						>
							&check;
						</span>
						<h2 class="font-semibold text-xl text-black dark:text-white">
							Get started
						</h2>
					</label>
				</div>
			</div>
		</div> -->
		<main>
			<section class="relative z-10 pt-32 lg:pt-36 xl:pt-40 pb-20">
				<div
					class="absolute top-25 left-0 w-full flex flex-col gap-3 -z-10 opacity-50"
				>
					<div class="w-full h-[1.24px] footer-bg-gradient"></div>
					<div class="w-full h-[2.47px] footer-bg-gradient"></div>
					<div class="w-full h-[3.71px] footer-bg-gradient"></div>
					<div class="w-full h-[4.99px] footer-bg-gradient"></div>
					<div class="w-full h-[6.19px] footer-bg-gradient"></div>
					<div class="w-full h-[7.42px] footer-bg-gradient"></div>
					<div class="w-full h-[8.66px] footer-bg-gradient"></div>
					<div class="w-full h-[9.90px] footer-bg-gradient"></div>
					<div class="w-full h-[13px] footer-bg-gradient"></div>
				</div>

				<div class="text-center px-4">
					<h1 class="font-extrabold text-heading-2 text-white mb-5">
						Exercise no 1
					</h1>
					<ul class="flex items-center justify-center gap-2">
						<li class="font-medium text-lg">Your unique talent</li>
					</ul>
				</div>
			</section>

			<section class="pt-16 pb-16 lg:pb-20 xl:pb-28">
				<div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
					<div class="wow fadeInUp rounded-3xl bg-white/[0.05] py-8 px-4">
						<template v-if="!isShowSelectedValue">
							<div
								class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-4"
							>
								<div
									v-for="item in questionValue"
									:key="item"
									class="relative"
								>
									<input
										type="checkbox"
										class="peer hidden"
										:name="item.replace(' ', '-')"
										:id="item.replace(' ', '-')"
										:value="item"
										v-model="answerValue"
									/>
									<label
										:for="item.replace(' ', '-')"
										class="flex flex-col justify-center border border-white/[0.12] ease-in duration-300 hover:border-purple peer-checked:border-[#8646f4] md:aspect-square cursor-pointer peer-checked:scale-105 rounded-xl items-center gap-y-4 p-5 z-10"
									>
										<h2 class="font-medium text-md text-white">{{ item }}</h2>
									</label>
								</div>
							</div>

							<button
								type="submit"
								@click="onSubmit"
								class="hero-button-gradient flex justify-center ml-auto mt-12 mr-4 w-fit rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
							>
								Submit
							</button>
						</template>

						<div
							class="p-4"
							v-else
						>
							<h2 class="text-white text-2xl uppercase font-bold">
								Your answers:
							</h2>
							<ul class="list-decimal list-inside mt-2 space-y-3">
								<li
									v-for="ans in answerValue"
									:key="'answer-value' + ans"
								>
									{{ ans }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>
