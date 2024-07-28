<script setup>
import axios from 'axios';
import { Toast } from '~/utils/toast';
definePageMeta({
	layout: false
})
const formData = ref([
	{
		label: "Full name",
		name: "full_name",
		type: 'text',
		placeholder: "John doe",
		errorMessage: "Please enter your full name.",
		value: "",
		required: true,
		isValid: false,
	},
	{
		label: "Email Address",
		name: "email",
		type: 'email',
		placeholder: "email@email.com",
		errorMessage: "Please enter a correct email.",
		value: "",
		required: true,
		isValid: false,
	},
	{
		label: "Password",
		name: "password",
		type: "password",
		placeholder: "Min 8 character",
		errorMessage: "Password must contain at least 1 uppercase, 1 lowercase character and one digit.",
		value: "",
		required: true,
		isValid: false,
	}
])
const url = useRuntimeConfig().public.API_BASE_URL + 'MyInterviewAdvisor/public/api/register'
const onSubmit = () => {
	const data = new FormData()
		data.append("name", formData.value[0].value),
		data.append("email", formData.value[1].value),
		data.append("password", formData.value[2].value),


		axios(url, {
			method: 'POST',
			headers: {
				...useRequestHeaders()
			},
			data: data
		}).then( async() => {
			await Toast.fire({
				icon: 'success',
				text: 'User Create Successfully'
			})
			useRouter().push("/auth/signin")
		}).catch((error) => {
			const message = error.response.data.message

			Toast.fire({
				icon: 'error',
				text: message
			})
		})
}

</script>
<template>
	<Layout>
		<template #header>
			<h2 class="text-white font-semibold text-center text-4xl">
				Ace Every Interview, Get Hired Faster
			</h2>
			<ul class="flex justify-between gap-2">
				<li class="text-white/90 font-medium leading-relaxed text-center text-sm">
					<img src="/images/check.svg" class="mx-auto mb-2" alt="check icon" width="24" height="24">
					Learn how to sell yourself and easily stand out.
				</li>
				<li class="text-white/90 font-medium leading-relaxed text-center text-sm">
					<img src="/images/check.svg" class="mx-auto mb-2" alt="check icon" width="24" height="24">

					Know
					exactly what to expect, and how to answer questions
				</li>
				<li class="text-white/90 font-medium leading-relaxed text-center text-sm">
					<img src="/images/check.svg" class="mx-auto mb-2" alt="check icon" width="24" height="24">

					Get
					immediate AI feedback in an interactive interview simulator.
				</li>
			</ul>
		</template>
		<template #body>
			<div class="text-center">
				<h1 class="mt-3 text-black font-bold text-4xl capitalize">Create Account</h1>
			</div>
			<div class="mt-8">
				<form @submit.prevent="onSubmit">
					<div class="mt-6" v-for="field in formData" :key="field.name">
						<div class="flex justify-between mb-2">
							<label :for="field.name" class="text-sm font-semibold text-black">{{ field.label }}</label>
							<!-- <a href="#"
											class="text-sm text-gray-500 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot
											password?</a> -->
						</div>

						<input :type="field.type" :required="field.required" v-model="field.value" :name="field.name"
							:id="field.name" :placeholder="field.placeholder"
							class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
						<p class="text-sm text-gray-500 mt-1">
							{{ field.errorMessage }}
						</p>
					</div>

					<div class="mt-6 w-full flex justify-end">
						<button type="submit"
							class="w-fit px-12 py-2 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
							Sign up
						</button>
					</div>

				</form>

				<p class="mt-6 text-sm text-center text-gray-500">Do you have an already account?
					<NuxtLink to="/auth/signin"
						class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign
						in
					</NuxtLink>
				</p>
			</div>
		</template>
	</Layout>
</template>
