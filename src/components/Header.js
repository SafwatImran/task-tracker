import React from 'react'
import Button from './Button'


const Header = ({onAdd, showAddTask}) => {
    return (
        <header className = "header">
            <h1>Task Tracker</h1>
            <Button text={showAddTask? 'Close':'Add'} onClick={onAdd} color={showAddTask? 'red':''}/>      
        </header>
    )
}

export default Header
