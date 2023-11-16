import configDev from "./index.dev";
import configProd from "./index.prod";

//à revoir cette config car process ne prend pas
const configBaseUrlApi = process.env.NEXT_PUBLIC_NODE_ENV=== "production" ? configProd.apiUrl : configDev.apiUrl; 
export default configBaseUrlApi;
