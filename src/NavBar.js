import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LoginIcon from '@mui/icons-material/Login';
import {AccountCircle} from "@mui/icons-material";
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';

export default function NavBar(props) {

    return <AppBar
            position='static'
            >
             <Toolbar>
                 <IconButton
                     color='inherit'
                     onClick={()=>{
                         props.togglerCallback();
                     }}
                     sx={props.auth? {}:{ //if authorized, nothing is applied
                         visibility: {
                             xs: 'hidden', //if not, make it hidden on small screens
                             lg: 'visible'
                         },
                         display: {
                             xs: 'inline',
                             lg: 'none' //and remove on large screens
                         }
                     }}
                 >
                     <MenuIcon fontSize='large'/>
                 </IconButton>
                 <Box
                     sx={{
                         flexGrow: 1,
                         display: 'flex',
                         justifyContent: {
                             xs: 'center',
                             lg: 'start'
                         },
                         alignItems: 'center',
                         p: '8px'
                     }}
                 >
                     <VisibilityIcon
                        fontSize='medium'
                        sx={{
                            marginX: '8px'
                        }}
                     />
                     <Typography
                         variant='h6'
                     >
                         EasyView
                     </Typography>
                 </Box>
                 <IconButton
                     size='large'
                     color='inherit'
                     aria-controls='menu-appbar'
                     onClick={props.handleAuth}
                 >
                     {props.auth? <AccountCircle fontSize='large'/> : <LoginIcon fontSize='large'/>}
                 </IconButton>
             </Toolbar>
           </AppBar>
}
