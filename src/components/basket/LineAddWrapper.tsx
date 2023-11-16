"use client"
import ReduxProvider from "@/store/ReduxProvider";
import LineAdd from "./LineAdd";
import { ProductI } from "../products/Product";
export default function LineAddWrapper({product}:{product:ProductI}){

    return <>
    <ReduxProvider>
    <LineAdd product={product} />
    </ReduxProvider>
    </>
}