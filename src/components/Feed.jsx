import React from 'react'
import { useEffect,useState } from 'react'
import { Box,Stack,Typography } from '@mui/material'
import {Sidebar,Videos} from './'

const Feed = () => {
  return (
    <Stack sx={{
      flexDirection:{
        sx:'column',
        md:'row'
      }
    }}>
      <Sidebar/>

      <Box sx={{
        height:{
          sx:'auto',
          md:'92vh'
        },
        borderRight:'1px solid #3d3d3d',
        px:{sx:0,md:2}
      }}>

       <Typography className="copyright" variant='body2'
        sx={{mt:1.5,color:'#fff'}}>
          Copyrigth 2022 JSM Media 
       </Typography>  
      </Box>
      <Box p={2} sx={{overflow:'auto'
      ,heigh:'90vh',flex:2}}>
      <Typography variant='h4' 
      fontWeight='bold' mb={2}
      sx={{
        color:'white'
      }}>
        New<span style={{color:'#F31503'}}
        >videos</span>
      </Typography>
      <Videos videos={[]} />
      </Box>
    </Stack>
  )
}

export default Feed
