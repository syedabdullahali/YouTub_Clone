import { useState } from 'react'
import {useNavigate}from 'react-router-dom'

import { Paper,IconButton} from '@mui/material'
import { Search } from '@mui/icons-material'

import React from 'react'

const SarchBar = () => {
  return (
    <Paper 
    component='form'
    onSubmit={()=>{}}
    sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5}
    }}
    >
     <input
       className='search-bar'
       placeholder='Search...'
       value=''
       onChange={()=>{}}
       style={{border:'none',outline:'none',width:'20rem'}}
     />
     <IconButton
      type='submit' 
      sx={{
        px:'10px',
        color:'red'
      }}
      >
        <Search/>
     </IconButton>
    </Paper>
  )
}

export default SarchBar
