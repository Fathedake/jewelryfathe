import Login from "@/components/auth/Login"
export default function LoginPage() {


    return <>
        <div className="flex justify-center items-start  w-full">
            <Login drawer={false} className="flex flex-row  justify-center items-center shadow-md radius-md px-2 py-2 m-3 bg-white z-50" />
        </div>
    </>
}