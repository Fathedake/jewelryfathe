import TopbarNav from '@/components/navigation/TopbarNav'
import TopBarUserWrapper from '@/components/navigation/TopBarUserWrapper'
import LogoBar from '@/components/navigation/LogoBar'
import NavToTopButton from '@/components/utils/Others/NavToTopButton'
import { groq } from 'next-sanity'
import { readClient } from '@/lib/sanity/sanity'
import { CategoryProd } from '@/components/products/Product'
const queryCat = groq`*[_type == "categoryProd"]{
  _id,
  title,
  "slug":slug.current,
  description,
  images,
}`

export default async  function HomeLayout({
  children,
}: {
  children?: React.ReactNode,
}) {
  const categories:Array<CategoryProd> = await readClient.fetch(queryCat);
  return <>
    <div className=''>
        <div className='fixed w-full top-0' style={{zIndex:150}}>
         <TopBarUserWrapper />
        <LogoBar />
       <TopbarNav categories={categories} />
        </div>
        <div className='' style={{marginTop:217}}>
          {children}
        </div>
        <NavToTopButton/>
    </div>

  </>
}