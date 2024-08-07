<template>
	<Layout>
		<template #header>
			<div class="text-center pt-12">
				<h1 class="text-white font-bold text-3xl">
					Unlock Your Interview Success!
				</h1>
				<NuxtLink :to="useUserStore().isAuthenticated ? '/exercise/1' : '/auth/signup'"
					class="w-fit max-w-xs mx-auto mt-3 px-12 block py-2 tracking-wide relative text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
					Get Started
				</NuxtLink>
				<p class="text-white/70 leading-relaxed text-md mt-5">
					Make your next interview your best one yet. Click the button below to get started!
				</p>
			</div>

		</template>
		<template #body>

			<div class="w-full">
				<div class="space-y-5 w-full">
					<h2 class="text-black font-semibold text-2xl">
						Interactive Exercise Instructions: How to build, create and communicate a customized
						professional interview narrative
						with our AI powered Interview Narrative Generator <sup>TM</sup>
					</h2>
					<div class="space-y-4 introduction">
						<p class="text-black/60 font-medium leading-relaxed">
							In Module 1 / Lesson # 8 you listened to how Zach and Jessica delivered their brand
							narrative in an interview setting. They built their narratives by using the “elements”
							contained in the pre-formatted Interview Narrative Templates (grids) presented in
							this
							powerful interactive exercise.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							By thoughtfully selecting their unique “Skills” and “Traits” elements, they instantly
							infused authenticity into their professional interview narrative.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							By narrowing their selection of “Disciplines” (departments within an organization ...
							Example: Marketing, Finance, Legal, Accounting departments etc.) Zach and Jessica
							conveyed their confidence and passion for applying their efforts to specific functional
								areas within the company.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							Finally, by carefully selecting their “Targeted Industries”, and tailoring their
							selections
							to the industry and position that they find themselves interviewing for, they became
							differentiated and more memorable to the interviewer because the hiring
							manager saw them as
							focused, business savvy and disciplined.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							Because they effectively communicated their personal and professional interview narrative,
							Zach and Jessica demonstrated that they are not looking for just ANY job ... they
							made it clear that they wanted THIS JOB, with THIS COMPANY on THIS
								TEAM.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							The following is an example of how another one of our students (Sarah) made element
								selections on all 4 interactive grids that became the building blocks of her
							personal
							and professional brand narrative.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							It is important to note that a narrative is not static. It is not carved in stone. Based on
							the job specifications, it is essential to be both flexible and strategic enough to
							rotate
								element sections to be most appropriate to the position. For example: When
							interviewing for
							a job in Retail we suggest that you <span class="underline">only identify Retail as a
								desired industry
								during the interview process.</span>
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							NOTE: After you review the following illustration / example you will be presented with your
							personal / customizable interactive Interview Narrative Generator<sup>TM</sup>
						</p>
					</div>


				</div>
			</div>


		</template>
	</Layout>
</template>
