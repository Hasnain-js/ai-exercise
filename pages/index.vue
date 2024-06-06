<template>
	<section
		id="home"
		class="relative overflow-hidden z-10 pt-36 md:pt-40 xl:pt-45 min-h-screen"
	>
		<div class="max-w-7xl mx-auto">
			<div
				class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28"
			>
				<div
					class="absolute -z-10 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]"
				></div>
				<div
					class="absolute -z-10 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]"
				></div>
				<div class="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
					<img
						src="/images/blur-02.svg"
						alt="blur"
						class="max-w-none"
					/>
				</div>
				<div class="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
					<img
						src="/images/blur-01.svg"
						alt="blur"
						class="max-w-none"
					/>
				</div>
			</div>
		</div>

		<div class="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
			<div class="text-center">
				<a
					href="/"
					class="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4 rounded-full"
				>
					<img
						src="/images/icon-title.svg"
						alt="icon"
					/>
					<span class="hero-subtitle-text"> Lorem ipsum dolor sit amet </span>
				</a>
				<h1
					class="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h1>
				<p class="max-w-[500px] mx-auto mb-9 font-medium md:text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
					quisquam adipisci expedita magnam. Modi ab dolorum ratione voluptates,
					reprehenderit fuga rem.
				</p>
				<NuxtLink
					to="/preparation"
					class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
				>
					Get Started
				</NuxtLink>
			</div>
		</div>
		<!-- <div
			class="mt-16"
			data-wow-delay="0.1s"
		>
			<img
				class="mx-auto"
				src="/images/hero.svg"
				alt="hero"
			/>
		</div> -->
	</section>
</template>
