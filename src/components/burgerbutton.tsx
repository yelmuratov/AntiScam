'use client'
import {useState} from 'react'

const BurgerButton = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  
  return (
    <>
      <div className={`burger-menu select-none ${isOpen?'close':''} mt-3`} onClick={()=>setisOpen(prev => !prev)}>
        <div className='bar bar--top'></div>
        <div className='bar bar--middle'></div>
        <div className='bar bar--bottom'></div>
      </div>
    </>
  )
}

export default BurgerButton;