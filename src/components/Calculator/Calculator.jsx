import React, {useState} from 'react'
import Input from './Input'

export default function Calculator() {
    const [a, setA] = useState(0)
    const [b, setB]= useState(0)
    const [r, setR] = useState(0)
    console.log(r)

    const handleChange = (e) => {
        const eventValue = parseInt(e.target.value)
        const eventId = parseInt(e.target.id)
        if(eventId === 1)
            setA(eventValue)
        else if(eventId === 2)
            setB(eventValue) 
    }
    
    const addNumber = () => {
        setR(a + b)
    }

    return (
        <div>
            <Input onChange={handleChange} id={1}/> 
            <Input onChange={handleChange} id={2}/> 
            <button onClick={addNumber}> Add </button>
            <label>{r} </label>
        </div>
    )
}
