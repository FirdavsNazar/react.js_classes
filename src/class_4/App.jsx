
 import { Component } from "react";

class User extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0, age:''
        }
    }

    Increment=() =>{
        this.setState(prevState => ({
            counter: prevState.counter+1
        }))
    }

    Decrement=() =>{
        this.setState(prevState => ({
            counter: prevState.counter-1
        }))
    }

    Restart = () =>{
        this.setState({counter: 0})
    }

    render(){
        const {firstName, lastName, link} = this.props
        return(
            <div className="w-50 mx-auto">
                <div className="border p-3 mt-5">
                <h3>
                    Mening ismim - {firstName}, sharifim - {lastName}
                </h3>
                <a href={link}> Youtube kanali</a>
                    <div className="mt-3">
                    <button onClick={this.Increment} className="btn btn-success"> Click(+)</button>
                    <button onClick={this.Decrement} className="btn btn-danger mx-2"> Click(-)</button>
                    <button onClick={this.Restart} className="btn btn-info"> Restart</button>
                    
                    <form>
                        
                        <input type="text" />

                    </form>
                   
                    
                         <p>{this.state.counter}</p>
                    </div>
                </div>
            </div>
        )
    }

}

const App = () => {
    return (
      <div>
          <User firstName = "Firdavsbek"  lastName= "Nazarov"  link= "mychanel.com"/>
          <User firstName = "Abdulloh"  lastName= "MuhammadAliyev"  link= "https://cyber.gachon.ac.kr/"/>
      </div>
    )
  }
  
  export default App