import { useState,useRef } from "react"


const User = ({firtname, lastname, Link})=>{

    return (
        <div className="w-50 mx-auto mb-5">
            <div className="border p-3 mt-5">
                <input type="text" className="form-control" placeholder={"Card number"} />
    
            </div>
        </div>
    )
}

function App() {
  return <User firstname= 'Firdavs' lastname= 'Nazarov' Link = 'www.fredrick' />
}

export default App