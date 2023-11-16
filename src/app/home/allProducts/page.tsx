"use client"
import { groq } from "next-sanity";
import { readClient } from "@/lib/sanity/sanity";
import { Image, Card,Divider } from "antd";
import styles from '@/components/utils/styles/category.module.css'
import { useSubcategories } from "@/lib/utils/utils";
import Product, { CategoryProd } from "@/components/products/Product";
import { clsx } from 'clsx';
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
export const subcatQuery = groq`*[_type == "subcategory"]{
    _id,
    title,
    description,
    images,
    type
  }`
import useSWR from "swr";
import { Subcategory } from "@/components/utils/Others/FiltersGroup1";
import type { CollapseProps, } from 'antd';
import { Collapse, Space, Result, Skeleton, Button } from 'antd';
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { Checkbox, } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { PlusCircleFilled } from "@ant-design/icons";
import { useState } from "react";
export default function PageAllProducts() {
    //const categories = await readClient.fetch(query1);
    const { data:dataCats, error: errorCat, isLoading: isLoadingCat } = useSWR(['/queryAllProducts'], async () => await readClient.fetch(query1), /*{ refreshInterval: 3000 }*/);
    const categories:Array<CategoryProd>=dataCats
    const { data, error, isLoading } = useSWR(['/querySubCat'], async () => await readClient.fetch(subcatQuery), /*{ refreshInterval: 3000 }*/);
    let subcategories: Array<Subcategory> = []
    subcategories = data;
    type PublicI = {
        value: string,
        checked: boolean,
    }
    const [publicv, setPublicv] = useState<Array<PublicI>>([{ value: "homme", checked: false }, { value: "femme", checked: false }, { value: "mixte", checked: false }]);
    const [collapse, setCollapse] = useState(false);
    const defaultActiveKey: Array<string> = ['1'/*, '2', '3', '4'*/]
    const onChange = (e: CheckboxChangeEvent, header: string) => {
        //console.log(`checked = ${e.target.checked}`,);
        //console.log(header)
        const checked = e.target.checked
        const value = e.target.value;
        if (header == 'public') {
            const index = publicv.findIndex((item) => item.value === value);
            if (index !== -1) {
                // If the item already exists in the array, update its checked property
                const newPublicv = [...publicv];
                newPublicv[index].checked = checked;
                setPublicv(newPublicv);
            } else {
                // If the item does not exist in the array, add it to the array
                setPublicv((state) => [...state, { value, checked }]);
            }
        }
        //console.log(publicv)
    };

    if (categories && subcategories) {
            const items: CollapseProps['items'] = [
                {
                    key: '1',
                    label: 'Public',
                    children: <div className="flex flex-col gap-1">
                        {publicv.map((item: PublicI, index: number) => { return <>  <Checkbox key={item.value} checked={item.checked} value={item.value} onChange={(e) => { onChange(e, "public") }}>{item.value}</Checkbox></> })}
                    </div>,
    
                },
                {
                    key: '2',
                    label: 'Styles',
                    children: <div className="flex flex-col gap-1">
                        {subcategories.map((item: Subcategory, index: number) => { if (item.type == 'styles') return <>  <Checkbox key={index} value={item.title} onChange={(e) => { onChange(e, "details") }}>{item.title}</Checkbox></> })}
                    </div>,
                },
                {
                    key: '3',
                    label: 'Matériaux',
                    children: <div className="flex flex-col gap-1">
                        {subcategories.map((item: Subcategory, index: number) => { if (item.type == 'materiaux') return <>  <Checkbox key={index} value={item.title} onChange={(e) => { onChange(e, "details") }}>{item.title}</Checkbox></> })}
                    </div>,
                },
                {
                    key: '3',
                    label: 'Occasions',
                    children: <div className="flex flex-col gap-1">
                        {subcategories.map((item: Subcategory, index: number) => { if (item.type == 'occasions') return <>  <Checkbox key={index} value={item.title} onChange={(e) => { onChange(e, "details") }}>{item.title}</Checkbox></> })}
                    </div>,
                },
            ];
        return <>
            <div className="">

            </div>
            <div className="relative" style={{ width: '100%', }}>
                <div >
                    <Image
                        src={"/bg-15.jpg"
                        }
                        style={{ height: '250px', width: '100vw', marginTop: '20px' }}
                        alt="Image du produit"
                        className="inline-block w-full"
                        preview={false}


                    />

                </div>
                <div className="absolute top-1/2 left-1/2 " style={{ transform: 'translate(-50%,-50%)' }}>
                    <span className="text-5xl" style={{ fontWeight: 900, color: `${"white"} ` }}>Tous les produits</span>
                </div>
            </div>

            {categories && subcategories ? <div className="w-full">
                <div className="ms-3 p-2">
                    {/* {styles.filters_bar} style={{position:'sticky',top:100,width:300}}  */}
                    <Button color='#e4be88' className='inline-flex md:hidden mb-2 text-center ' onClick={() => { setCollapse((state) => !state) }}>
                        <PlusCircleFilled className="" style={{ color: '#e4be88' }} color='#e4be88' />
                    </Button>
                    <Card title="Filtres" className={clsx(
                        'inline-block md:hidden w-full',
                        {
                            'hidden': collapse === false,
                            'inline-block': collapse === true,
                        },
                    )} style={{ minWidth: '100%' }} bodyStyle={{ borderColor: '#e4be88' }} headStyle={{ borderColor: '#e4be88' }}  >
                        <Collapse
                            ghost
                            className="w-full"
                            collapsible="header"
                            defaultActiveKey={defaultActiveKey}
                            items={items}
                        />
                    </Card>
                </div>
                <div className="flex flex-row flex-nowrap itams-start justify-start h-full" >
                    <div className="ms-3 p-2">
                        {/* {styles.filters_bar} style={{position:'sticky',top:100,width:300}}  */}

                        <Card title="Filtres" className="hidden md:inline-block sticky top-64" style={{ minWidth: 280 }} bodyStyle={{ borderColor: '#e4be88' }} headStyle={{ borderColor: '#e4be88' }}  >
                            <Collapse
                                ghost
                                className="w-full"
                                collapsible="header"
                                defaultActiveKey={defaultActiveKey}
                                items={items}
                            />
                        </Card>
                    </div>
                    <div className="h-full">
                        {categories.length != 0 ? <div className="">

                            {categories.map((cat: CategoryProd, index: number) => {
                                
                               
                                 if (cat.products?.length != 0) {
                                   return <>
                                   <Divider className="w-full" ></Divider>
                                   <div className="text-center" style={{fontWeight:'bolder',fontSize:'20px',height:'100px'}}>{cat.title}</div>
                                   <Divider className="w-full"></Divider>
                                  <div className="flex flex-row flex-wrap  justify-center items-center">
                                  {
                                     cat.products?.map((prod,index)=>{
                                        return <Product prod={prod} key={index} />
                                    })
                                   }
                                  </div>
                                   </>
                                 }
                               
                                
                            })}
                        </div> : <div></div>}
                    </div>
                </div>
            </div> : <div>

            </div>
            }
        </>
    }
}