

import { Skeleton,Card } from "antd";
export default function LoadingProductsBox(){
const tabs=Array.from({ length: 4 }, (_, i) => i);

return <>
<div className="flex flex-row   justify-center items-center flex-wrap gap-2">
    {tabs.map((item,index)=>{
        return <Card key={index} loading={true} style={{width:'300px',height:'400px',}}>


        </Card>
    })}
</div>
</>

}