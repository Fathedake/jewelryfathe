import configDev from "./index.dev";
import configProd from "./index.prod";

const configBaseUrlFront = process.env.NEXT_PUBLIC_NODE_ENV==="production" ? configProd.baseUrl : configDev.baseUrl; 
export default configBaseUrlFront;
