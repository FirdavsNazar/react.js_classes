import React from 'react'

const User = ({firstName, lastName, link}) =>{
 return (
    <div>
        <h1>Hello everyone my name is - {firstName.name}, and surname is - {lastName}, age {firstName.age}</h1>
        <p>You can check my portfolio by click this link <a href={link} target='_blank'> My Portfolio</a></p>
    </div>
 )
}


const App = () => {
  return (
    <div>
        <User firstName = {{name: "Firdavsbek", age: 23}}  lastName= "Nazarov"  link= "mychanel.com"/>
        <User firstName = {{name: "Abdulloh", age: 25}}  lastName= "MuhammadAliyev"  link= "https://cyber.gachon.ac.kr/"/>
    </div>
  )
}

export default App