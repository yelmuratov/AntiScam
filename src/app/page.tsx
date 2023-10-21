import CheckInput from "@/components/checkInput"
import Title from "@/components/title"

const MainPage = () => {
  return (
    <>
      <Title
        title='Check your Links :)'
        subtitle='Check for broken links on your website with our free online tool.'
      />
      <CheckInput />
    </>
  )
}

export default MainPage