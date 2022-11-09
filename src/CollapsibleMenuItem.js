import React, {useEffect, useState} from "react";

import Box from "@mui/material/Box";
import {List} from "@mui/material";
import {ListItemButton} from "@mui/material";
import {ListItemIcon} from "@mui/material";
import {ListItemText} from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import StarBorder from '@mui/icons-material/StarBorder';
import {ExpandLess} from "@mui/icons-material";
import {ExpandMore} from "@mui/icons-material";
import {Collapse} from "@mui/material";
import {Divider} from "@mui/material";

export default function CollapsibleMenuItem(props) {

    const[isOpen, toggleOpen] = useState(false);

    const[buildingsList, changeBuildingsList] = useState([])

    useEffect(() => {
        let fetchedBuildings = [];
        props.itemsList.forEach((buildingUrl) => {
            props.api.getObject(buildingUrl).then((building) => {
                fetchedBuildings.push(building);
            });
        });
        changeBuildingsList(fetchedBuildings);
    }, [props.api, props.itemsList]);

    const handleToggle = () => {
        toggleOpen(!isOpen);
    };

    return  <Box>
                <List
                    component="div"
                    disablePadding
                >
                    <ListItemButton
                        key={props.text}
                        onClick={handleToggle}
                    >
                        <ListItemIcon>
                            <CottageIcon />
                        </ListItemIcon>
                        <ListItemText primary={props.text} />
                        {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </List>
                <Divider/>
                <Collapse
                    in={isOpen}
                    timeout="auto"
                    unmountOnExit>
                    <List component="div" disablePadding>
                        {buildingsList.map((building) => (
                            <Box
                                key={building.kks}
                            >
                                <ListItemButton
                                    sx={{ pl: 4 }}
                                >
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={building.kks} />
                                </ListItemButton>
                                <Divider />
                            </Box>
                        ))}
                    </List>
                  </Collapse>
            </Box>
};