import TrendingGifs from '@containers/trendingGifs'
import { PrevSearch } from '@containers/prevSearch'
import { Header } from '@containers/header'
import Search from '@elements/search'
import "./home.css"

export function Home() {
  return(
    <>
      <Header>
        <Search />
      </Header>

      <TrendingGifs />
      
      <PrevSearch />
    </>
  )
}