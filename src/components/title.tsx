const Title = (props: { title: string, subtitle: string }) => {
  const { title, subtitle } = props;
  return (
    <>
      <h1 className='main__title text-center lg:text-[65px] md:text-[40px] text-[28px] select-none'>{title}</h1>
      <p className='main__subtitle text-center mt-3 text-[8px] lg:text-lg md:text-[14px] select-none'>{subtitle}</p>
    </>
  )
}

export default Title;