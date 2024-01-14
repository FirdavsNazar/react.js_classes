import { Component } from 'react';
import './movie-list-item.css'

// Class components

class MovieListItem extends Component {

  render(){
    const {name, viewers, favourite} = this.props
    return (
         <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
       <span className='list-group-item-label'>{name}</span>
       <input type="number" className='list-group-item-input' defaultValue={viewers} />
       <div className='d-flex justify-content-center align-items-center'>
         <button type='button' className='btn-cookie btn-sm'>
           <i className='fas fa-cookie'></i>
         </button>
         <button type='button' className='btn-trash btn-sm'>
           <i className='fas fa-trash'></i>
         </button>
         <i className='fas fa-star'></i>
       </div>
     </li>
  
    )
   }
  }



//Function components
 
//  const MovieListItem = ({name, viewer, favourite}) => {
//   const defaultViewer = viewer >= 0 ? viewer : 123;  
//    return (
//         <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
//       <span className='list-group-item-label'>{name}</span>
//       <input type="number" className='list-group-item-input' defaultValue={Math.max(defaultViewer, 0)} />

//       <div className='d-flex justify-content-center align-items-center'>
//         <button type='button' className='btn-cookie btn-sm'>
//           <i className='fas fa-cookie'></i>
//         </button>
//         <button type='button' className='btn-trash btn-sm'>
//           <i className='fas fa-trash'></i>
//         </button>
//         <i className='fas fa-star'></i>
//       </div>
//     </li>

//    )
//  }
  
 export default MovieListItem