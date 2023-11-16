import { createContext } from "react";
import { ProductI } from "@/components/products/Product";
const ProductContext=createContext<ProductI>(null);
export default  ProductContext;