import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List'

import CollapsibleMenuItem from "./CollapsibleMenuItem";

export default function NavMenu(props) {

    return <Drawer
           anchor='left'
           open={props.open}
           onClose={() => {props.togglerCallback()}}
           >
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
               </Box>
           </Drawer>
}