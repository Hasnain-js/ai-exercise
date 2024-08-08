<script setup>
import axios from 'axios';
import { Toast } from '~/utils/toast';

const formData = ref([
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
const url = useRuntimeConfig().public.API_BASE_URL + 'MyInterviewAdvisor/public/api/login'
const onSubmit = () => {
	const data = new FormData()
	data.append("email", formData.value[0].value),
		data.append("password", formData.value[1].value),


		axios(url, {
			method: 'POST',
			headers: {
				...useRequestHeaders()
			},
			data: data
		}).then(async (res) => {
			await Toast.fire({
				icon: 'success',
				text: res.data?.message
			})
			setCookie("access_token", res.data.token, 365);
			useUserStore().data = res.data.user
			useUserStore().token = res.data.token
			useUserStore().isAuthenticated = true
			useRouter().push(`/exercise/${Number(res.data.user.step) + 1  || '1'}`)
		}).catch((error) => {
			const message = error.response?.data?.message
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
			<h2 class="text-white font-semibold text-center text-3xl">
				Ace your interview and win the job!
			</h2>
			<p class="text-white/90 font-medium leading-relaxed text-center text-xs">
				We've seen it time and again. The candidates who excel in job interviews are the ones who
				prepare. Preparation doesn't mean reading an article or two. It means being intentional
				about crafting your answers, designing your examples, and above all, practicing.
			</p>
			<p class="text-white/90 font-medium leading-relaxed text-center text-xs">
				We've made it simple.
			</p>
		</template>
		<template #body>
			<div class="max-w-lg mx-auto">
				<div class="text-center">
					<h1 class="mt-3 text-black font-bold text-4xl capitalize">Sign in</h1>
				</div>
				<div class="mt-8">
					<form @submit.prevent="onSubmit">
						<div v-for="field in formData" :key="field.name" class="mt-6">
							<div class="flex justify-between mb-2">
								<label :for="field.name" class="text-sm font-semibold text-black">{{ field.label
									}}</label>
								<!-- <a href="#"
								class="text-sm text-gray-500 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot
								password?</a> -->
							</div>
							<input :type="field.type" :required="field.required" v-model="field.value"
								:name="field.name" :id="field.name" :placeholder="field.placeholder"
								class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
							<p class="text-sm text-gray-500 mt-1">
								{{ field.errorMessage }}
							</p>
						</div>

						<div class="mt-6 w-full">
							<button type="submit"
								class="w-fit block ml-auto px-12 py-2 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50">
								Sign in
							</button>
						</div>

					</form>

					<p class="mt-6 text-sm text-center text-gray-500">Don&#x27;t have an account yet?
						<NuxtLink to="/auth/signup"
							class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign
							up
						</NuxtLink>
						.
					</p>
				</div>
			</div>
		</template>
	</Layout>
</template>
