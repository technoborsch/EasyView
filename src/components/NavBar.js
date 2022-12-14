import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import {AccountCircle} from "@mui/icons-material";
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import {Menu} from "@mui/material";
import {MenuItem} from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import {login, logout} from "../features/user/userSlice";

export default function NavBar(props) {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const[anchorEl, setAnchorEl] = useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <AppBar position='static'>
             <Toolbar>
                 <IconButton
                     color='inherit'
                     onClick={()=>{
                         props.togglerCallback();
                     }}
                     sx={user? {}:{ //if authorized, nothing is applied
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
                     <VisibilityOutlinedIcon
                        fontSize='large'
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
                     onClick={user? handleMenu : () => {dispatch(login())}}
                 >
                     {user? <AccountCircle fontSize='large'/> : <LoginIcon fontSize='large'/>}
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
                     <MenuItem>??????????????</MenuItem>
                     <MenuItem onClick={() => {handleClose(); dispatch(logout())}}>??????????</MenuItem>
                 </Menu>
             </Toolbar>
           </AppBar>
}
