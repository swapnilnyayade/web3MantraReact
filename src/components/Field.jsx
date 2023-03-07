import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Field = ({name, email, index, removeData}) => {

  return (
    <div className='data_val' key={index}>

    <h4>{name}</h4>
    <h4>{email}</h4>

    <Button onClick={() => removeItem(index)} variant="contained" color="error">
      <DeleteIcon />
    </Button>
    </div>
  )
}

export default Field
