import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'

import { CheckCircle } from '@mui/icons-material'
import { demoVideoUrl, demoVideoTitle, demoChannelTitle } from '../utils/constants'

const VideoCrad = ({ video: { id:{videoId}, snippet } }) => {
    console.log(videoId)
    return (
        <Card sx={{
            width:{md:'320px',xs:'100%'},
            boxShadow:'none',
            borderRadius:'0'
            }}>

            <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title} sx={{ width: {md:'320px',xs:'100%'}, height: 180,cursor:'pointer' }} />

            </Link >

            <CardContent sx={{
                backgroundColor: '#1e1e1e',
                height: '106px',
            }}>
                <Link to={snippet?.channelI ?`/channel/${ snippet?.channelId }`: demoVideoUrl}>

                <Typography
                    variant='subtitle1'
                    fontWeight='bold'
                    color= 'white'
                >
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
                <Typography
                    variant='subtitle2'
                    fontWeight='bold'
                    color='gray'
                >
                    {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
                </Link>

            </CardContent>
        </Card>
    )
}

export default VideoCrad
