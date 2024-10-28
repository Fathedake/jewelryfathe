

export default function HomeLayout({
  children,
}: {
  children?: React.ReactNode,
}) {
  return <>
    <div className='w-full  bg-gray-100 h-full'>
      {children}
    </div>

  </>
}