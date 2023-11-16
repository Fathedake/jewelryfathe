
import { Divider } from "antd/lib"
import { StarFilled } from "@ant-design/icons"
export default function BoxTitle({title}:{title:string}){


    return <>
       <div className=' text-4xl text-center my-3 uppercase' style={{height:'100px', color: '#001529',fontWeight:600 }}>{title}
   <Divider style={{height:'3px'}}><StarFilled color="black" style={{fontSize:'15px'}} /><StarFilled color="black" style={{fontSize:'21px'}} /><StarFilled color="black" style={{fontSize:'15px'}} /></Divider>     
        </div>
    </>
}