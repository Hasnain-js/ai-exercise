<script setup>
definePageMeta({
	layout: false
})
</script>
<template>
	<main>
		<div title="Sign in" class="flex">
			<div class="z-0 sticky h-screen w-1/4">
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
					<img src="/images/man-women.png" alt="man and women image"
						class="absolute left-0 bottom-0 box-border  p-0 border-none m-0 block  w-full h-auto">
				</div>
			</div>
			<div class="border border-white flex-grow z-10">
				<div class="flex items-center w-full max-w-xl px-6 mt-28 mx-auto">
					<div class="flex-1">
						<div class="text-center">
							<h1 class="mt-3 text-black font-bold text-4xl capitalize">Sign in</h1>
						</div>
						<div class="mt-8">
							<form>
								<div>
									<label for="email" class="block mb-2 text-sm font-semibold text-black">Email
										Address</label>
									<input type="email" name="email" id="email" placeholder="example@example.com"
										class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div class="mt-6">
									<div class="flex justify-between mb-2">
										<label for="password" class="text-sm font-semibold text-black">Password</label>
										<a href="#"
											class="text-sm text-gray-500 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot
											password?</a>
									</div>

									<input type="password" name="password" id="password" placeholder="Your Password"
										class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div class="mt-6 w-full">
									<button
										class="w-fit block ml-auto px-12 py-2 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
										Sign in
									</button>
								</div>

							</form>

							<p class="mt-6 text-sm text-center text-gray-500">Don&#x27;t have an account yet? <a
									href="#"
									class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign
									up</a>.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
