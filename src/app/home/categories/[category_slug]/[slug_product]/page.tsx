
import { groq } from "next-sanity"
import { readClient } from "@/lib/sanity/sanity";
import { Breadcrumb, } from "antd/lib";
import { urlFor } from "@/lib/sanity/sanity";
import ImgGroupPreview from "@/components/utils/Others/Img-GroupView";
import { Image, Button } from "antd";
import ReviewComponent from "@/components/utils/Review/ReviewComp";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "@/lib/sanity/sanity";
import LineAddWrapper from "@/components/basket/LineAddWrapper";
export default async function PageProduct({ params }: { params: { category_slug: string, slug_product: string, } }) {
  const query0 = groq`*[_type == "product" && slug.current==$slug ]{
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
   "primary_category":primary_category->{title,images,description}
  }[0]`
  const prod = await readClient.fetch(query0, { slug: params.slug_product },);

  return <>
    <div className="">
      <Breadcrumb
        style={{ paddingLeft: '80px', paddingTop: 40 }}
        separator=""
        items={[
          {
            title: 'Accueil',
            href: '/home'
          },
          {
            type: 'separator',
            separator: '>',
          },
          {
            href: "/home/categories/" + params.category_slug,
            title: prod.primary_category.title,
          },
          {
            type: 'separator',
            separator: '>',

          },
          {
            title: prod.name
          },

        ]}
      />
    </div>
    <div className="w-full h-full padding-112" style={{ paddingTop: 40 }} >
      <div className="margin-124 flex flex-col lg:flex-row gap-4 items-center md:justify-start justify-center md:items-start w-full h-full" style={{padding: '0 15px',minHeight: '460px'}}>
        <div className="wrapper-imgs-1 flex flex-col md:flex-row items-center justify-center bg-gray-100 w-full">
          <div className="flex flex-col overflow-y-auto mx-2 order-last md:order-first img-mini" >

              {prod.images.slice(1).map((img, key) => {
                return (

                  <Image
                    key={key}
                    src={urlFor(img).url()}

                    alt={`Image du produit ${img.name}`}
                    className="inline-block my-1 h-full w-full"
                  />


                );
              })}


          </div>
          <div style={{ boxSizing:'border-box',}} className="relative shadow-sm z-10 md:order-last order-first md:mt-4 md:mb-4 md:mr-4" >
            {prod.solding_percent == 0 || prod.solding_percent == undefined ? <></> : <Button type="text" className="cursor-default absolute top-0 right-0 mr-2 mt-2 font-bold z-20" style={{ background: '#e4be88', color: 'white' }}>
              {"- " + prod.solding_percent + '%'}
            </Button>}
            <ImgGroupPreview images={prod.images} >
            <Image
              src={urlFor(prod.images[0]).url()
              }
              alt="Image du produit"
              className="img-principale-details"

            />
            </ImgGroupPreview>


          </div>
        </div>
        <div className="desc-details-1 flex flex-col justify-start items-start  px-3 py-3 w-full ">
          <div className=" " >
            <span style={{ fontWeight: 600, fontSize: 28 }}> {prod.name}</span>
          </div>
          <div>
            <ReviewComponent average_review={prod.average_review} />
          </div>
          <div style={{ fontSize: '17px' }} className="">
            <PortableText

              value={prod?.description || null}
              components={ptComponents}

            />
          </div>
          <div className="w-full">
           <LineAddWrapper  product={prod} />
          </div>
        </div>
      </div>
    </div>
  </>
}