import {Box, Container, Typography} from "@mui/material";
import {useSelector} from "react-redux";

export default function HomePage() {

    const user = useSelector(state => state.user);

    return <Container
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyItems: 'center'
            }}
        >
            <Typography
                variant='h6'
                sx={{
                    marginBottom:'10px'
                }}
            >
                Домашняя страница для {user? '' : 'не'}авторизованных пользователей
            </Typography>
        </Box>
    </Container>
}