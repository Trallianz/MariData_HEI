import React from 'react'
import './Dropdown.css'

interface DropdownProps{
    currentSelect: any;
    setCurrentSelect: any;
}

const Dropdown = (props: DropdownProps) => {

    const handleClick= () => {
        props.setCurrentSelect("eco-score");
    }

    const handleClick2= () => {
        props.setCurrentSelect("time");
    }

    const handleClick3= () => {
        props.setCurrentSelect("date");
    }

    return (
        <div className='dropdown'>
            <ul>
                <li onClick={handleClick}>eco-score</li>
                <li onClick={handleClick2}>time</li>
                <li onClick={handleClick3}>date</li>
            </ul>
        </div>
    )
}

export default Dropdown