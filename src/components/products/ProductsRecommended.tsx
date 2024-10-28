


import { readClient } from "@/lib/sanity/sanity";
import Card from "antd/es/card/Card"
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/sanity";
import { PortableText } from '@portabletext/react'
import { ptComponents } from "@/lib/sanity/sanity";
import { ProductI } from "./Product";
import Product from "./Product";
import BoxTitle from "../utils/Others/Box-title-1";
//récupérer les 08 premiers produits ayant les plus haut pourcentage  de promotion
const query = groq`*[_type == "product"  && defined(pricing.retail) && defined(pricing.sale)]{
    _id,
    name,
   "slug":slug.current,
    description,
    total_reviews,
    average_review,
    pricing,
    public,
    tags,
    subcategories,
    images,
    "solding_percent":round(((pricing.retail-pricing.sale)* 100 )/(pricing.retail),0),
   "primary_category":primary_category->{title,"slug":slug.current,images,description}
  } | order(solding_percent desc)[0..7]`

export default async function ProductsRecommended() {
    const prods = await readClient.fetch(query);
    return <>
        <div className="w-full ">

            <Card className='my-2' bordered={false} >
                <div className="flex flex-col place-items-center justify-center">
                    <BoxTitle title="Produits recommandés" />
                </div>
                <div className="w-full">
                    {prods.length != 0 ? <div className="w-full flex md:flex-row flex-wrap justify-center items-center">

                        {prods.map((prod: ProductI) => {
                            return <div key={prod._id}>

                                <Product prod={prod} />
                            </div>

                        })}
                    </div> : <div></div>}
                </div>
            </Card>
        </div>
    </>
}