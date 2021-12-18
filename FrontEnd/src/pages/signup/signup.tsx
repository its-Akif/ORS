import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkStyle from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import SignUpImage from '../../assets/images/SignUp.svg'


const theme = createTheme();

export default function SignUp() {


    const [isAgree, setIsAgree] = useState(false)
    const [isPasswordError, setIsPasswordError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        if (data.get("password") === data.get("confirmpassword")) {
            const userPayload = {
                fName: data.get("firstName"),
                lName: data.get("lastName"),
                password: data.get("password"),
                phone: data.get("phonenumber"),
                email: data.get('email'),
                // isAgree: data.get('isagree'),
                image: data.get('profileImage')

            }
            console.log(userPayload)
            event.preventDefault();
        }
        else {
            setIsPasswordError(true);
            event.preventDefault();
        }

    };
    const handleClick = () => {

        setLoading(true);
        setTimeout(() => { setLoading(false) }, 1000);
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '90vh', mt: 4 }}
                alignContent="center"
                justifyContent="center"
            >
                <CssBaseline />
                <Grid item
                    xs={false}
                    sm={false}
                    md={5}

                    sx={{
                        backgroundImage: `url(${SignUpImage})`,
                        backgroundRepeat: 'no-repeat',
                        // backgroundColor: (t) =>
                        //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }} />



                <Grid item xs={12} sm={12} md={5} ml={3}>
                    <Box
                        sx={{
                            my: 7,
                            mx: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate={false} onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        size="small"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        size="small"
                                        name="lastName"
                                        autoComplete="family-name"

                                    />
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        size="small"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phonenumber"
                                        label="Phone Number"
                                        name="phonenumber"
                                        size="small"
                                        autoComplete="phonenumber"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        size="small"
                                        error={isPasswordError}

                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="confirmpassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="confirmpassword"
                                        size="small"
                                        error={isPasswordError}
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <FormControlLabel control={<><Input accept="image/*" id="icon-button-file" name="icon-button-file" type="file" />
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton></>}
                                    label="Upload" /> */}
                                    <input
                                        accept="image/*"
                                        required
                                        style={{ display: 'none' }}
                                        id="raised-button-file"
                                        name="profileImage"
                                        type="file"
                                    />
                                    <label htmlFor="raised-button-file">
                                        <Button variant="outlined" component="span" startIcon={<PhotoCamera />} >
                                            Add Image
                                        </Button>
                                    </label>

                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value={isAgree} color="primary" name="isagree" id="isagree" onChange={() => setIsAgree(!isAgree)} />}
                                        label="Agree Terms & Conditions"
                                    />
                                </Grid>


                            </Grid>
                            {/* <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!isAgree}

                        >

                            Sign Up
                        </Button> */}
                            <LoadingButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                                loading={loading}
                                disabled={!isAgree}


                            >
                                Sign Up
                            </LoadingButton>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to="/" >
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider >
    );
}