<script setup>
definePageMeta({
	layout: false
})
</script>
<template>
	<main>
		<div title="Sign up" class="flex">
			<div class="z-0 sticky h-screen w-1/4">
				<div class="block overflow-hidden relative w-full h-full">
					<div class="z-10 relative mt-16 px-5 space-y-9">
						<h2 class="text-white font-semibold font-sans text-center text-4xl">
							Ace Every Interview, Get Hired Faster
						</h2>
						<ul class="flex justify-between gap-2">
							<li class="text-white/90 font-medium leading-relaxed font-sans text-center text-sm">
								<img src="/images/check.svg" class="mx-auto mb-2" alt="check icon" width="24"
									height="24">
								Learn how to sell yourself and easily stand out.
							</li>
							<li class="text-white/90 font-medium leading-relaxed font-sans text-center text-sm">
								<img src="/images/check.svg" class="mx-auto mb-2" alt="check icon" width="24"
									height="24">

								Know
								exactly what to expect, and how to answer questions
							</li>
							<li class="text-white/90 font-medium leading-relaxed font-sans text-center text-sm">
								<img src="/images/check.svg" class="mx-auto mb-2" alt="check icon" width="24"
									height="24">

								Get
								immediate AI feedback in an interactive interview simulator.
							</li>
						</ul>
					</div>
					<img src="/images/auth-bg.png" alt="blue background image"
						class="block w-full h-full absolute inset-0 ">
					<img src="/images/sign-up.png" alt="man and women image"
						class="absolute left-0 bottom-0 box-border  p-0 border-none m-0 block  w-full h-auto">
				</div>
			</div>
			<div class="border border-white flex-grow z-10">
				<div class="flex items-center w-full max-w-xl px-6 mt-28 mx-auto">
					<div class="flex-1">
						<div class="text-center">
							<h1 class="mt-3 text-black font-bold text-4xl capitalize">Create Account</h1>
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
										<!-- <a href="#"
											class="text-sm text-gray-500 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot
											password?</a> -->
									</div>

									<input type="password" name="password" id="password" placeholder="Min 8 character"
										class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
									<p class="text-sm text-gray-500 mt-1">
										Password must contain at least 1 uppercase, 1 lowercase character and one digit.</p>
								</div>

								<div class="mt-6 w-full">
									<button
										class="w-full px-12 py-2 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
										Sign up
									</button>
								</div>

							</form>

							<p class="mt-6 text-sm text-center text-gray-500">Do you have an already account? <a
									href="#"
									class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign
									in</a>.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
