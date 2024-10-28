

import { groq } from 'next-sanity'
import { readClient } from '@/lib/sanity/sanity'
import { CategoryProd } from '@/components/products/Product'
import { Card } from 'antd';
const queryCat = groq`*[_type == "categoryProd"]{
    _id,
    title,
    "slug":slug.current,
    description,
    images,
  }`
import Link from 'next/link';
import { urlFor } from '@/lib/sanity/sanity';
import {Image as Image1} from 'antd';
export default async function CategoriesPage(){
    const categories:Array<CategoryProd> = await readClient.fetch(queryCat);
    if (categories) {
    return <>
    <div>
        <Card title={<h1>Toutes les catégories</h1>}>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          categories.map((item) => {
            return <>
              <div className="flex flex-row items-center justify-center">
               <Link href={"/home/categories/"+item.slug}>
               <Card bordered className='mx-2 my-2'>
                  <div className="">
                 <Image1
                    src={urlFor(item.images[0]).url()
                      }
                    alt="Image de lacatégorie"
                    width={150}
                    height={200}
                    className="rounded"
                    preview={false}
                />
                  </div>
                  <div className="">
                    {item.title}
                  </div>
                </Card>
               </Link>
              </div>
            </>
          })
        }
      </div>
      </Card>
      </div>
    </>
    }
}