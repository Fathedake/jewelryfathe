"use client"

import ReduxProvider from "@/store/ReduxProvider"
import Basket1 from "./Basket1"
export default function BasketWrapper(){


    return <>
   <ReduxProvider>
<Basket1 />
   </ReduxProvider>
    </>
}