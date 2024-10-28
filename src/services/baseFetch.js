import axios from "axios";
import configBaseUrlFront from "@/config/front";
export function createAxios(options = {}) {
    return axios.create({
        ...options
    });
}

export const appApi = createAxios({
    baseURL: "http://localhost:3000/api",
});




