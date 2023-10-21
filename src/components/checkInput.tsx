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
        } h-[76px] w-[670px] bg-[#181E29] select-none`}
      >
        <HiLink style={LinkIconColor} />
        <input
          type='text'
          name='urlInput'
          placeholder='Enter the link here'
          className='ml-8'
          onFocus={() => setFocusing(true)}
          ref={CheckRef}
        ></input>
        <button
          type='submit'
          className='checkButton flex w-[178px] justify-center items-center mr-[5px] bg-[#144EE3] text-[#FFF]'
        >
          check
        </button>
      </div>
    </form>
  )
}

export default CheckInput;
