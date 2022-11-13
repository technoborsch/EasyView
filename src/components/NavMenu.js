import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {Container} from "@mui/material";
import {Typography} from "@mui/material";

import CollapsibleMenuItem from "./CollapsibleMenuItem";

import {useGetProjectListQuery} from "../services/apiservice";

export default function NavMenu(props) {

    const {data, error, isLoading} = useGetProjectListQuery();

    return <Drawer
           anchor='left'
           open={props.open}
           variant='temporary'
           keepMounted
           onClose={() => {props.togglerCallback()}}
           >
           { data?
               <Box sx={{width: 250}} key={'drawerBox'}>
                   <List>
                       {data.map((project) => (
                           <CollapsibleMenuItem
                               key={project.name}
                               project={project}
                           />
                           ))}
                   </List>
               </Box>
               : error?
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
                   </Box>
               </Container>
                   : isLoading? <></>
                   : <></>}
           </Drawer>
}