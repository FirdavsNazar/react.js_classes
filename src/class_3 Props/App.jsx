import React from 'react'

const User = (props) =>{
 return (
    <div>
        <h1>Hello everyone my name is - {props.firstName}, and surname is - {props.lastName}</h1>
        <p>You can check my portfolio by click this link <a href={props.link} target='_blank'> My Portfolio</a></p>
    </div>
 )
}


const App = () => {
  return (
    <div>
        <User firstName = 'Firdavs'  lastName= "Nazarov"  link= "mychanel.com"/>
        <User firstName = 'Abdulloh'  lastName= "MuhammadAliyev"  link= "https://cyber.gachon.ac.kr/"/>
    </div>
  )
}

export default App