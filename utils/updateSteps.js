import axios from "axios"

export const updateSteps =  async (data) => {
const url = useRuntimeConfig().public.API_BASE_URL + 'MyInterviewAdvisor/public/api/update_step'

    return await axios(url, {
        method: 'POST',
        data,
        headers: {
            ...useRequestHeaders(),
            Authorization: `Bearer ${getCookie('access_token')}`
        },
    }).then(async (res) => {
        await Toast.fire({
            icon: 'success',
            text: 'Successfully process'
        })
        return res.data
    }).catch((error) => {
        Toast.fire({
            icon: 'error',
            text: "Something went wrong!"
        })
        return error
    })
}
