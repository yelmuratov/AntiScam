import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import BurgerButton from '@/components/burgerbutton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anti Scam',
  description: 'Check links',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#0E131E] text-[#fff]`}>
        <div className='flex justify-center mb-20'>
          <nav className='self-center w-full max-w-12xl'>
            <div className='flex lg:flex-row justify-between px-4 items-center lg:justify-around '>
              <h1 className='logo lg:pl-12 py-8 text-[32px] font-sans font-bold cursor-pointer select-none'>
                <Link href={'/'}>AntiScam</Link>
              </h1>
              <BurgerButton />
              <ul className='hidden md:flex lg:flex items-center text-[18px] font-semibold pl-64'>
                <li className='nav__item select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='nav__item select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
                  <Link href='/contact'>ContactUs</Link>
                </li>
                <li className='nav__item select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
                  <Link href='/about'>AboutUs</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  )
}
