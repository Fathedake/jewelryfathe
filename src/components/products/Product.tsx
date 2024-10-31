"use client"
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"
export type ProductI = {
    _id: string,
    name: string,
    slug: string,
    description: object,
    total_reviews: object,
    average_review: number,
    pricing: object,
    public?: string,
    tags?: Array<string>,
    solding_percent?: number,
    primary_category: CategoryProd,
    images: Array<ImageUrlBuilder>,
    subcategories?: object,
}
export type CategoryProd = {
    title: string,
    description: Object,
    slug:string,
    images: Array<ImageUrlBuilder>,
    products?:Array<ProductI>
}
import Image from "next/image"
import ReviewComponent from "../utils/Review/ReviewComp"
import { Badge, Card, Space, Button, Typography, Rate } from "antd"

import { urlFor } from "@/lib/sanity/sanity"
import { Span } from "next/dist/trace"
import { ShoppingCartOutlined } from "@ant-design/icons"
import Link from "next/link"
const { Text, } = Typography;
import { Button as Button1 } from "antd"
import ProductContext from "@/lib/contexts/ProductContext"
import AddToBasket1Wrapper from "../basket/AddToBasket1Wrapper"
export default function Product({ prod }: { prod: ProductI }) {

    return <>
   <ProductContext.Provider value={prod}>

    <Link href={"/home/categories/" + prod.primary_category.slug + "/" + prod.slug} >
            < div className="mx-1 my-1 relative cursor-pointer">
                <div style={{ width: 250, minHeight: 350 }} className="shadow-sm bg-white p-2">
                    {prod.solding_percent == 0 || prod.solding_percent == undefined ? <></> : <Button type="text" className="cursor-default absolute top-0 right-0 mr-2 mt-2 font-bold" style={{ background: '#e4be88', color: 'white' }}>
                        {"- " + prod.solding_percent + '%'}
                    </Button>}
                    <Space direction="vertical" className="gap-0">
                        <Image
                            src={urlFor(prod.images[0]).url()
                            }
                            style={{ width: 250, height: 250, }}
                            alt="Image du produit"
                            className="inline-block"
                            width={250}
                            height={250}
                            quality={100}
                            priority

                        />
                       <Button1 size="large" type="default" style={{ top: '200px', zIndex: '100', }} className=" absolute  right-0 mr-1 black-2" shape="circle" icon={<AddToBasket1Wrapper  />} />

                        <div className="relative bg-white" style={{ paddingRight: '20px', fontWeight: 'bold', fontSize: '17px', color: 'black' }}>
                            {prod.name}

                        </div>
                        <div className="flex flex-row" >
                            {prod.average_review == 0 || prod.average_review == undefined ? <></> : <ReviewComponent average_review={prod.average_review} />}
                        </div>
                        <div className="flex flex-row justify-start items-center" >
                            {prod.pricing?.sale == 0 || prod.pricing?.sale == undefined ? <></> : <>  <span style={{ fontSize: '16px', fontWeight: 600, color: 'black' }} className="mr-2">
                                {prod.pricing?.sale + " €"}
                            </span> </>}
                            {prod.pricing?.retail ? <span className="mr-2" style={{ fontSize: '14px', fontWeight: 500 }}>
                        {prod.pricing?.sale == 0 || prod.pricing?.sale == undefined ? <Text  className={`${"text-black"}`}>   {prod.pricing?.retail + " €"}</Text> :<Text delete className={`${"color-red-1"}`}>   {prod.pricing?.retail + " €"}</Text>} 

                            </span> : <span></span>}


                        </div>

                    </Space>

                </div>
            </div>
        </Link>
    </ProductContext.Provider>
       
    </>
}