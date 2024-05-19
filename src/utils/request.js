import axios from "axios";
const $axios = axios.create({
    baseURL: "http://localhost:5180/api/",
    timeout: 20000,
});

$axios.interceptors.request.use(
    (config) => ({
        ...config,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }),
    (error) => Promise.reject(error)
);

$axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
        console.log(error);
        const res = error.response;
        const status = res.status;
        if (status === 404){
            console.log("404")
        } else {
            const message = error.response?.data?.Message;
            if (message) {
            }
            return Promise.reject(error);
        }
    }
);
export { $axios };
