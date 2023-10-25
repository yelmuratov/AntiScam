'use client'

import { useAppDispatch, useAppSelector } from '@/app/GlobalRedux/hooks';
import DropdownMenu from './dropdownMenu';
import { setIsOpen } from '@/app/GlobalRedux/Features/mainSlice/mainSlice';
const BurgerButton = () => {
  const isOpen = useAppSelector(state => state.isOpen);
  const dispatch = useAppDispatch();
  
  const handleOpen = () => {
    dispatch(setIsOpen(!isOpen));
  }

  return (
    <>
      <div
        className={`${isOpen ? 'close' : ''} burger-menu select-none mt-2 lg:hidden md:hidden block`}
        onClick={handleOpen}
      >
        <div className='bar bar--top'></div>
        <div className='bar bar--middle'></div>
        <div className='bar bar--bottom'></div>
      </div>
      <DropdownMenu />
    </>
  )
}

export default BurgerButton
