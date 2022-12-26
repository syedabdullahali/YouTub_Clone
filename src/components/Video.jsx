import { Box,Stack } from '@mui/material'
import { VideoCard,ChannelCard } from './'
const Video = ({videos}) => {
  console.log(videos)
  return (
    <Stack 
    direction='row'
    flexWrap='wrap'
    justifyContent='start'
    alignContent='center'
    gap={2}
    >
      {videos.map((item,index)=>(
       <Box key={index}>
            {item.id.videoId &&<VideoCard video={item}/>}  
            {item.id.channelId &&<ChannelCard channeLdetail={item}/>}     
         </Box>
      ))}
    </Stack>
  )
}

export default Video
