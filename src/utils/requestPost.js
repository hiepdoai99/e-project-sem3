import axios from "axios";
const $ax = axios.create({
    baseURL: "http://localhost:5180/api/",
    timeout: 20000,
});

$ax.interceptors.request.use(
    (config) => ({
        ...config,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data"
        },
    }),
    (error) => Promise.reject(error)
);

$ax.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
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
export { $ax };
