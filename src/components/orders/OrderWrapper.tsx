
"use client"
import Recap from "./Recap";
import ReduxProvider from "@/store/ReduxProvider";
export function OrderWrapper(){

    return <>
    <ReduxProvider>
    <Recap />
    </ReduxProvider>
    
    </>


}