import {Box,CardContent,CardMedia,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import {Link} from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channeLdetail}) => (
    <Box sx={{
      boxShadow:'none',
      borderRadius:'20px',
      display:'flex',
      justifyContent:'center',
      alignItem:'center',
      width:{xs:'356px',md:'320px'},
      height:'326px',
      margin:'auto'
    }}> 

    <Link to ={`/channel/${channeLdetail?.id?.channelId}`}>
    <CardContent sx={
      {display:'flex'
      ,justifyContent:'center',
      flexDirection:'column',
      textAlign:'center',
      color:'#fff',
      }}>

      <CardMedia
      image={channeLdetail?.snippet?.thumbnails?.high.url|| demoProfilePicture}
      alt={channeLdetail?.snippet?.title}
      sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}
      />

      <Typography variant='h6'>
       {channeLdetail?.snippet?.title}
       <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />

      </Typography>

      <Typography>
        {parseInt(channeLdetail?.statistics?.subscriberCount).toLocaleString() } Subcriber
      </Typography> 

    </CardContent>
    </Link>

    </Box>
  )

export default ChannelCard
