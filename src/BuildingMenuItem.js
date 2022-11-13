import Box from "@mui/material/Box";
import {Divider, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import React from "react";

import {useGetObjectByURLQuery} from "./services/apiservice";

export default function BuildingMenuItem(props) {

    const {data, error, isLoading} = useGetObjectByURLQuery(props.building);

    return data? <Box
        key={data.kks}
    >
        <ListItemButton
            sx={{ pl: 4 }}
        >
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary={data.kks} />
        </ListItemButton>
        <Divider />
    </Box>
        :error? <Typography>Ошибка</Typography>
        :isLoading? <></>
        : <></>
}