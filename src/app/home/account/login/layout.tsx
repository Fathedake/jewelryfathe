

export default function HomeLayout({
  children,
}: {
  children?: React.ReactNode,
}) {
  return <>
      <div className='w-full  bg-gray-100 h-full' style={{/*height:'100vh'*/}}>
          {children}
      </div>

  </>
}