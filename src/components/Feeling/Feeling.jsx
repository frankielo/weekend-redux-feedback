import React from 'react'
import {useNavigate} from 'react-router-dom' 

const Feeling = () => {
    // ready to use useNavigate, useNavigate setup
    const navigate = useNavigate()
     // click handler button function will navigate to its destination
    const onClickHandler = () => {
        navigate("/understanding")
    }

    return (
        <div>
            <button onClick={onClickHandler}>Next</button>
        </div>
    )
}

export default Feeling
