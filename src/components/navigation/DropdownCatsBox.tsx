


import { CategoryProd } from "../products/Product";
import Avatar from "antd/es/avatar/avatar";
import { urlFor } from "@/lib/sanity/sanity";
import { Image as Image1, Card, Skeleton } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function DropdownCatBox({ categories }: { categories: Array<CategoryProd> }) {
  if (categories) {
    return <>
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
               <Card bordered>
                  <div className="">
                    <Avatar src={urlFor(item.images[0]).url()
                    } size={{ xs: 24, sm: 28, md: 30, lg: 54, xl: 70, xxl: 90 }} />

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
    </>
  }else{
    return<>
    <Skeleton style={{width:'450px',height:'350px'}} />
    </>
  }
}