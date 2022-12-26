import React from 'react'
import {BrowserRouter,Route,Routes}  from "react-router-dom"
import { Box } from '@mui/system'
// here box is nthing more instead of simple div element 

import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components'

const App = () => (
    <BrowserRouter>     
      <Box sx={{backgroundColor:'#000'}}>

       <Navbar/>

       <Routes>
         <Route path='/' element={<Feed/>}/>
         <Route path="/video:id" element={<VideoDetail/>}/>
         <Route path="/channel/:id" element={<ChannelDetail/>}/>
         <Route path="/search:searchTerm" element={<SearchFeed/>}/>
       </Routes>

      </Box>
    </BrowserRouter>
  )


export default App


// Difference between js and Jsx File in react 