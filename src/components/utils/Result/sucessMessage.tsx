import Card from "antd/es/card/Card"
import Success1Icon from "../Icons/success-1"
import { Space, } from "antd"
export default function SuccessMessage({ title, message,action}: { title: React.ReactNode, message: string,action:React.ReactNode}) {

    return <>
        <Card title={title} style={{ background: "#effaf5" }}>
            <Space direction="vertical" size={24}>
                <div className="flex items-center justify-center min-w-full">
                < Success1Icon height={150} width={150}/>
                </div>
                <div style={{ color: "#24855a" }}>
                    {message}
                </div>
                <div>
                {action}
                </div>
            </Space>

        </Card>
    </>

}

