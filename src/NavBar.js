import React, {useState} from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LoginIcon from '@mui/icons-material/Login';
import {AccountCircle} from "@mui/icons-material";
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import {Menu} from "@mui/material";
import {MenuItem} from "@mui/material";

export default function NavBar(props) {

    const[anchorEl, setAnchorEl] = useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                     onClick={props.auth? handleMenu : props.handleAuth}
                 >
                     {props.auth? <AccountCircle fontSize='large'/> : <LoginIcon fontSize='large'/>}
                 </IconButton>
                 <Menu
                     sx={{
                         mt: '45px'
                     }}
                     anchorEl={anchorEl}
                     anchorOrigin={{
                         vertical: 'top',
                         horizontal: 'right'
                     }}
                     keepMounted
                     transformOrigin={{
                         vertical: 'top',
                         horizontal: 'right'
                     }}
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                 >
                     <MenuItem>Настройки</MenuItem>
                     <MenuItem onClick={() => {handleClose(); props.handleAuth()}}>Выход</MenuItem>
                 </Menu>
             </Toolbar>
           </AppBar>
}
