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
     
     ]
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
    

  render(){
    const {data} = this.state
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo/>
          <div className='search-panel'>
            <SearchPanel/>
            <AppFilter/>
          </div>
          <MovieList data ={data} onDelete={this.onDelete}/>
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
