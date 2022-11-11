import {Box, Container, styled, TextField, Typography} from "@mui/material";
import {VisibilityOutlined} from "@mui/icons-material";

export default function LoginForm(props) {

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
        </Box>
    </Container>
}