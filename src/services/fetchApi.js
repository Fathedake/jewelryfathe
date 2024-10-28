
import { appApi } from "./baseFetch";

export const loginApi = async (data) =>
    await appApi.post("/auth/login",
        data,);
export const registerApi = async (data) =>
    await appApi.post(`/auth/register`, data
    )