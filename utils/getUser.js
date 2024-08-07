import axios from "axios"

export const getUserData = async () => {
const url = useRuntimeConfig().public.API_BASE_URL + 'MyInterviewAdvisor/public/api/user'
    try {
       const response =  await axios(url, {
            method: 'GET',
            headers: {
                ...useRequestHeaders(),
                Authorization: `Bearer ${getCookie('access_token')}`

            },
        })
        return response.data.data
    } catch (error) {
        return error
    }
}
