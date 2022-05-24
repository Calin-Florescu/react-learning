import React from 'react'

export default function Input({onChange, id}) {
    return (
        <div>
            <div>
                <label>{`Operator ${id}`}</label>
            </div>
                <input id={id} type="number" onChange={onChange}/> 
        </div>
    )
}
