import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

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
        <div className='flex justify-center'>
          <nav className='self-center w-full max-w-12xl  '>
            <div className='flex flex-col lg:flex-row justify-around items-center '>
              <h1 className='logo pl-5 py-8 text-[32px] font-sans font-bold cursor-pointer select-none'>
                <Link href={'/'}>AntiScam</Link>
              </h1>
              <ul className='hidden lg:flex items-center text-[18px] font-semibold pl-32'>
                <li className='nav__item select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='nav__item select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li className='nav__item select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
                  <Link href='/about'>About</Link>
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
