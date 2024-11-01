
import { readClient } from "@/lib/sanity/sanity";
import { groq } from "next-sanity";
import { CategoryProd} from "./Product";
import BoxTitle from "../utils/Others/Box-title-1";
import Card from "antd/es/card/Card";
//récupérer les 08 premiers produits ayant les plus haut pourcentage  de promotion
const query1 = groq`*[_type == "categoryProd"  && defined(slug)]{
    _id,
    title,
   "slug":slug.current,
    description,
    images,
    "products": *[_type=='product' && references(^._id)]{
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
  }
  }`

import CategoryProducts from "./CategoryProducts";
export default async function NewsProducts() {
    const categories = await readClient.fetch(query1);
    return <>
        <div>

            <Card className='my-2' bordered={false} >
                <div className="flex flex-col place-items-center justify-center">
                    <BoxTitle title="Nouveaux produits" />
                </div>
                <div className="lg:p-10 p-5">
                    {categories.length != 0 ? <div>

                        {categories.map((cat: CategoryProd, index: number) => {
                            if(cat.products?.length!=0 ){
                                return <CategoryProducts category={cat} key={index} />
                            }
                            

                        })}
                    </div> : <div></div>}
                </div>
            </Card>
        </div>

    </>
}