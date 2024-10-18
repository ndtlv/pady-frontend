import LayoutTemplate from './components/common/layoutTemplate'
import SearchPage from './components/homePage/searchPage'

export default function Home({ params }) {
  return (
    <LayoutTemplate pageContent={<SearchPage params={params}/>}/>
  )
}
