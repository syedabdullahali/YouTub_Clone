import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'
import SarchBar  from './SearchBar'

const Navbar = () => (
    <Stack direction='row' alignItems='center' p={2} 
    sx={{ position:'sticky',
          background:'#000',
          top:'0',
          zIndex:'15',
          justifyContent:'space-between'
         }}>

            <Link to='/' style={{display:'flex',alignItems:'center'}} >
                <img src={logo} alt='logo' height={45}/>
            </Link>
            <SarchBar/>
    </Stack>
  )


export default Navbar
