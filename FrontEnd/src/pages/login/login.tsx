import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkStyle from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import loginImage from '../../assets/images/login.svg'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignInSide() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleClick = () => {

        setLoading(true);
        setTimeout(() => { setLoading(false) }, 1000);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        if (ValidateEmail(email)) {
            event.preventDefault();
            // const data = new FormData(event.currentTarget);
            // eslint-disable-next-line no-console
            console.log({
                email, password
            });
        }
        else {
            event.preventDefault();
            alert("Error")
        }
    };

    const ValidateEmail = (email: String) => {
        var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(emailformat)) {
            alert("Valid email address!");

            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            return false;
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '94vh' }}
                justifyContent="center"
            >
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={5}


                    sx={{
                        backgroundImage: `url(${loginImage})`,
                        backgroundRepeat: 'no-repeat',
                        // backgroundColor: (t) =>
                        //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                />
                <Grid item xs={12} sm={12} md={5}  >
                    <Box
                        sx={{
                            mt: 15,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" method='POST' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="dense"
                                required
                                fullWidth
                                size="small"
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                autoComplete="email"
                                autoFocus
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                            <TextField
                                margin="dense"
                                size="small"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                autoComplete="current-password"
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />

                            <LoadingButton
                                type="submit"

                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleClick}
                                loading={loading}


                            >
                                Sign In
                            </LoadingButton>



                            <Grid container>
                                <Grid item xs>
                                    <Link to="/">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signup" >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}