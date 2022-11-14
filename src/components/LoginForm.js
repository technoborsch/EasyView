import {Box, Button, Container, styled, TextField, Typography} from "@mui/material";
import {VisibilityOutlined} from "@mui/icons-material";
import {setCredentials} from "../features/auth/authSlice";
import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {

    const ValidationTextField = styled(TextField)({
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const performLogin = () => {
        dispatch(setCredentials({user: {name: 'Ivan', lastname: 'Ivanov'}, token: {text: 'retuheiutyi'}}));
    };

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
            <VisibilityOutlined
                fontSize='large'
            />
            <Typography
                variant='h6'
                sx={{
                    marginBottom:'10px'
                }}
            >
                Вход
            </Typography>
            <ValidationTextField
                label="Логин"
                required
                variant="outlined"
                id="login-input"
            />
            <Button
                size='large'
                color='inherit'
                aria-controls='menu-appbar'
                onClick={() => {performLogin(); navigate('/');}}
            >
                Вход
            </Button>
        </Box>
    </Container>
}