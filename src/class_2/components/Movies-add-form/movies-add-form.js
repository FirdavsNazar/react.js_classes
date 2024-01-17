
import {React, Component} from 'react'
import './movies-add-form.css'

// Class Components/////////////////////////////////////////////////////////////////////////////////

class MoviesAddForm extends Component {
constructor(props){
  super(props)
  this.state ={
    name: '',
    views: ''
  }

}

changeName = e =>{
  this.setState({[e.target.name]: e.target.value})
  // console.log(e);
}

addFormHandler = e => {
  e.preventDefault()
  this.props.addForm({name: this.state.name, viewers: this.state.views})
  this.setState({
    name: '',
    views: ''
  })
}

  render(){
    const {name, views} = this.state
    return (
      <div className='movies-add-form'>
          <h3>Yangi kino qo'shish</h3>
  
          <form className='add-form d-flex' onSubmit={this.addFormHandler}>
              <input onChange={this.changeName} name='name' value={name} type="text" className='form-control new-post-label' placeholder='Qanday kino?' />
              <input onChange={this.changeName} name='views' value={views} type="Number" className="form-control new-post-label' placeholder='Nechi marotaba ko'rilgan?" />
              <button type='submit' className='btn btn-outline-dark'> Qo'shish</button>
          </form>
      </div>
      )
    }
  }


// Function Components//////////////////////////////////////////////////////////////////////////////

// const MoviesAddForm = () => {
//   return (
//     <div className='movies-add-form'>
//         <h3>Yangi kino qo'shish</h3>

//         <form className='add-form d-flex'>
//             <input type="text" className='form-control new-post-label' placeholder='Qanday kino?' />
//             <input type="Number" className="form-control new-post-label' placeholder='Nechi marotaba ko'rilgan?" />
//             <button type='submit' className='btn btn-outline-dark'> Qo'shish</button>
//         </form>
//     </div>
//   )
// } 

export default MoviesAddForm