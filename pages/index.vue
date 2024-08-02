<style scoped>
.introduction {
	b {
		color: black;
	}
}
</style>
<template>
	<Layout>
		<template #header>
			<div class="text-center pt-12">
				<h1 class="text-white font-bold text-4xl">
					Unlock Your Interview Success!
				</h1>
				<NuxtLink :to="useUserStore().isAuthenticated ? '/exercise/1' : '/auth/signup'"
					class="w-fit max-w-xs mx-auto mt-3 px-12 block py-2 tracking-wide relative text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
					Get Started
				</NuxtLink>
				<p class="text-white/70 leading-relaxed mt-5">
					Make your next interview your best one yet. Click the button below to get started!
				</p>
			</div>

		</template>
		<template #body>

			<div class="w-full">
				<div class="space-y-5 w-full">
					<h2 class="text-black text-2xl">
						<b>Interactive Exercise Instructions:</b> How to build, create and communicate a customized
						professional interview narrative
						with our <b>AI powered Interview Narrative Generator <sup>TM</sup></b>
					</h2>
					<div class="space-y-4 introduction">
						<p class="text-black/60 font-medium leading-relaxed">
							<b>In Module 1 / Lesson # 8</b> you listened to how Zach and Jessica delivered their brand
							narrative in an interview setting. They built their narratives by using the “elements”
							contained in the <b>pre-formatted Interview Narrative Templates</b> (grids) presented in
							this
							powerful interactive exercise.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							By thoughtfully selecting their unique <b>“Skills” and “Traits”</b> elements, they instantly
							infused <b>authenticity</b> into their professional interview narrative.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							By narrowing their selection of <b>“Disciplines”</b> (departments within an organization ...
							<b>Example:</b> Marketing, Finance, Legal, Accounting departments etc.) Zach and Jessica
							conveyed their confidence and passion for applying their efforts to <b>specific functional
								areas</b> within the company.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							Finally, by carefully selecting their <b>“Targeted Industries”</b>, and tailoring their
							selections
							to the industry and position that they find themselves interviewing for, they became
							<b>differentiated</b> and <b>more memorable</b> to the interviewer because the hiring
							manager saw them as
							<b>focused, business savvy and disciplined</b>.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							Because they effectively communicated their personal and professional interview narrative,
							Zach and Jessica demonstrated that they are not looking for <b>just ANY job ...</b> they
							made it clear that they wanted <b>THIS JOB,</b> with <b>THIS COMPANY</b> on <b>THIS
								TEAM</b>.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							The following is an example of how another one of our students (Sarah) made <b>element
								selections</b> on all 4 interactive grids that became the building blocks of her
							personal
							and professional brand narrative.
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							It is important to note that a narrative is not static. It is not carved in stone. Based on
							the job specifications, it is essential to be both flexible and strategic enough to
							<b>rotate
								element sections</b> to be most appropriate to the position. <b>For example:</b> When
							interviewing for
							a job in Retail we suggest that you <span class="underline">only identify Retail as a
								desired industry
								during the interview process.</span>
						</p>
						<p class="text-black/60 font-medium leading-relaxed">
							<b>NOTE:</b> After you review the following illustration / example you will be presented with your
							personal / customizable interactive <b>Interview Narrative Generator<sup>TM</sup></b>
						</p>
					</div>


				</div>
			</div>


		</template>
	</Layout>
</template>
