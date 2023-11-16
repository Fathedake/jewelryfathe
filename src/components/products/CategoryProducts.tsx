import { CategoryProd } from "./Product";
import Product from "./Product";
import { urlFor } from "@/lib/sanity/sanity";
import { Image as Image1 } from "antd";
import { ProductI } from "./Product";
import Image from "next/image";
export default  function CategoryProducts({ category ,key}: { category: CategoryProd,key:number }) {
/*/*await getTextColor(urlFor(category.images[0]).url()).then((textColor) => {
       return textColor
    })}*/

    return  <div className="flex flex-col lg:flex-row flex-nowrap w-full gap-1 " key={key}>
            <div className="relative hidden lg:flex  flex-col items-center justify-center  lg:sticky lg:top-64 basis-2/5 lg:shrink-0 lg:grow-0 lg:rouded-xl wrapper-img-1 w-full" style={{maxWidth:'40%'}}>
               { /*<Image1
                    src={urlFor(category.images[0]).url()
                    }
                    alt="Image de la catégorie"
                    className="hidden lg:inline-block  h-full p-3"
                    style={{borderRadius:'20px',width:'100%',minWidth:'100%'}}
                    preview={false}
                    height={384}
                   // width={550}
                />
                */}
                <Image
                    src={urlFor(category.images[0]).url()
                    }
                    alt="Image de la catégorie"
                    className="hidden lg:inline-block  h-full p-3"
                    style={{borderRadius:'20px',width:'100%',minWidth:'100%'}}
                   // preview={false}
                    height={384}
                    width={300}
                    priority={false}
                   // width={550}
                />
                <div className="absolute top-1/2 left-1/2 " style={{transform:'translate(-50%,-50%)'}}>
                   <span className="text-5xl" style={{fontWeight:900,color:`${"#e7e7e7"} `}}>{category.title}</span>  
                </div>
            </div>
            <div className="lg:hidden flex w-full relative  flex items-center justify-center">
           {/* <Image1
                    src={urlFor(category.images[0]).url()
                    }
                    alt="Image de la catégorie"
                    className="lg:hidden inline-block"
                    style={{borderRadius:'20px',height:250,width:'100vw',padding:'10px'}}
                    preview={false}
                   
                />
                
                 <Image
                    src={urlFor(category.images[0]).url()
                    }
                    alt="Image de la catégorie"
                    className="hidden lg:inline-block  h-full p-3"
                    style={{borderRadius:'20px',height:250,width:'100vw',padding:'10px'}}
                   // preview={false}
                    height={384}
                    width={300}
                    priority={false}
                   // width={550}
                />*/}
                {/*<Image1
                    src={urlFor(category.images[0]).url()
                    }
                    alt="Image de la catégorie"
                    className="lg:hidden inline-block"
                    style={{borderRadius:'20px',height:250,width:'100vw',padding:'10px'}}
                    preview={false}
                   
                />
                */}
                 <Image
                    src={urlFor(category.images[0]).url()
                    }
                    alt="Image de la catégorie"
                    className="inline-block lg:hidden  p-3"
                    style={{borderRadius:'20px',height:250,width:'100vw',padding:'10px'}}
                   // preview={false}
                    height={384}
                    width={250}
                    priority={false}
                   // width={550}
                />
                  <div className="absolute top-1/2 left-1/2 " style={{transform:'translate(-50%,-50%)'}}>
                   <span className="text-5xl" style={{fontWeight:900,color:`${"#e7e7e7"} `}}>{category.title}</span>  
                </div>
            </div>
            <div className="lg:basis-3/5 lg:shrink-1 lg:grow-1" >
                <div className="flex flex-row flex-wrap justify-center items-center">
                    {category.products?.map((prod: ProductI) => {
                        if (prod.primary_category.slug == category.slug) {
                            return <div key={prod._id}>

                                <Product prod={prod} />
                            </div>
                        }

                    })}
                </div>
            </div>
        </div>

}