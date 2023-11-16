


import { Space, Alert } from "antd"

export default function PostsPage() {

    return <>
        <div className="flex flex-row items-center justify-center h-full w-full">
            <Space direction="vertical" style={{marginTop:'20px'}}>

                <Alert message="Aucun article n'est disponible pour le moment"  type="info" showIcon />

            </Space>
        </div>
    </>
}