import { useState,useRef } from "react"


const User = ()=>{

    const [cardNumber, setCardNumber] = useState('')
    const [dataNumber, setDataNumber] = useState('')

    const cvcRef = useRef(null)
    const dataRef = useRef(null)

    const handleInput = e => {
        const val = e.target.value
        setCardNumber(val)
        if(val.length === 16){
            cvcRef.current.focus()
        }
    }

    
    const handleInputVal = e =>{
        const val = e.target.value
        setDataNumber(val)
        if (val.length === 3) {
            dataRef.current.focus()
        }
    }

    return (
        <div className="w-50 mx-auto mb-5">
            <div className="border p-3 mt-5">
                <input type="number" className="form-control" placeholder={"Card number"} onChange={handleInput} value={cardNumber} />
                <input ref={cvcRef} type="text" className="form-control mt-2 " placeholder={"cvc"} onChange={handleInputVal} value={dataNumber} />
                <input ref={dataRef} type="text" className="form-control mt-2 " placeholder={"Year/Month"} maxLength={cardNumber.length === 3 ? 6 : undefined} />
    
            </div>
        </div>
    )
}

function App() {
  return <User firstname= 'Firdavs' lastname= 'Nazarov' Link = 'www.fredrick' />
}


export default App