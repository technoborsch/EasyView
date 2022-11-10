import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {Container} from "@mui/material";
import {CircularProgress} from "@mui/material";
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";

import CollapsibleMenuItem from "./CollapsibleMenuItem";

export default function NavMenu(props) {

    return <Drawer
           anchor='left'
           open={props.open}
           variant='temporary'
           keepMounted
           onClose={() => {props.togglerCallback()}}
           >
           { props.loadingSuccess?
               <Box sx={{width: 250}} key={'drawerBox'}>
                   <List>
                       {props.projects.map((project) => (
                           <CollapsibleMenuItem
                               api={props.api}
                               key={project.name}
                               text={project.name}
                               itemsList={project.buildings}
                           />
                           ))}
                   </List>
               </Box> :
               <Container
                   sx={{
                       display: 'flex',
                       alignItems: 'center',
                       justifyItems: 'center',
                       height: '100%',
                   }}
               >
                   <Box
                       sx={{
                           display: 'flex',
                           flexFlow: 'column',
                           alignItems: 'center'
                       }}
                   >
                       <Typography>Не удалось загрузить данные</Typography>
                       <Button variant='text' onClick={props.reload}>Обновить</Button>
                       {props.isLoading?
                           <CircularProgress />:<></>}
                   </Box>
               </Container> }
           </Drawer>
}