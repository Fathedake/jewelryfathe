//import * as React from "react"
import {PlusOutlined,ShoppingCartOutlined,ShoppingOutlined, HeartFilled } from '@ant-design/icons';

export const BasketIcon = (props:any) => {
    const {chidren}=props
    return  <>
 <span className="relative">
 <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 40 40"
    {...props}
  >
    <path d="M34 9.2h-6.4V7.6C27.7 3.4 24.2 0 20 0c-4.2 0-7.6 3.4-7.6 7.6v1.5H6L3.4 35c-.3 2.7 1.8 5 4.4 5h24.4c2.6 0 4.7-2.3 4.4-5L34 9.2zM15.7 7.6c0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3v1.5h-8.6V7.6zM33 36.3c-.1.2-.4.4-.8.4H7.8c-.4 0-.6-.2-.8-.4-.1-.1-.4-.5-.3-.9L9 12.5h3.3v2.8h3.3v-2.8h8.6v2.8h3.3v-2.8H31l2.3 22.9c.1.4-.1.8-.3.9z" />
  </svg>
 </span>
  </>
}

export const HeartIcon = (props:any) => (
  <span style={{color:'white',background:'white'}} className="white-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 40 40"
      {...props}

    >
      <path d="M21.8 37.1c-.9 1-2.5 1-3.4.1-3.4-3.4-10.8-10.9-15-15.4C.7 19-.5 15.2.2 11.5c.5-4 3.3-7.4 7.2-8.7 3.7-1.4 8-.5 10.7 2.4.6.6 1.3 1.4 1.8 2.1.6-.7 1.2-1.5 1.8-2.1 2.8-2.9 7-3.8 10.7-2.4 3.9 1.3 6.7 4.7 7.2 8.7.7 3.7-.5 7.5-3.1 10.2L21.8 37.1z" />
    </svg>
  </span>
)

export const BasketIconGlobal=(props:any)=>{
    return <>
   <div {...props}>
   <div className="relative" style={{height:25,width:25}}>
    <ShoppingOutlined  className="w-full h-full" style={{ fontSize: '25px', color: 'white' }} color="white" size={90}/>
    <span className="absolute top-1/2 left-1/2" style={{ top:'calc(50% + 4px)',transform: 'translate(-50%,-50%)',color:'white' }}>
      <HeartFilled className="" style={{color:'white',width:8,height:8,}} />
    </span>
  </div>
   </div>
    </>
}
export const AddToCartIcon=()=>{
    return <>
    <div className="relative" style={{height:25,width:25}}>
    <ShoppingCartOutlined  className="w-full h-full" style={{ fontSize: '21px', color: 'white' }} color="white" size={90}/>
    <span className="absolute left-full" style={{ top:'5px',transform: 'translate(-50%,-50%)',color:'white', }}>
      
      <PlusOutlined  style={{color:'white',width:10,height:10,}} />
    </span>
  </div>
    </>
}

