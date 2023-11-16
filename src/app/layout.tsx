import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/antd/AntdRegistry'
import theme from '@/themes/themeConfig'
import { ConfigProvider } from 'antd'
import frFR from 'antd/locale/fr_FR'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Fathe's Jewelry ",
  description: "E-commerce de Fathe Jewelry",
//  image:"/bg-13.jpg"
/*title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),*/

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry >
          <ConfigProvider theme={theme} locale={frFR}>
            {children}
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
    
  )
}
