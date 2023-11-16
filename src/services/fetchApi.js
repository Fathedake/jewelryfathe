//import { cookies } from "next/headers";
import {/* authApi,*/ appApi } from "./baseFetch";
//const token=cookies().get('gestionnaire')
export const loginApi = async (data) =>
    await appApi.post("/auth/login",
        data,);
export const registerApi = async (data) =>
    await appApi.post(`/auth/register`, data
    )
/*export const logoutApi = async () =>
    await appApi.post(`/auth/signout`,
    );


export const registerApi = async (data) =>
    await appApi.post(`/auth/register`,data
    )



export const getUser = async (url,params = {}) =>
    await appApi.get("/v1"+url,{ params:params }
    )

 export const updateUserApi= async (url, data,params) =>
    await appApi.put("/v1"+url, data,{ params:params }
    )

export const getContacts = async (url, params) =>
    await appApi.get("/v1"+url, { params:params }
    )
export const addContactApi = async (url, data,params) =>
    await appApi.post("/v1"+url, data, { params:params }
    )
    export const updateContactApi = async (url, data,params) =>
    await appApi.put("/v1"+url, data,{ params:params }
    )

    export const deleteContactApi = async (url,data,params) =>
    await appApi.delete("/v1"+url,{data,params},
    )*/

