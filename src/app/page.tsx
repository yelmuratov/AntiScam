import CheckInput from '@/components/checkInput'
import Header from '@/components/header'
import Title from '@/components/title'

const MainPage = () => {
  return (
    <div className={`lg:mt-18 md:mt-18`}>
      <Header />
      <Title
        title='Check your Links :)'
        subtitle='Check for broken links on your website with our free online tool.'
      />
      <CheckInput />
    </div>
  )
}

export default MainPage;
