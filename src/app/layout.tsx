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

