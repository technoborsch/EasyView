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
                 {props.auth?
                 <IconButton
                     color='inherit'
                     onClick={()=>{
                         props.togglerCallback();
                     }}
                 >
                     <MenuIcon />
                 </IconButton> : <></>}
                 <Box
                     sx={{
                         flexGrow: 1,
                         display: 'flex',
                         justifyContent: {
                             xs: 'center',
                             lg: 'start'
                         },
                         p: '8px'
                     }}
                 >
                     <VisibilityIcon
                        sx={{
                            marginX: '8px'
                        }}
                     />
                     <Typography>
                         EasyView
                     </Typography>
                 </Box>
                 <IconButton
                     size='large'
                     color='inherit'
                     aria-controls='menu-appbar'
                     onClick={props.handleAuth}
                 >
                     {props.auth? <AccountCircle /> : <LoginIcon />}
                 </IconButton>
             </Toolbar>
           </AppBar>
}
