import dynamic from 'next/dynamic';
import CarousselLoading from '@/components/utils/Caroussel/Caroussel-loading';
const Caroussel1 = dynamic(() => import('@/components/utils/Caroussel/Caroussel-1'), { ssr: false,loading: () => <div><CarousselLoading /></div>,})
import NewsProducts from '@/components/products/NewsProducts';
import ProductsRecommended from '@/components/products/ProductsRecommended';
export default function PageHome() {
    return <>
        <div className='w-full'>
            <Caroussel1 />
            <div className='flex flex-col items-center justify-start gap-0'>
            <ProductsRecommended/>
            <NewsProducts />
            </div>
        </div>
    </>
}