import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material'
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'

const Understanding = () => {

    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    // ready to use useNavigate, useNavigate setup
    const navigate = useNavigate()

     // click handler button function will navigate to its destination
    const onClickHandler = () => {
        dispatch({
            type: "ADD_DATA",
            payload: {understanding : value}
        })
        navigate("/support")
    }

    return (
        <>
        <div style={{marginTop: "2rem", marginBotton: "2rem"}}>
        <TextField
          error = {value === ""}
          type = "number"
          id="outlined-error-helper-text"
          label="Understanding?"
          value={value}
          onChange={(event)=>setValue(event.target.value)}
          helperText={value === "" ? "Value Cannot Be Empty" : ""}
        />
        </div>
        <div>
            <Button variant="contained" onClick={onClickHandler}
            disabled = {value === ""}
            >Next</Button>
        </div>
        </>
    )
}

export default Understanding
