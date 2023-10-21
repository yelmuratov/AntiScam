'use client'

import { useRef, useState } from 'react'
import { HiLink } from 'react-icons/hi'
import { LinkIconColor } from '@/helpers/constants'

const CheckInput = () => {
  const [focusing, setFocusing] = useState<boolean>(false)
  const CheckRef = useRef<HTMLInputElement | null>(null)

  CheckRef.current?.addEventListener('focusout', () => {
    setFocusing(false)
  })
  return (
    <form>
      <div
        className={`checkInput flex items-center ${
          focusing ? 'active' : ''
        } h-[76px] lg:w-[670px] md:w-[670px] w-[320px] bg-[#181E29] select-none`}
      >
        <HiLink style={LinkIconColor} />
        <input
          type='text'
          name='urlInput'
          placeholder='Enter the link here'
          className='lg:ml-8 ml-4 text-[14px] lg:text-xl'
          onFocus={() => setFocusing(true)}
          ref={CheckRef}
        ></input>
        <button
          type='submit'
          className='checkButton flex w-[178px] justify-center items-center lg:mr-[5px] mr-[2px] bg-[#144EE3] text-[#FFF]'
        >
          check
        </button>
      </div>
    </form>
  )
}

export default CheckInput;
