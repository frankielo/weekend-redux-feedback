import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material'
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'

const Comments = () => {

    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    // ready to use useNavigate, useNavigate setup
    const navigate = useNavigate()

     // click handler button function will navigate to its destination
    const onClickHandler = () => {
        dispatch({
            type: "ADD_DATA",
            payload: {comments : value}
        })
        navigate("/review")
    }

    return (
        <>
        <div style={{marginTop: "2rem", marginBotton: "2rem"}}>
        <TextField
          id="outlined-error-helper-text"
          label="Comments?"
          value={value}
          onChange={(event)=>setValue(event.target.value)}
        />
        </div>
        <div>
            <Button variant="contained" onClick={onClickHandler}>Next</Button>
        </div>
        </>
    )
}

export default Comments
