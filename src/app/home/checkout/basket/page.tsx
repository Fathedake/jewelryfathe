
import BasketWrapper from "@/components/basket/BasketWrapper"
import { Button, } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
export default function PagePanier(){

    return <>
    <div className="flex flex-col bg-gray-100">
      <div style={{margin:'10px 20px',marginTop:'20px'}}>
      <Link href={"/home"} className="self-start flex">
        <Button type="text"><ArrowLeftOutlined /> <span>Continuer mes achats</span></Button>

        </Link>
    
      </div>
    <BasketWrapper/>
    </div>
    </>
}