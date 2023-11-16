

import { useAppDispatch } from "@/store"
import { useAppSelector } from "@/store"
import { ShoppingOutlined } from "@ant-design/icons"
import { useState } from "react"
import BasketItem from "./BasketItem"
import { Card } from "antd"
import BasketProduct from "./BasketProduct"
import { Form, Input, Space, Button } from "antd"
import { useRouter } from "next/navigation"
import Link from "next/link"
import clsx from 'clsx'
export default function Basket1({ directionBase="horizontal" }: { directionBase?: "vertical" | "horizontal" }) {
  const cart = useAppSelector((state) => state.cart.cart)
  const router = useRouter();
  const getTotalPrix = () => {
    let prix = 0
    cart.forEach(item => {
      let productPrice = item.product.pricing.sale ? item.product.pricing.sale : item.product.pricing.retail
      prix += (productPrice * item.quantity)
    })
    return prix
  }
  return <>
    <div className={clsx(
      'flex flex-col lg:flex-row flex-wrap w-full',
      {
        'lg:flex-col': directionBase === "vertical",
       // 'block': order.payment.mode_payment.value === 1
      },
    )} style={{ padding: '25px', boxSizing: 'border-box' }}>
      <Card bordered={true} className="w-full order-1  shrink-0 grow-0 lg:basis-3/4" title={<div className="flex flex-row flex-wrap  text-center items-center justify-center" style={{ boxSizing: 'border-box' }}>
        <p className="text-center"><span className="text-center" style={{ fontWeight: 700, fontSize: '22px', padding: '15px' }} >Mon panier</span><ShoppingOutlined style={{ fontSize: '25px' }} /> <span></span></p>
      </div>} >

        <div>
          {
            cart.length != 0 ? <>
              {cart.map((item) => {
                return <>
                  <BasketProduct directionBase={directionBase} product={item.product} quantity={item.quantity} />
                </>
              })}
            </> : <><div className="flex flex-row items-center justify-center ">
              <p>Le panier est vide {":)"}</p>
            </div></>
          }
        </div>

      </Card>
      <Card bordered={false} className="w-full gap-1 lg:sticky lg:top-64 lg:h-screen lg:basis-1/4 flex order-2" style={{ boxSizing: 'border-box', background: '#eff7f1' }}>

        <div className="flex flex-row items-center justify-between w-full">
          <Input
            size="large"
            type="text"
            className="w-full grow-1"
            style={{ height: '50px', width: '100%', borderWidth: '1px', margin: '5px 0px' }}
            placeholder="Code de promotions"
          />
          <Button danger className="shrink-0 ms-1 ml-1" style={{ height: '50px', width: '100px', borderWidth: '1px', margin: '5px 0px' }}>
            Appliquer
          </Button>
        </div>
        <Link href="/home/ordersValidate" className={clsx(
      'w-full ',
      {
        'hidden': directionBase === "vertical",
        'inline-block': directionBase === "horizontal",
      },
    )} >
          <Button disabled={getTotalPrix() == 0 ? true : false} size="large" className="black-2 " style={{ height: '50px', borderWidth: '1px', margin: '5px 0px' }} block>
            Valider mon panier
          </Button>
        </Link>

        <div className="flex flex-wrap flex-row items-center justify-between">
          <span className=" text-lg" >Total :</span>
          <span className="font-bold text-lg">{getTotalPrix()} {" €"}</span>
        </div>

      </Card>
    </div>
  </>
}