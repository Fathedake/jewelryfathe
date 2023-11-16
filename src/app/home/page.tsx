import { readClient,writeClient} from '../../lib/sanity/sanity'
import dynamic from 'next/dynamic';
import { Skeleton } from 'antd/lib';
import CarousselLoading from '@/components/utils/Caroussel/Caroussel-loading';
const Caroussel1 = dynamic(() => import('@/components/utils/Caroussel/Caroussel-1'), { ssr: false,loading: () => <div><CarousselLoading /></div>,})
//import Caroussel1 from '@/components/utils/Caroussel/Caroussel-1';
import NewsProducts from '@/components/products/NewsProducts';
import { Image as Image1} from 'antd';
import ProductsRecommended from '@/components/products/ProductsRecommended';
export default function PageHome() {
    return <>
        <div className='w-full'>
            <Caroussel1 />
           <ProductsRecommended/>
            <NewsProducts />
        </div>
    </>
}
/*
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const prodsRecommended= await readClient.fetch(recommendedProdsQuery)
   // const posts = await res.json()
   
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        prodsRecommended,
      },
    }
  }*/