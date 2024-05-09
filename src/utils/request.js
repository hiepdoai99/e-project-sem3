import axios from "axios";
const $axios = axios.create({
    baseURL: "https://id.limcorp.vn/",
    timeout: 20000,
});

$axios.interceptors.request.use(
    (config) => ({
        ...config,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }),
    (error) => Promise.reject(error)
);

$axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
        const res = error.response;
        const status = res.status;
        if (status === 401) {
            localStorage.clear()
        } else {
            const message = error.response?.data?.Message;
            if (message) {
            }
            return Promise.reject(error);
        }
    }
);
export { $axios };
