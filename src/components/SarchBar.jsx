import { useState } from 'react'
import {useNavigate}from 'react-router-dom'

import { Paper,IconButton} from '@mui/material'
import { Search } from '@mui/icons-material'

import React from 'react'

const SarchBar = () => {

  const [searchTerm,setSearchTerm] =useState('')
  const navigate = useNavigate()

  const sumbitHandler =(e)=>{
    e.preventDefault();      
    if(searchTerm){
      console.log(searchTerm)
      navigate(`/search/${searchTerm}`)
    }

  }


  return (
    <Paper 
    component='form'
    onSubmit={sumbitHandler}
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
       value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)}
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
