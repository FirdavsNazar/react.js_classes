import React, { useState, useEffect } from 'react';
import './App.css';
import AppInfo from "../App-info/App-info";
import AppFilter from "../App-filter/App-filter";
import SearchPanel from "../Search-panel/Search-panel";
import MovieList from '../Movie-list/movie-list';
import MoviesAddForm from '../Movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const onDelete = id => {
    setData(data.filter(a => a.id !== id));
  }

  const addForm = item => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4()
    };
    setData([...data, newItem]);
  }

  const searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1);
  }

  const filterHandler = (arr, filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.favourite);
      case 'mostViewed':
        return arr.filter(c => c.viewers > 800);
      default:
        return arr;
    }
  }

  const updateTermHandler = term => setTerm(term);
  const updateFilterHandler = filter => setFilter(filter);

  const visibleData = filterHandler(searchHandler(data, term), filter);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
      .then(response => response.json())
      .then(json => {
        const newArr = json.map(item => ({
          name: item.title,
          id: item.id,
          viewers: item.id * 20,
          favourite: false,
          like: false
        }))
        setData(newArr)
      })
      .catch(err => console.log())
    }, [])

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
        </div>
        <MovieList data={visibleData} onDelete={onDelete} />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  );
}

export default App;





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





  




    /////////////////////////////////////////////////////////////////////////////////
    // Class components

    // import './App.css'

// import AppInfo from "../App-info/App-info"
// import AppFilter from "../App-filter/App-filter"
// import SearchPanel from "../Search-panel/Search-panel"
// import MovieList from '../Movie-list/movie-list'
// import MoviesAddForm from '../Movies-add-form/movies-add-form'
// import { Component, useEffect } from 'react'
// import {v4 as uuidv4} from 'uuid'

// class App extends Component{
//   constructor(props){
//     super(props)

//     this.state = {
//       data: [
//        {name: "Abdulloh",  viewers:675, favourite: false, id: 1 },
//        {name: "Sen Yetim Emassan",  viewers:1432, favourite: true, id:2 },
//        {name: "Ey ko'ngil",  viewers:995, favourite: false, id:3 }
     
//      ],
//      term: '',
//      filter: 'all',
//     }
//   } 

//     onDelete = id =>{
//       this.setState(({data}) =>({
//         data: data.filter(a => a.id !==  id),
//       }))
//     }

//     addForm = item => {
//       const newItem = {
//         name: item.name,
//         viewers: item.viewers,
//         id: uuidv4()
//       };  
    
//       this.setState(({ data }) => ({
//         data: [...data, newItem]
//       }));
//     }

//     searchHandler = (arr, term) => {
//       if (term.length === 0) {
//           return arr
//       }

//       return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
//     }

//     filterHandler = (arr, filter) => {
//       switch (filter) {
//         case 'popular':
//           return arr.filter(c => c.favourite)
//         case 'mostViewed':
//           return arr.filter(c => c.viewers > 800)
      
//         default:
//           return arr
//       }
//     }

//     updateTermHandler = term => this.setState({term})

//     updateFilterHandler = filter => this.setState({filter})


//   render(){
//     const {data, term, filter} = this.state
//     const visibleData = this.filterHandler(this.searchHandler(data, term), filter) 
//     return (
//       <div className="app font-monospace">
//         <div className="content">
//           <AppInfo/>
//           <div className='search-panel'>
//             <SearchPanel  updateTermHandler={this.updateTermHandler}/>
//             <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
//           </div>
//           <MovieList data ={visibleData} onDelete={this.onDelete}/>
//           <MoviesAddForm addForm={this.addForm}/>
//         </div>
        
//       </div>
//     )
//   }
// }

// export default App
