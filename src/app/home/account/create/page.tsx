import RegisterForm from "@/components/auth/RegisterForm"
import { Watermark } from "antd/lib"
export default function CreateAccountPage(){


    return <>
    {/*<Watermark content="Fathe Premium Jewelry"  zIndex={2}>*/}
    <div className="flex justify-center items-center ">
      <RegisterForm />
    </div>
    {/*</Watermark>*/}
    </>
}