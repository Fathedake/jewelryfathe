
//import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Logo from '../Others/Logo';
import styles from '../styles/styles.module.css'
export default function CarousselItem({ srcImg, content }: { srcImg: string, content: React.ReactNode }) {

    return <>
        <div className=''>
            <div className='relative flex flex-row  items-center justify-center' style={{ /*background: '#c5cacd'*/ }}>

                <div className='flex absolute top-50' style={{ left: '10%' }}>
                    <p>

                    </p>
                    {content}
                </div>

                <Image
                    src={srcImg}
                    alt="Image de fond"
                    className={`inline-block`}
                    style={{
                        width: '100%',
                        height: '400px',
                    }}
                    // fill
                    width={1000 }
                    height={400}
                    sizes="100vw"
                   // priority={true}
                    quality={100}
                />

            </div>
        </div>
    </>
}