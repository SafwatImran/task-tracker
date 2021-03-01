import React from 'react'

const Button = () => {
    const click = (event) =>{
        console.log(event)
    }
    return (
            <button onClick={click} className='btn'>Add</button>
    )
}

export default Button
