import React, {useState, useEffect} from 'react'
import { API } from '../../const'
import Card from './Card'

export default function UserList() {
    const [userList, setUserList] = useState([])

    useEffect(() =>{
        fetch(API, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        }).then(res => {
            if(res)
                return res.json()
            return new Error('Error retrieving data')
        }).then(data => setUserList(data))
        .catch(e => console.error(e))
    }, [])

    console.log(userList)
    
    return (
        <div>
            {userList.map(user => <Card name={user.login} avatar={user.avatar_url} key={user.login}/>)}
        </div>
    )
}
