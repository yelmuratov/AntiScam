const Title = (props: { title: string, subtitle: string}) => {
  const { title, subtitle } = props;
  return (
    <>
      <h1 className='main__title text-center lg:text-[65px] md:text-[40px] text-[35px] select-none mt-14 lg:mt-28 md:mt-28'>
        {title}
      </h1>
      <p className='main__subtitle text-center mt-3 text-[12px] lg:text-lg md:text-[20px] select-none opacity-40'>
        {subtitle}
      </p>
    </>
  )
}

export default Title;