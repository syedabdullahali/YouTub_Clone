import { Box,Stack } from '@mui/material'
import { VideoCard,ChannelCard } from './'
const Video = ({videos,direction}) => {
  console.log(videos)
  if(!videos)return 'Loding....'
  return (
    <Stack 
    direction={direction||'row'}
    flexWrap='wrap'
    justifyContent='start'
    alignContent='center'
    margin='auto'
    gap={2}
    >
      {videos.map((item,index)=>(
       <Box key={index}>
            {item.id.videoId &&<VideoCard video={item}/>}  
            {item.id.channelId &&<ChannelCard channeLdetail={item} marginTop='0px'/>}     
         </Box>
      ))}
    </Stack>
  )
}

export default Video
