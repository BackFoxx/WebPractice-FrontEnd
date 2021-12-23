
import axios from "axios";
import { API_BASE_URL } from "../app-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    return axios({
        method: `${method}`,
        url: `${API_BASE_URL}`+`${api}`,
        data: request
    })
    .then((response) => {
        console.log(response)
        if(!response.ok) {
            return Promise.reject(response);
        }
        return response;
    })
    .catch((error) => {
        console.log(error.status);
        if(error.status === 403) {
            window.location.href = "/login";
        }
    })
}

export function signin(userDTO) {
    const res = call("/auth/signin", "post", userDTO);
    return (function() {
        console.log(res);
        if(res.token) {
            console.log("성공");
            localStorage.setItem("ACCESS_TOKEN", res.token);
            window.location.href = "/";
    }})
}