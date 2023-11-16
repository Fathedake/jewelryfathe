import Link from 'next/link'
import { Button, Result } from 'antd/lib'
export default function NotFound() {
    return (
        <div className='w-screen h-screen'>
            <Result
                status="404"
                title="404"
                subTitle="Désolé, la page que tu cherches à visiter n'existe pas."
                extra={<Link href={'/'}><Button >Retourner au menu principal</Button></Link>}
            />
        </div>
    )
}