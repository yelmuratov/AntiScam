import Link from "next/link";
import BurgerButton from "./burgerbutton";

const Header = () => {
  return (
    <div className='flex justify-center'>
      <nav className='self-center w-full max-w-12xl'>
        <div className='flex lg:flex-row justify-between px-4 items-center lg:justify-around '>
          <h1 className='logo lg:pl-12 py-4 lg:py-8 md:py-8 text-[32px] font-sans font-bold cursor-pointer select-none'>
            <Link href={'/'}>AntiScam</Link>
          </h1>
          <BurgerButton />
          <ul className='hidden md:flex lg:flex items-center text-[18px] font-semibold pl-64'>
            <li className='nav__item uppercase select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
              <Link href='/'>Home</Link>
            </li>
            <li className='nav__item uppercase select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
              <Link href='/contact'>ContactUs</Link>
            </li>
            {/* <li className='nav__item uppercase select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
              <Link href='/about'>AboutUs</Link>
            </li> */}
            <li className='nav__item uppercase select-none decoration-2 decoration-white py-2 rounded-lg px-5'>
              <Link href='/team'>Team</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header