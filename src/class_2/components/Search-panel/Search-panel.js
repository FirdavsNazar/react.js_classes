import { Component } from 'react'
import './Search-panel.css'

// Class Components********************************************************************************************

class SearchPanel extends Component {
  constructor(props){
    super(props)
    this.state = { term: '' }
  }

  updateTermHandler = e => {
    const term = e.target.value.toLowerCase()
    this.setState({term})
    this.props.updateTermHandler(term)
  }
   render(){
  return <input type="text" 
  className="form-control search-input" 
  placeholder="Kinolarni qidirish" 
  onChange={this.updateTermHandler} 
  value={this.state.term} />
}}




export default SearchPanel


// Function Components*****************************************************************************************


// const SearchPanel = () => {
//   return <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish" />
// }

// export default SearchPanel
