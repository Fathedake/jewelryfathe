import { ItemCart } from "@/store/slices/cartSlice"
import Card from "antd/es/card/Card"
import BasketProduct from "./BasketProduct"
import { useAppSelector } from "@/store"
export default function BasketItem({ item }: { item: ItemCart }) {
    const cart = useAppSelector((state) => state.cart.cart)
    return <>
        <Card className="flex flex-col justify-start items-start  sm:flex-nowrap">
            <BasketProduct product={item.product} quantity={item.quantity} />
        </Card>


    </>
}