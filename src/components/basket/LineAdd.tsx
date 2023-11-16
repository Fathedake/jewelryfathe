"use client"
import { Button, Space, ConfigProvider,Typography } from "antd"
import { ProductI } from "../products/Product"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import { useState } from "react";
import { BasketIcon,BasketIconGlobal } from "../utils/Icons/basket-icon";
import Image from "next/image";
import { incrementQuantity } from "@/store/slices/cartSlice";
import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/slices/cartSlice";
import { openNotificationInfo } from "../utils/Others/notifications";
const { Text, } = Typography;
export default function LineAdd({ product }: { product: ProductI }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch=useAppDispatch();
  function incrementQuantity(){
     setQuantity((state)=>state+1)
  }
  function decrementQuantity(){
    if(quantity!=0){
      setQuantity((state)=>state-1)
    }
  } 
  return <>
    <ConfigProvider theme={{
      token: {
        fontSize: 16,
        colorPrimary: '#e4be88',
      },
      components: {
        Button: {
          colorPrimary: '#e4be88',
          algorithm: true,
        },
      },
    }}>
      <div className="w-full">
        <div className="add-to-cart-box flex items-center justify-center w-full">
          <div>
          </div>
          <Space.Compact size="large">
            <Button onClick={()=>{incrementQuantity()}}>
              <PlusOutlined />
            </Button>
            <Button >
              {quantity}
            </Button>
            <Button onClick={()=>{decrementQuantity()}}>
              <MinusOutlined />
            </Button>
          </Space.Compact>
          <div className="ms-2 w-full py-4" style={{/*maxWidth:350*/ }}>
            <Button disabled={quantity==0 ? true:false} className="bg-doree text-white" block size="large" onClick={async ()=>{await dispatch(addToCart({product,quantity})); openNotificationInfo("Succès de l'opération","Vous venez d'ajouter un produit au panier avec succès");
    }}>
            <span><BasketIconGlobal className="block md:inline-block"/></span><span className="font-bold mx-1" style={{color:'white'}}> Ajouter </span> <span className="font-bold mx-1"> {product.pricing?.sale == 0 || product.pricing?.sale == undefined ? <></> : <>  <span style={{ fontSize: '19px', fontWeight: 600, color: 'white' }} className="">
                                {product.pricing?.sale + " €"}
                            </span> </>}
                            {product.pricing?.retail ? <span className=" ml-2" style={{ fontSize: '19px', fontWeight: 500 }}>
                        {product.pricing?.sale == 0 || product.pricing?.sale == undefined ? <Text  className={`${"text-white"}`}>   {product.pricing?.retail + " €"}</Text> :<Text delete className={`${"text-white"}`}>   {"-"+product.pricing?.retail + " €"}</Text>} 

                            </span> : <span></span>}</span>
            </Button>
          </div>
        </div>
      </div>

    </ConfigProvider>
  </>
}