"use client"
import clsx from 'clsx';
import Card from "antd/es/card/Card"
import type { CollapseProps, } from 'antd';
import { Collapse, Space, Result, Skeleton, Button } from 'antd';
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { Checkbox, } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import LoadingProductsBox from "./LoadingProductsBox";
import { PlusCircleFilled } from "@ant-design/icons";
import useSWR from "swr";
import { groq } from "next-sanity";
import ListeProducts1 from "@/components/products/ListeProducts1";
export interface Subcategory {
    _id: string,
    title: string,
    description?: object,
    images?: Array<ImageUrlBuilder>,
    type: string,
    checked?: boolean
}
import { useSubcategories } from "@/lib/utils/utils";
import { readClient } from "@/lib/sanity/sanity";
import { memo, useEffect, useState } from "react";
function FiltersGroup1({ cat_name }: { cat_name: string }) {
    type PublicI = {
        value: string,
        checked: boolean,
    }
    const [publicv, setPublicv] = useState<Array<PublicI>>([{ value: "homme", checked: false }, { value: "femme", checked: false }, { value: "mixte", checked: false }]);
    const [collapse, setCollapse] = useState(false);
    const {
        subcategories,
        isLoading,
        isError
    } = useSubcategories();
    const defaultActiveKey: Array<string> = ['1']
    const onChange = (e: CheckboxChangeEvent, header: string) => {
        const checked = e.target.checked
        const value = e.target.value;
        if (header == 'public') {
            const index = publicv.findIndex((item) => item.value === value);
            if (index !== -1) {
                const newPublicv = [...publicv];
                newPublicv[index].checked = checked;
                setPublicv(newPublicv);
            } else {
                setPublicv((state) => [...state, { value, checked }]);
            }
        }
       
    };
    function getItem({ item, key }: { key: number, item: Subcategory }) {

        defaultActiveKey.push(key.toString());
        return {
            key: key.toString(),
            label: item.title,
            children: <></>
        }
    }
    function getPublicVal() {
        let retour: Array<string> = []
        publicv.forEach((item) => {
            if (item.checked == true) {
                retour.push(item.value)
            }
        })
        return retour;
    }
   const queryProdCat_public = groq`*[_type == "product" && primary_category->title==$category_name && public in $public]{
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
    const queryProdCat = groq`*[_type == "product" && primary_category->title==$category_name]{
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
  const { data: products, isLoading: isLoadingProds, error: errorProds } = useSWR(getPublicVal().length == 0 ? '/queryProdCat' : '/queryProdCat?public=' + getPublicVal(), async (url) => {
        if (url == '/queryProdCat')
            return await readClient.fetch(queryProdCat, { category_name: cat_name, })
        else
            return await readClient.fetch(queryProdCat_public, { category_name: cat_name, public: getPublicVal() })

    },
     );
    if (subcategories) {
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
        ;
        return <>
            <div className="ms-3 p-2">
               <Button color='#e4be88' icon={<PlusCircleFilled className="" style={{ color: '#e4be88' }} color='#e4be88' />} className='' onClick={() => { setCollapse((state) => !state) }}>
                    
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
                <div className="w-full h-full">
                    {isLoadingProds == false ? <><ListeProducts1 products={products} /></> : <><LoadingProductsBox /></>
                    }
                </div>
            </div>
        </>
    } else if (isLoading) {
        return <><div className="flex flex-row items-center justify-center">
            <Skeleton style={{ maxWidth: '500px', maxHeight: '500px', width: '100%', height: '100%' }} />
        </div></>
    }
}

export default FiltersGroup1