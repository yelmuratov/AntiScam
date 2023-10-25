import { setIsOpen } from "@/app/GlobalRedux/Features/mainSlice/mainSlice";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/hooks";
import Link from "next/link";

const DropdownMenu = () => {
  const isOpen = useAppSelector(state => state.isOpen)
  const dispatch = useAppDispatch();
  const handleOpen = () => {
    dispatch(setIsOpen(false));
  }
  return (
    <div
      className={`dropdown__menu ${
        isOpen ? 'active' : ''
      } absolute left-0 top-20 w-full h-0 overflow-hidden transition-height duration-300 z-50`}
    >
      <hr />
      <ul className='flex flex-col items-center gap-3 py-3'>
        <li onClick={handleOpen}>
          <Link href={'/'}>Home</Link>
        </li>
        {/* <li>
          <Link href={'/about'}>AboutUs</Link>
        </li> */}
        <li onClick={handleOpen}>
          <Link href={'/contact'}>ContactUs</Link>
        </li>
        <li onClick={handleOpen}>
          <Link href={'/team'}>Team</Link>
        </li>
      </ul>
      <hr />
    </div>
  )
}

export default DropdownMenu