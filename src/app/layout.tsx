import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './GlobalRedux/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anti Scam',
  description: 'Check links',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-[#0E131E] text-[#fff]`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
