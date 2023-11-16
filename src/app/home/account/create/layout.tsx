


"use client"
import ReduxProvider from '@/store/ReduxProvider'
import TopbarNav from '@/components/navigation/TopbarNav'
import TopbarUser from '@/components/navigation/TopbarUser'
import LogoBar from '@/components/navigation/LogoBar'
import { Carousel, Space, Button } from 'antd'
import Image from 'next/image'
export default function AccountLayout({
  children,
}: {
  children?: React.ReactNode,
}) {
  return <>
      <div className='w-full h-full  bg-gray-100'>
        <ReduxProvider>
        {children}
        </ReduxProvider>
      </div>

  </>
}