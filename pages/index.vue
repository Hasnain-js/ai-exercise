<template>
	<Layout>
		<template #body>

			<div class="flex items-center justify-center h-[calc(100vh-14rem)] w-full">
				<div class="space-y-5 w-full">

					<h2 class="text-black font-semibold  text-5xl">
						My Interview Advisor
					</h2>
					<p class="text-black/60 font-medium leading-relaxed">
						Welcome to My Interview Advisor! This series of interactive exercises provides detailed examples
						and practical guidance, showcasing how several of our students have successfully navigated and
						completed these crucial tasks. Explore the exercises to uncover insights and strategies that can
						help you shine in your next interview.
					</p>
					<NuxtLink :to="useUserStore().isAuthenticated ? '/exercise/1' : '/auth/signup'"
						class="w-fit max-w-xs px-12 block py-2 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
						Get Started
					</NuxtLink>
				</div>
			</div>


		</template>
	</Layout>
</template>
