//onClick={async ()=>{await dispatch(addToCart({product,quantity})); openNotificationInfo("Succès de l'opération","Vous venez d'ajouter un produit au panier avec succès");

"use client"
import { useAppDispatch } from "@/store"
import { addToCart } from "@/store/slices/cartSlice"
import { AddToCartIcon } from "../utils/Icons/basket-icon"
import { openNotificationInfo } from "../utils/Others/notifications"
import ProductContext from "@/lib/contexts/ProductContext"
import { useContext } from "react"
import { ProductI } from "../products/Product"
export default function AddToBasket1(/*{prod}:{prod:ProductI}*/) {

    const product=useContext(ProductContext);
    const dispactch=useAppDispatch()
    return <>
   <span onClick={(e)=>{  e.preventDefault(); dispactch(addToCart({product:product,quantity:1})); openNotificationInfo("Succès de l'opération","Vous venez d'ajouter un produit au panier avec succès");
   }}> <AddToCartIcon  /></span>
    </>
}