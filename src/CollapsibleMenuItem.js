import React, {useState} from "react";

import Box from "@mui/material/Box";
import {List} from "@mui/material";
import {ListItemButton} from "@mui/material";
import {ListItemIcon} from "@mui/material";
import {ListItemText} from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import {ExpandLess} from "@mui/icons-material";
import {ExpandMore} from "@mui/icons-material";
import {Collapse} from "@mui/material";
import {Divider} from "@mui/material";
import BuildingMenuItem from "./BuildingMenuItem";

export default function CollapsibleMenuItem(props) {

    const[isOpen, toggleOpen] = useState(false);

    const handleToggle = () => {
        toggleOpen(!isOpen);
    };

    return  <Box>
                <List
                    component="div"
                    disablePadding
                >
                    <ListItemButton
                        key={props.project.name}
                        onClick={handleToggle}
                    >
                        <ListItemIcon>
                            <CottageIcon />
                        </ListItemIcon>
                        <ListItemText primary={props.project.name} />
                        {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </List>
                <Divider/>
                <Collapse
                    in={isOpen}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        {props.project.buildings.map((building) => (
                            <BuildingMenuItem key={building} building={building} />
                        ))}
                    </List>
                  </Collapse>
            </Box>
};