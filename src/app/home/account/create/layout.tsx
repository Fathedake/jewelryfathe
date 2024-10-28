


"use client"
import ReduxProvider from '@/store/ReduxProvider'
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