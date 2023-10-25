import Header from "@/components/header"

const AboutUs = () => {
  return (
    <>
      <Header />
      <section
        className={`body-font font-mono transition-bg duration-1000 transition-color-1000`}
      >
        <div className='container px-5 sm:pt-[100px] xs:py-8 mx-auto'>
          <div className='flex flex-col text-center w-full mb-10 mt-8'>
            <h2
              className={`text-xl text-indigo-500 tracking-widest font-medium title-font mb-1 duration-1000 transition-color-1000`}
            >
              AntiScam
            </h2>
            <h1
              className={`sm:text-3xl text-2xl font-medium title-font text-gray-50 transition-bg duration-1000 transition-color-1000`}
            >
              MEET THE TEAM
            </h1>
          </div>
          <div className='flex flex-wrap m-4'>
            <div className='p-4 md:w-1/2'>
              <div
                className={`flex rounded-lg h-full bg-slate-900 border p-8 flex-col`}
              >
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                    </svg>
                  </div>
                  <h2
                    className={`text-gray-50 sm:text-2xl xs:text-[18px] title-font font-medium duration-1000 transition-color-1000 mb-1`}
                  >
                    Elmuratov Salimbay
                  </h2>
                </div>
                <div className='flex-grow'>
                  <h2 className='sm:text-2xl xs:text-[13px] text-center mb-2'>
                    ⭐ Front-end Developer
                  </h2>
                  <a
                    href='https://t.me/YelimuratovSalimbay'
                    className='scale mt-3 text-indigo-500 inline-flex items-center cursor-pointer'
                  >
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/2'>
              <div
                className={`flex rounded-lg h-full bg-slate-900 border p-8 flex-col`}
              >
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                    </svg>
                  </div>
                  <h2
                    className={`text-gray-50 sm:text-2xl xs:text-[18px] title-font font-medium duration-1000 transition-color-1000 mb-1`}
                  >
                    Oralbaev Diyarbek
                  </h2>
                </div>
                <div className='flex-grow'>
                  <h2 className='sm:text-2xl xs:text-[13px] text-center mb-2'>
                    ⭐ Back-end Developer
                  </h2>
                  <a
                    href='https://t.me/Diyarbek_Dev'
                    className='scale mt-3 text-indigo-500 inline-flex items-center cursor-pointer'
                  >
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
