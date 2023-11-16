

import { groq } from 'next-sanity'
import { readClient } from '@/lib/sanity/sanity'
import { CategoryProd } from '@/components/products/Product'
import { Card } from 'antd';
import Image from 'next/image';
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
                {/*<Image1
            src={urlFor(item.images[0]).url()
            }
            alt="Image du produit"
            preview={false}
            width={80 }
            height={80}

          />
           <Image
                    src={urlFor(item.images[0]).url()
                      }
                    alt="Vercel Logo"
                    width={80}
                    height={80}
                    className="rounded"
                   // priority={false}
                    //quality={100}
                />
                */}
               <Link href={"/home/categories/"+item.slug}>
               <Card bordered className='mx-2 my-2'>
                  <div className="">
                  {/*<Image
                    src={urlFor(item.images[0]).url()
                      }
                    alt="Image de la catégories"
                    width={150}
                    height={200}
                    style={{height:'200px',width:'150px'}}
                    className="rounded"
                   // priority={false}
                    quality={100}
                />
                */}
                 <Image1
                    src={urlFor(item.images[0]).url()
                      }
                    alt="Image de lacatégorie"
                    width={150}
                    height={200}
                    className="rounded"
                    preview={false}
                   // priority={false}
                    //quality={100}
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