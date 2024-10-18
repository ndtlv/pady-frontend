import LayoutTemplate from '../components/common/layoutTemplate'
import AboutPage from '../components/aboutPage/aboutPage'

export default function Home({ params }) {
  return (
    <LayoutTemplate pageContent={<AboutPage params={params}/>}/>
  )
}
