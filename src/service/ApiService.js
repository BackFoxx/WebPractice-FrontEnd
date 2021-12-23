
import axios from "axios";
import { API_BASE_URL } from "../app-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    return axios({
        method: `${method}`,
        url: `${API_BASE_URL}`+`${api}`,
        data: request,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then((response) => {
        return response;
    })
    .catch((error) => {
        if(error.status === undefined) {
            if(error.response.status === 403) {
                window.location.href = "/login";
            }
        } else {
            if(error.status === 403) {
                window.location.href = "/login";
            }
        }
    })
}

export function signin(userDTO) {
    return (
        call("/auth/signin", "post", userDTO).then((res) => {
        if(res.data.token !== null) {
            localStorage.setItem(ACCESS_TOKEN, res.data.token);
            window.location.href ="/";
        }
        }).catch((error) => {
            alert("로그인 실패");
            window.location.href = "/login";
        } ))
}