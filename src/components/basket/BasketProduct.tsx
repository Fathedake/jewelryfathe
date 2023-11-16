import { ProductI } from "../products/Product";

import Image from "next/image";
import { Image as Image1 } from "antd";
import { Space, Button, message } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { urlFor } from "@/lib/sanity/sanity";
import { incrementQuantity, decrementQuantity, removeItem } from "@/store/slices/cartSlice";
import Link from "next/link";
import { useAppSelector } from "@/store";
import Item from "antd/es/list/Item";
import { useAppDispatch } from "@/store";
import { Typography } from "antd";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { DeleteOutlined } from "@ant-design/icons";
import ImgGroupPreview from "../utils/Others/Img-GroupView";
import {CloseOutlined } from "@ant-design/icons";
const { Text, } = Typography;
import { Card } from "antd";
import clsx from 'clsx'
export default function BasketProduct({ product, quantity, directionBase = "horizontal", }: { directionBase?: "vertical" | "horizontal", product: ProductI, quantity: number, imgHeight?: string }) {
    const [messageApi, contextHolder] = message.useMessage();
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };
    const cart = useAppSelector((state) => state.cart.cart)
    const dispatch = useAppDispatch()
    async function removeItemFunction() {
        await dispatch(removeItem({ _id: product._id }));
        /* messageApi.open({
             type: 'error',
             content: 'This is an error message',
           });*/
    }
    return <>
        <Card className="relative" >
            <div className="w-full flex gap-3 h-full flex-col md:flex-row  md:flex-nowrap md:items-center justify-center items-start md:justify-start">
                <div>
                    {/*<Image src={urlFor(product.images[0]).url()}
                        height={125}
                        width={100}
                        alt="Image du produit"
                        style={{ borderRadius: '6px' }}
                    />
                    */}
                    <ImgGroupPreview images={product.images}>
                        <Image1
                            /* height={125}
                             width={100}*/

                            src={urlFor(product.images[0]).url()}
                            style={{ borderRadius: '6px', height: directionBase == "horizontal" ? "125px" : "75px", width:  directionBase == "horizontal" ? "100px" : "70px"}}
                        />
                    </ImgGroupPreview>



                </div>
                <div className="flex flex-col justify-start items-start h-full self-start">
                    <Link href={"/home/" + product.primary_category.slug + "/" + product.slug} style={{ fontWeight: 600, fontSize: '18px', color: 'black' }}>
                        {product.name}</Link>


                    <div>
                        <div className="flex flex-row justify-start items-center" >
                            {product.pricing?.sale == 0 || product.pricing?.sale == undefined ? <></> : <>  <span style={{ fontSize: '16px', fontWeight: 600, color: 'black' }} className="mr-2">
                                {product.pricing?.sale + " €"}
                            </span> </>}
                            {product.pricing?.retail ? <span className="" style={{ fontSize: '14px', fontWeight: 500 }}>
                                {product.pricing?.sale == 0 || product.pricing?.sale == undefined ? <Text className={`${"text-black"}`}>   {product.pricing?.retail + " €"}</Text> : <Text delete className={`${"color-red-1"}`}>   {product.pricing?.retail + " €"}</Text>}

                            </span> : <span></span>}


                        </div>
                    </div>
                    <Space.Compact size="large" className="mt-1 mb-1">
                        <Button size="middle" icon={ <PlusOutlined  />} onClick={() => { dispatch(incrementQuantity(product)) }}>
                           
                        </Button>
                        <Button size="middle" className="text-center">
                            {quantity}
                        </Button>
                        <Button size="middle" className="" icon={<MinusOutlined  />} onClick={() => { dispatch(decrementQuantity(product)) }}>

                        </Button>
                    </Space.Compact>
                </div>
                <Button   onClick={removeItemFunction} className={clsx(
                    'absolute top-[5px] right-[3px]',
                    {
                        'hidden': directionBase == "horizontal",
                        'inline-block': directionBase == "vertical",
                    },)}  danger  icon={<CloseOutlined style={{fontSize:'15px'}} />} type="text" size={"middle"} />

                <Button onClick={removeItemFunction} className={clsx(
                    ' ms-auto me-2',
                    {
                        'inline-block': directionBase == "horizontal",
                        'hidden': directionBase == "vertical",
                    },)} type="primary" danger shape="round" icon={<DeleteOutlined />} size={"large"} />

            </div>
        </Card>
    </>
}