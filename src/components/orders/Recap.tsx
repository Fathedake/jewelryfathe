
"use client"
import OrderContext from "@/lib/contexts/OrderContext"
import { useState } from "react"
import { useAppSelector } from "@/store"
import Coordeonnees from "./Coordonnees"
import Payment from "./Payment"
import { Form, Button, Input } from "antd"

export type Order = {
  coordonnees: {
    lastname: string,
    firstname: string,
    email: string,
    address?: string,
    compl_address?: string,
    socity?: string,
    country?: string,
    tel?: string,
    code_postal?: string,
    ville?: string,
  }
  payment: {
    mode_livraison: string,
    mode_payment: object,
  }
}
import { ConfigProvider } from "antd"
import BasketResume from "./BasketResume"
import { useRouter } from "next/navigation"
export default function Recap() {
  const user = useAppSelector((state) => state.auth.user)
  const [order, setOrder] = useState<Order>({
    coordonnees: { ...user, "address": "", "compl_address": "", "socity": "", "code_postal": "", "country": "", "tel": "", "ville": "" },
    payment: { "mode_livraison": "", "mode_payment": {} }
  })
  const router=useRouter();
  const onFinish = (values: any) => {
   // console.log('values:', values);

  };

  const onFinishFailed = (errorInfo: any) => {
    router.push('/home/')
   // console.log('Failed:', errorInfo);
  };

  return <>
    <div className="w-full flex lg:flex-row lg:justify-between lg:items-center flex-col items-start justify-center">
      <ConfigProvider
        theme={{
          token: {
            //colorPrimary: "#e4be88",
            //colorText:'#e4be88'
            // borderRadius: data.borderRadius,
          },
          components: {
            /* Input: {
               colorPrimary: "#1677ff",
               algorithm: false
             },*/
          },
        }}
      >
        <OrderContext.Provider value={{ order, setOrder }}>
          <Form
            name="order"
            className='w-full my-4 mx-4'
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ boxSizing: 'border-box' }}
          >
            <div className="flex lg:flex-row flex-col flex-nowrap w-full">
              <Coordeonnees />
              <Payment />
              <BasketResume>
                <div className='flex items-center justify-between' style={{ marginTop: '10px' }}>
                  <Button type="primary" size="large" block htmlType='submit' className="doree-2 font-bold w-full" style={{ color: 'white' }}>
                    Passer la commande
                  </Button>
                </div>
              </BasketResume>
            </div>


          </Form>
        </OrderContext.Provider>
      </ConfigProvider>
    </div>
  </>
}