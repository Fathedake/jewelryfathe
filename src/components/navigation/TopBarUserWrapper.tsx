"use client"
import dynamic from "next/dynamic";
import ReduxProvider from "@/store/ReduxProvider";
const TopbarUser = dynamic(() => import("./TopbarUser"), { ssr: true,})
export default function TopBarUserWrapper() {

    return <>
        <ReduxProvider>
            <TopbarUser />

        </ReduxProvider>
    </>

}