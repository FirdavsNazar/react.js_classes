import './App.css'

import AppInfo from "../App-info/App-info"
import AppFilter from "../App-filter/App-filter"
import SearchPanel from "../Search-panel/Search-panel"
import MovieList from '../Movie-list/movie-list'
import MoviesAddForm from '../Movies-add-form/movies-add-form'

const App = () => {
  const data= [
    {name: "Abdulloh",  viewe:675, favourite: false },
    {name: "Sen Yetim Emassan",  viewe:1432, favourite: true },
    {name: "Ey ko'ngil",  viewe:995, favourite: false }
  
  ]



  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
        </div>
        <MovieList data ={data}/>
        <MoviesAddForm/>
      </div>
      
    </div>
  )
}

export default App
