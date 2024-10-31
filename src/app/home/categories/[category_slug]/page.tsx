
import { groq } from "next-sanity"
import { Image as Image1, Card } from "antd/lib";
import { readClient } from "@/lib/sanity/sanity";
import { urlFor } from "@/lib/sanity/sanity";
import styles from '@/components/utils/styles/category.module.css'
import { Typography } from 'antd';
import { ProductI } from "@/components/products/Product";
import FiltersGroup1 from "@/components/utils/Others/FiltersGroup1";
const { Text } = Typography;
export default async function PageCategory({ params }: { params: { category_slug: string } }) {
  const queryCat1 = groq`*[_type == "categoryProd" && slug.current ==$slug]{
        _id,
        title,
        description,
        images,
      }[0]`
  const queryProdCat1 = groq`*[_type == "product" && primary_category->title==$category_name]{
        _id,
    name,
    "slug":slug.current,
    description,
    total_reviews,
    average_review,
    pricing,
    public,
    tags,
    "subcategories":subcategories[]->{title,type,description},
    images,
    "solding_percent":round(((pricing.retail-pricing.sale)* 100 )/(pricing.retail),0),
    "primary_category":primary_category->{title,images,description}
    }`
  const category = await readClient.fetch(queryCat1, { slug: params.category_slug });
  const products: Array<ProductI> = await readClient.fetch(queryProdCat1, { category_name: category.title });
  if (category) {
    return <>
      <div className="text-center">
        <h1 className={styles.cat_title}>
          {category.title}
        </h1>
      </div>
      <div className="relative hidden lg:block w-full" style={{width: '100%',}}>
        <div className="" >
          {/*<Image1
            src={urlFor(category.images[0]).url()
            }
            style={{ height: '450px', width: '100vw', marginTop: '20px' }}
            alt="Image du produit"
            className="block w-full"
            preview={false}


          />
          */}

        </div>
      </div>
      {products ? <div> <div className="">
        <FiltersGroup1 cat_name={category.title} />
      </div ></div> : <div></div>}
    </>
  }
}