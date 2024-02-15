
// Class Components///////////////////////////////////////////////////////////

//  import { Component } from "react";

// class User extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             counter: 0, age:''
//         }
//     }

//     Increment=() =>{
//         if(this.state.counter < 32){
//             this.setState(prevState => ({
//                 counter: prevState.counter+1
//             }))
//         }
//     }

//     Decrement=() =>{
//         if(this.state.counter > 0){
//             this.setState(prevState => ({
//                 counter: prevState.counter-1
//             }))
//         }
//     }

//     Restart = () =>{
//         this.setState({counter: 0})
//     }

//     changeAge = e => {
//         this.setState({age: e.target.value})
//     }

//     render(){
//         const {firstName, lastName, link} = this.props
//         const {age} = this.state
//         return(
//             <div className="w-50 mx-auto">
//                 <div className="border p-3 mt-5">
//                 <h3>
//                     Mening ismim - {firstName}, sharifim - {lastName},  yoshim: {age}
//                 </h3>
//                 <a href={link}> Youtube kanali</a>
//                     <div className="mt-3">
//                     <button onClick={this.Increment} className="btn btn-success"> Click(+)</button>
//                     <button onClick={this.Decrement} className="btn btn-danger mx-2"> Click(-)</button>
//                     <button onClick={this.Restart} className="btn btn-info"> Restart</button>
//                          <p>{this.state.counter}</p> 
//                     </div>
                    
//                     <form>
//                         <span>Yoshingiz</span>
//                         <input type="text" className="form-control" onChange={this.changeAge} />

//                     </form>
//                 </div>
//             </div>
//         )
//     }

// }

// const App = () => {
//     return (
//       <div>
//           <User firstName = "Firdavsbek"  lastName= "Nazarov"  link= "mychanel.com"/>
//           <User firstName = "Abdulloh"  lastName= "MuhammadAliyev"  link= "https://cyber.gachon.ac.kr/"/>
//       </div>
//     )
//   }
  
//   export default App






// Function Components ///////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';

const User = ({ firstName, lastName, link }) => {
    const [counter, setCounter] = useState(0);
    const [age, setAge] = useState('');

    const Increment = () => {
        if (counter < 32) {
            setCounter(prevCounter => prevCounter + 1);
        }
    }

    const Decrement = () => {
        if (counter > 0) {
            setCounter(prevCounter => prevCounter - 1);
        }
    }

    const Restart = () => {
        setCounter(0);
    }

    const changeAge = (e) => {
        setAge(e.target.value);
    }



    useEffect(() => {
        document.title = `Counter: ${counter}`

        return () => console.log("Deleted");
    }, [])

    return (
        <div className="w-50 mx-auto">
            <button>Delete</button>
            <div className="border p-3 mt-5">
                <h3>
                    Mening ismim - {firstName}, sharifim - {lastName},  yoshim: {age}
                </h3>
                <a href={link}> Youtube kanali</a>
                <div className="mt-3">
                   
                    <button onClick={Increment} className="btn btn-success"> Click(+)</button>
                    <button onClick={Decrement} className="btn btn-danger mx-2"> Click(-)</button>
                    <button onClick={Restart} className="btn btn-info"> Restart</button>
                    <p>{counter}</p>
                </div>

                <form>
                    <span>Yoshingiz</span>
                    <input type="text" className="form-control" onChange={changeAge} />

                </form>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <User firstName="Firdavsbek" lastName="Nazarov" link="mychanel.com" />
            <User firstName="Abdulloh" lastName="MuhammadAliyev" link="https://cyber.gachon.ac.kr/" />
        </div>
    )
}

export default App;
