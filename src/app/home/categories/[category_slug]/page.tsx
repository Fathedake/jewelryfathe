

//"use client"
import { groq } from "next-sanity"
import Image from "next/image"
import { Image as Image1, Card } from "antd/lib";
import { readClient } from "@/lib/sanity/sanity";
import { urlFor } from "@/lib/sanity/sanity";
import styles from '@/components/utils/styles/category.module.css'
import { Skeleton, Typography } from 'antd';
import { ptComponents } from "@/lib/sanity/sanity";
import { PortableText } from "@portabletext/react";
import { ProductI } from "@/components/products/Product";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Subcategory } from "@/components/utils/Others/FiltersGroup1";
import FiltersGroup1 from "@/components/utils/Others/FiltersGroup1";
import useSWR, { SWRConfig } from 'swr'
//const FiltersGroup1 = dynamic(() => import('@/components/utils/Others/FiltersGroup1'), { ssr: true, loading: () => <div>Chargement</div>, })


const { Text } = Typography;
export default async function PageCategory({ params }: { params: { category_slug: string } }) {
  // const [filters, setFilters] = useState<Array<Subcategory>>([]);
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

  //const { data: categoryData, isLoading: isLoadingCat, error: errorCat } = useSWR(['/queryCatCurrent'], async () => await readClient.fetch(queryCat, { slug: params.category_slug }), /*{ refreshInterval: 3000 }*/);
  // console.log(response1)
  //const category = categoryData;
  const products: Array<ProductI> = await readClient.fetch(queryProdCat1, { category_name: category.title });
  //const { data: productsData, isLoading: isLoadingProds, error: errorProds } = useSWR(['/queryProdsCat'], async () => await readClient.fetch(queryProdCat, { category_name: categoryData.title }), /*{ refreshInterval: 3000 }*/);
  //const products: Array<ProductI> = productsData;

  //const {data : subCatData,isLoading:isLoadingSubCat,error:errorSubCat,mutate:mutateSubCat}= useSWR(['/querySubCat'], async () =>await readClient.fetch(queryProdCat, { category_name: category.title }), /*{ refreshInterval: 3000 }*/);

  // const subcategories: Array<Subcategory> = await readClient.fetch(querySubcat);

  //setSubData(subcategories)
  // console.log(subcategories)
  // let initFilters: Array<Subcategory> = [];


  //console.log(products)
  // console.log(subcategories)
  if (category) {
    // setSubData((state)=>subcategories)
    //  const tmp=subcategories
    /* tmp.map((item) => { item.checked = false, 
       initFilters.push(item) })*/
    // setSubData(initFilters)
    return <>
      <div className="">
        <h1 className={styles.cat_title}>
          {category.title}
        </h1>
      </div>
      <div className="relative hidden lg:block w-full" style={{width: '100%',}}>
        <div className="" >
          <Image1
            src={urlFor(category.images[0]).url()
            }
            style={{ height: '450px', width: '100vw', marginTop: '20px' }}
            alt="Image du produit"
            className="block w-full"
            preview={false}


          />

        </div>

        {/*<div >
          <Image
            src={urlFor(category.images[0]).url()
            }
            style={{ height: '450px', width: '100vw', marginTop: '20px' }}
            alt="Image du produit"
            className="inline-block w-full"
            width={300}
            height={450}
            quality={100}

          />

        </div>
          */}
        



      </div>
      {products ? <div> <div className="">
        {/* <SWRConfig
          value={{
            //dedupingInterval: 100,
           // refreshInterval: 100,
            fallback: {"/queryProdCat": products,},}}
          >  </SWRConfig> */}
        <FiltersGroup1 cat_name={category.title} />
      </div ></div> : <div></div>}
    </>
  }/* else {
    return <Skeleton style={{ width: '100%', height: '100%',margin:'20px' }}>


    </Skeleton>
  }*/

  /*if(subCatData){
   mutateSubCat('/querySubCat')
   return <>
   <div className="relavive">
   <div  className="fixed">     
<FiltersGroup1 setSubData={subCatData} subData={subData}/>
   </div>
</div>
</>
 }else if(isLoadingSubCat){
   return <>
    <Skeleton />
   </>
  }*/
  /*else if(errorCat || errorProds){
   console.log(errorCat,errorProds)
   return <>
   Erreur de chargement
   </>
  }*/
  /*else if(isLoadingCat){
   return <>
    <Skeleton />
   </>
  }else if(errorCat){
    return <>
    <div>
      Erreur de chargement des catégories
    </div>
    </>
  }

  if(productsData){
    return <> <div>
      Produits
    </div>
    </>
  }else if(isLoadingProds){
    return <>
     <Skeleton />
    </>
   }else if(errorProds){
     return <>
     <div>
       Erreur de chargement des catégories
     </div>
     </>
   }

  if(subCatData){
    return <>
    <div className="relavive">
    <div  className="fixed">     
 <FiltersGroup1 setSubData={subCatData} subData={subData}/>
    </div>
</div>
</>
  }else if(isLoadingSubCat){
    return <>
     <Skeleton />
    </>
   }else if(errorSubCat){
     return <>
     <div>
       Erreur de chargement des catégories
     </div>
     </>
   }*/
}