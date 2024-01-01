import './App.css'

import AppInfo from "../App-info/App-info"
import AppFilter from "../App-filter/App-filter"
import SearchPanel from "../Search-panel/Search-panel"

const App = () => {
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
        </div>
      </div>
      
    </div>
  )
}

export default App
