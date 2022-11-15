import {Button, Card, Container, styled, TextField, Typography} from "@mui/material";
import {VisibilityOutlined} from "@mui/icons-material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLoginMutation} from "../services/apiservice";
import {useDispatch} from "react-redux";
import {setCredentials} from "../features/auth/authSlice";

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

export default function LoginForm() {

    const [login] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[credentials, handleChange] = useState({loginInput: '', passwordInput: ''});

    const onChange = (e) => {
        handleChange((prev) => (
            {
                ...prev,
                [e.target.id]: e.target.value
            }
            )
        );
    }

    return <Container
        sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            height: '100%'
        }}
    >
        <Card
            variant='outlined'
            sx={{
                p: '30px',
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
                variant='h5'
                sx={{margin:'5px'}}
            >
                Вход
            </Typography>
            <ValidationTextField
                label="Логин"
                required
                variant="outlined"
                id="loginInput"
                value={credentials.loginInput}
                onChange={onChange}
            />
            <ValidationTextField
                label="Пароль"
                required
                variant="outlined"
                id="passwordInput"
                value={credentials.passwordInput}
                onChange={onChange}
                sx={{margin:'20px'}}
            />
            <Button
                variant='outlined'
                size='large'
                color='inherit'
                aria-controls='menu-appbar'
                onClick={async () => {
                    try {
                        const response = await login(credentials);
                        dispatch(setCredentials(response.data));
                        navigate('/');
                    } catch (err) {
                        console.log(err);
                    }
                }}
            >
                Войти
            </Button>
        </Card>
    </Container>
}