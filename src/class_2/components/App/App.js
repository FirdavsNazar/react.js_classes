import './App.css'

import AppInfo from "../App-info/App-info"
import AppFilter from "../App-filter/App-filter"
import SearchPanel from "../Search-panel/Search-panel"
import MovieList from '../Movie-list/movie-list'
import MoviesAddForm from '../Movies-add-form/movies-add-form'
import { Component } from 'react'
import {v4 as uuidv4} from 'uuid'


// Class Components********************************************************************************

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      data: [
       {name: "Abdulloh",  viewers:675, favourite: false, id: 1 },
       {name: "Sen Yetim Emassan",  viewers:1432, favourite: true, id:2 },
       {name: "Ey ko'ngil",  viewers:995, favourite: false, id:3 }
     
     ],
     term: '',
     filter: 'all',
    }
  } 

    onDelete = id =>{
      this.setState(({data}) =>({
        data: data.filter(a => a.id !==  id),
      }))
    }

    addForm = item => {
      const newItem = {
        name: item.name,
        viewers: item.viewers,
        id: uuidv4()
      };  
    
      this.setState(({ data }) => ({
        data: [...data, newItem]
      }));
    }

    searchHandler = (arr, term) => {
      if (term.length === 0) {
          return arr
      }

      return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }

    filterHandler = (arr, filter) => {
      switch (filter) {
        case 'popular':
          return arr.filter(c => c.favourite)
        case 'mostViewed':
          return arr.filter(c => c.viewers > 800)
      
        default:
          return arr
      }
    }

    updateTermHandler = term => this.setState({term})

    updateFilterHandler = filter => this.setState({filter})
    

  render(){
    const {data, term, filter} = this.state
    const visibleData = this.filterHandler(this.searchHandler(data, term), filter) 
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo/>
          <div className='search-panel'>
            <SearchPanel  updateTermHandler={this.updateTermHandler}/>
            <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
          </div>
          <MovieList data ={visibleData} onDelete={this.onDelete}/>
          <MoviesAddForm addForm={this.addForm}/>
        </div>
        
      </div>
    )
  }
}

export default App



// Function Commponents*****************************************************************************

// const App = () => {
//   const data= [
//     {name: "Abdulloh",  view:675, favourite: false, id: 1 },
//     {name: "Sen Yetim Emassan",  viewe:1432, favourite: true, id:2 },
//     {name: "Ey ko'ngil",  view:995, favourite: false, id:3 }
  
//   ]
//   return (
//     <div className="app font-monospace">
//       <div className="content">
//         <AppInfo/>
//         <div className='search-panel'>
//           <SearchPanel/>
//           <AppFilter/>
//         </div>
//         <MovieList data ={data}/>
//         <MoviesAddForm/>
//       </div>
      
//     </div>
//   )
// }

// export default App
