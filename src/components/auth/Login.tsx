
"use client"
import { Divider, Space, Button } from "antd/lib"
import LoginForm from "./LoginForm"
import { useRouter } from "next/navigation"
import ReduxProvider from "@/store/ReduxProvider"
export default function Login({ style,className,drawer=true }: { style?: object ,className?:string,drawer?:boolean}) {
    const router=useRouter()

    return <>

        <div className={`flex flex-col bg-white  ${className}`} style={style}>
            <div className="order-1">
                <div>
                    <p  className={`${drawer==true ? "block order-2 font-bold" : "hidden"} `} style={{ fontSize: '18px' }}>Vous avez déjà un compte ?</p>
                    
                    <div className="mt-2 mb-1 px-2 py-2">
                    <ReduxProvider>
                    <LoginForm drawer={drawer} />
                    </ReduxProvider>
                    </div>
                </div>
            </div>
            <div className={`${drawer==true ? "block order-2" : "hidden"} `}>

                <p className="font-normal text-black-1">
                    Si vous n'êtes pas encore client, veuillez vous inscrire pour bénéfier de toutes nos offres. Vous pourriez passez des commandes plus rapidemant,donner vos avis sur nos produits et bien d'autres.
                   
                </p>
                <div>
                        <Space direction="vertical" size={24} className="min-w-full my-1">
                            <Button color="blue" onClick={() => {router.push("/home/account/create")}} className='' size="large" block>
                            S'inscrire
                            </Button>
                        </Space>
                    </div>
            </div>
        </div></>
}