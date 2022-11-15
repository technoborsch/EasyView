import {Box, Container, Typography} from "@mui/material";
import {useAuth} from '../hooks/useAuth'
import {isAuthValid} from "../utils/Utils";

export default function HomePage() {

    const auth = useAuth();

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
                Домашняя страница для {isAuthValid(auth)? '' : 'не'}авторизованных пользователей
            </Typography>
        </Box>
    </Container>
}