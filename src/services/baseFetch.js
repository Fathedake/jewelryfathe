import axios from "axios";
//import configBaseUrlApi from '../config/backend/index'
import configBaseUrlFront from "@/config/front";
export function createAxios(options = {}) {
    return axios.create({
        ...options
    });
}

// Pour accéder à l'api de l'authentification sur notre serveur backend
/*export const authApi = createAxios({
    baseURL: configBaseUrlApi  + '/auth',
    //origin:"http://localhost:8090/*",
    withCredentials:true,
   // credentials: 'include',
});*/

// Pour accéder l'api des autres ressources (contacts,...) sur notre serveur backend
export const appApi = createAxios({
    baseURL: "http://localhost:3000/api",
    //withCredentials:true
});




