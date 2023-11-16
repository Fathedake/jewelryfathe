import ReduxProvider from "@/store/ReduxProvider"
import Basket1 from "../basket/Basket1"
export default function BasketResume({ children }: { children: React.ReactNode }) {


    return <>
        <div className="mx-3 flex flex-col w-full p-1">
            <div className="w-full">
            <div className="inline-flex items-center justify-center text-center bg-transparent" style={{ color: "#e4be88" }}>
                <span style={{ fontWeight: 800, }} className="text-6xl">3</span>
                <span className="font-bold text-lg ">Récapitulatif</span>
            </div>
                <ReduxProvider>
                    <Basket1 directionBase="vertical" />
                </ReduxProvider>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    </>
}