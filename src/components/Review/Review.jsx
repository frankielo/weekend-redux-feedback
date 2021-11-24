import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material'
import {useSelector} from 'react-redux'

const Review = () => {
    // ready to use useNavigate, useNavigate setup
    const navigate = useNavigate()

    const userFormvalues = useSelector((storeIns)=>{
        return storeIns.addDataReducer
    })

    // click handler button function will navigate to its destination
    const onClickHandler = () => {
        navigate("/")
    }

    return (
        <div>
            <Button variant="contained" onClick={onClickHandler}>Submit</Button>
        </div>
    )
}

export default Review
