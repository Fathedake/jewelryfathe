import { Header } from "antd/es/layout/layout";
import Logo from "../utils/Others/Logo";
export default function LogoBar() {

    return <>
        <Header style={{ background: 'white', height: '90px' }} className="w-full flex flex-col  items-center justify-center">

            <Logo fontSize="60px" color="#001529" />

        </Header >
    </>
}