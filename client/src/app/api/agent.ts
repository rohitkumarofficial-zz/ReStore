import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const sleep = () => new Promise(resolve => {
    setTimeout(resolve, 500);
})
axios.defaults.baseURL = 'http://localhost:5000/api/';

// Extract data from response body
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response;
}, (error: AxiosError) => {
    const { data, status } = error.response!;

    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key])
                    }
                }

                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 404:
            toast.error(data.title);
            break;
        case 500:
            toast.error(data.title);
            break;

        default:
            break;
    }
    return Promise.reject(error.response)
})

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Catelog = {
    list: () => request.get('products'),
    details: (id: number) => request.get(`products/${id}`),
    post: (body: {}) => request.post(`products`, body),
    put: (body: {}) => request.put(`products`, body),
    delete: (id: number) => request.delete(`products/${id}`)
}

const agent = {
    Catelog
}

export default agent;