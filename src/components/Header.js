import React from 'react'
import Button from './Button'
import {useLocation} from 'react-router-dom'


const Header = ({onAdd, showAddTask}) => {
    const location = useLocation()
    return (
        <header className = "header">
            <h1>Task Tracker</h1>
            
            {location.pathname==='/' &&(<Button text={showAddTask? 'Close':'Add'} onClick={onAdd} color={showAddTask? 'red':''}/>)}      
        </header>
    )
}

export default Header
