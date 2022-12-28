import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromApi';


const ChannelDetail = () => {

  const [channelDetail,setChanneLdetail]=useState(null) 
  const [videos,setVideos]=useState([])

  const {id} =useParams()
  console.log(channelDetail,videos)
 
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
   .then((data)=>setChanneLdetail(data?.items[0]))

   fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
   .then((data)=>setVideos(data?.items))
  },[id])
   
  return (
    <Box minHeight='95vh'>
      <Box>
         <div style={{
            height:'300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
         }}/>
         <ChannelCard channeLdetail={channelDetail}  marginTop='-110px' />      
     </Box>

    <Box display='flex'>
      <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
