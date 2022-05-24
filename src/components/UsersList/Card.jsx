import React from 'react'

export default function Card({name, avatar}) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={avatar}/>
        </div>
    )
}
