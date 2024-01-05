import './App.css'

import AppInfo from "../App-info/App-info"
import AppFilter from "../App-filter/App-filter"
import SearchPanel from "../Search-panel/Search-panel"
import MovieList from '../Movie-list/movie-list'

const App = () => {
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
        </div>
        <MovieList/>
      </div>
      
    </div>
  )
}

export default App
