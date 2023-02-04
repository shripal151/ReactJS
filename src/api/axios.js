import axios from "axios"

export const api = axios.create({
    baseURL: 'http://o2ebrands.shripalzala.com'
})

export const getPosts = async () => {
    const response = await api.get('/employee_data')
    return response.data
}