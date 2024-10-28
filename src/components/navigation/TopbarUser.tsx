"use client"
import { Layout, Button, Drawer, Badge} from "antd"
import { UserOutlined, CloseOutlined, ShoppingOutlined  } from '@ant-design/icons';
import Link from "next/link";
import Login from "../auth/Login";
import { useState } from "react";
import { useAppSelector } from "@/store";
import { useAppDispatch } from "@/store";
import { logOut } from "@/store/slices/authSlice";
export default function TopbarUser() {
    const { Header } = Layout;
    const [openAccount, setOpenAccount] = useState<boolean>(false)
   const dispactch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user)
    const cart = useAppSelector((state) => state.cart.cart)
    const getTotalQuantity = () => {
       let total=0;
       if(cart)
       cart.forEach((item)=>{
        total+=item.quantity
       })
       return total;
    }
    return <>
        <div>
            <Header className="w-full flex justify-between items-center text-white black-1" style={{ height: '64px' }}>
                <div>
                </div>
                <div className="ms-auto flex justify-center items-center gap-2">
                    <Badge dot style={{ height: '16px', width: '15px', background: `${user?._id.length > 0 ? '#46c93a' : '#ff4757'}`, borderColor: `${user?._id.length > 0 ? '#46c93a' : '#ff4757'}`, color: `${user?._id.length > 0 ? '#46c93a' : '#ff4757'}` }} >
                        <span onClick={() => { setOpenAccount(!openAccount) }} className=" relative pointer-events-auto  inline-flex items-center justify-center" style={{ cursor: 'pointer', height: '30px' }}>

                            <UserOutlined style={{ fontSize: '25px', color: 'white' }} color="white" size={90} ></UserOutlined>



                        </span>
                    </Badge>
                    <Badge  count={getTotalQuantity() || 0} color="rgb(255, 71, 87)" >
                        <span onClick={() => {}} className=" relative pointer-events-auto  inline-flex items-center justify-center" style={{ cursor: 'pointer', height: '30px' }}>

                            <Link href={"/home/checkout/basket"} className="mx-1"><ShoppingOutlined style={{ fontSize: '25px', color: 'white' }} color="white" size={90} /></Link>
                        </span>
                    </Badge>
                </div>
            </Header>
            <Drawer width={400} className="" style={{ background: 'white', marginTop: '64px' }} placement="right" onClose={() => { setOpenAccount(false) }} open={openAccount} closeIcon={<><span className='text-black'><CloseOutlined /></span></>}>
                <div className='w-full h-full'>
                    {user?._id.length > 0 ? <><div>
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                Side bar de connexion
                            </div>
                            <div>
                                <Button block danger onClick={() => { dispactch(logOut())}}>
                                    Se déconnecter
                                </Button>
                            </div>


                        </div>


                    </div></> : <><Login /></>}
                </div>
            </Drawer>
        </div>
    </>
}