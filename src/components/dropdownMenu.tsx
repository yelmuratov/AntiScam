import Link from "next/link";

const DropdownMenu = (props: { isOpen: boolean }) => {
  const { isOpen } = props;
  return (
    <div
      className={`dropdown__menu ${
        isOpen ? 'active' : ''
      } absolute left-0 top-20 w-full h-0 overflow-hidden transition-height duration-300`}
    >
      <hr />
      <ul className='flex flex-col items-center gap-3 py-3'>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>AboutUs</Link>
        </li>
        <li>
          <Link href={'/contact'}>ContactUs</Link>
        </li>
        <li>
          <Link href={'/team'}>Team</Link>
        </li>
      </ul>
      <hr />
    </div>
  )
}

export default DropdownMenu