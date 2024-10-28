

import ReduxProvider from "@/store/ReduxProvider"
import AddToBasket1 from "./AddToBasket1"
export default function AddToBasket1Wrapper() {

    return <>
        <ReduxProvider>
            <AddToBasket1 />
        </ReduxProvider>
    </>
}