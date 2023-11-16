import { Carousel, Space, Button } from 'antd'
import Logo from '../Others/Logo';
import CarousselItem from './CarousselItem';
import Link from 'next/link';
function Caroussel1() {

    return (<>
        <Carousel  style={{ boxSizing: 'content-box', }} dots infinite  autoplay className='bg-transparent text-black flex flex-row justify-center items-center  bg-gray-100 z-50 caroussel-marge '>
            <CarousselItem srcImg='/bg-4.jpg' content={<div className='flex flex-row justify-center items-center ms-autos'>
                <Space direction='vertical'>
                    <div>
                        <Logo color='white' className='flex flex-col' />
                    </div>
                    <Space className='flex flex-col sm:flex-row'>
                        <Link href={"/home/allProducts"}> <Button block size='large' style={{width:'200px'}} type='primary' className='black-1'>Accédez aux produits</Button></Link>
                       
                        <Link href={"/home/posts"}>< Button block size='large' style={{width:'200px'}} className='text-white'>Accédez au blog</Button>
                    </Link>
                    </Space>
                </Space>

            </div>} />
            <CarousselItem srcImg='/bg-12.jpg' content={<div className='flex flex-row justify-center items-center ms-autos'>
                <Space direction='vertical'>
                    <div>
                        <Logo color='white' className='flex flex-col' />
                    </div>
                    <Space>
                        <p className='text-center mx-2 text-bold font-bold text-3xl' style={{color:'#e4be88',maxWidth:'500px'}}>Et oui ! Homme comme femme sont satisfaits chez nous ! Nous avons aussi des bijoux pour vous messieurs.</p>
                    </Space>
                </Space>

            </div>} />
            <CarousselItem srcImg='/bg-6.jpg' content={<div className='flex flex-row justify-center items-center ms-autos'>
                <Space direction='vertical'>
                    <div>
                        <Logo color='white' className='flex flex-col' />
                    </div>
                    <Space className='flex flex-col sm:flex-row'>
                        <Link href={"/home/allProducts"}> <Button block size='large' style={{width:'200px'}} type='primary' className='black-1'>Accédez aux produits</Button></Link>
                       
                        <Link href={"/home/posts"}>< Button block size='large' style={{width:'200px'}} className='text-white'>Accédez au blog</Button>
                    </Link>
                    </Space>
                </Space>

            </div>} />
            <CarousselItem srcImg='/bg-9.jpg' content={<div className='flex flex-row justify-center items-center ms-autos'>
                <Space direction='vertical'>
                    <div>
                        <Logo color='white' className='flex flex-col' />
                    </div>
                    <Space className='flex flex-col sm:flex-row'>
                        <Link href={"/home/allProducts"}> <Button block size='large' style={{width:'200px'}} type='primary' className='black-1'>Accédez aux produits</Button></Link>
                       
                        <Link href={"/home/posts"}>< Button block size='large' style={{width:'200px'}} className='text-white'>Accédez au blog</Button>
                    </Link>
                    </Space>
                </Space>

            </div>} />
            <CarousselItem srcImg='/bg-13.jpg' content={<div className='flex flex-row justify-center items-center ms-autos'>
                <Space direction='vertical'>
                    <div>
                        <Logo color='white' className='flex flex-col' />
                    </div>
                    <Space className='flex flex-col sm:flex-row'>
                        <Link href={"/home/allProducts"}> <Button block size='large' style={{width:'200px'}} type='primary' className='black-1'>Accédez aux produits</Button></Link>
                       
                        <Link href={"/home/posts"}>< Button block size='large' style={{width:'200px'}} className='text-white'>Accédez au blog</Button>
                    </Link>
                    </Space>
                </Space>

            </div>} />
        </Carousel>
    </>
    );
}

export default Caroussel1;