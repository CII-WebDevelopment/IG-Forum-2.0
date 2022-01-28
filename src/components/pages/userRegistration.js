import * as React from 'react';
import { Fragment } from 'react'
import '../pages/login.css';
import { styled } from '@mui/material/styles';
import NavBar from './navBar'
import SideBar from './sideBar';
import { Grid, Paper, Avatar, Typography, Stack, TextField, Chip, Button, Link } from '@mui/material';
import { useState } from 'react';
import { InputLabel, Box, Select, MenuItem, FormControl } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText'
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import theme from '../../theme'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: 'black',
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const allClubs = [
    'LDC',
    'IG'
]

const UserRegistration = () => {
    
    const [Clubs, setClubs] = useState([]);
    const [formData, setFormData] = useState();


    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setClubs(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    return <Fragment>
    <div className='container background-div' sx={{bgcolor: 'transparent'}}>
        <Box sx={{bgcolor: 'transparent', alignItems: 'center'}}>
            <Paper sx={{maxWidth: '80%',
            color: 'white',
            bgcolor: 'black',
            opacity: '0.94',
            height: '100%',
            borderRadius: '20px',
            padding: '10px'}}>
                <Stack>
                    <Item sx={{
                        bgcolor: 'transparent',
                        color: 'white',
                        opacity: '0.94',
                        maxWidth: '100%',
                        borderRadius: '20px',
                        }}><Typography variant='h5'>USER REGISTRATION</Typography>
                    </Item>
                    <br />
                    <br />
                    <br />
                    <Item sx={{
                        bgcolor: 'transparent',
                        color: 'white',
                        opacity: '0.94',
                        maxWidth: '100%',
                        borderRadius: '20px',
                        }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '80%',borderRadius: '20px',}}>
                                    <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px', marginTop: '10px'}}>
                                            <Typography variant='h6'>Full Name: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',marginTop: '10px'}}>
                                            <TextField id="first name" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '300px'}}/>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '80%',borderRadius: '20px',}}>
                                    <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px', marginTop: '10px'}}>
                                            <Typography variant='h6'>Password: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',marginTop: '10px'}}>
                                            <TextField id="first name" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '300px'}}/>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid> 
                        </Grid>
                    </Item>
                    <br />
                    <br />
                    <Item sx={{
                        bgcolor: 'transparent',
                        color: 'white',
                        opacity: '0.94',
                        maxWidth: '100%',
                        borderRadius: '20px',
                        }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '100%',borderRadius: '20px',}}>
                                    <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',marginTop: '10px'}}>
                                            <Typography variant='h6'>College Email ID: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>
                                            <TextField id="college-id" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '500px'}}/>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '100%',borderRadius: '20px',marginLeft: '20px'}}>
                                <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',marginTop: '10px'}}>
                                            <Typography variant='h6'>Year: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>
                                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} sx={{bgcolor: 'white', }}>
                                                    <MenuItem value="">
                                                        <em>Choose</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>First</MenuItem>
                                                    <MenuItem value={2}>Second</MenuItem>
                                                    <MenuItem value={3}>Third</MenuItem>
                                                    <MenuItem value={4}>Fourth</MenuItem>
                                                </Select>
                                                <FormHelperText>Without label</FormHelperText>
                                            </FormControl>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid>
                        </Grid>
                    </Item>
                    <br />
                    <br />
                    <Item sx={{
                        bgcolor: 'transparent',
                        color: 'white',
                        opacity: '0.94',
                        maxWidth: '100%',
                        borderRadius: '20px',
                        }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '80%',borderRadius: '20px',}}>
                                    <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px', marginTop: '10px'}}>
                                            <Typography variant='h6'>Roll No: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',marginTop: '10px'}}>
                                            <TextField id="first name" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '300px'}}/>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '80%',borderRadius: '20px',}}>
                                    <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px', marginTop: '10px'}}>
                                            <Typography variant='h6'>Reg No: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',marginTop: '10px'}}>
                                            <TextField id="first name" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '300px'}}/>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid>
                        </Grid>
                    </Item>
                    <br />
                    <br />
                    <Item sx={{
                        bgcolor: 'transparent',
                        color: 'white',
                        opacity: '0.94',
                        maxWidth: '100%',
                        borderRadius: '20px',
                        }}>
                        <Grid container spacing={2}>
                            <Grid item xs={15}>
                                <Box textAlign='center'>
                                    <Button variant="contained">
                                    <Link href='submit' underline='none'>
                                            <Item sx={{height: '30px'}}>
                                                <Typography 
                                                    variant='h6'
                                                    gutterBottom
                                                    component='div'
                                                    sx={{color: 'white'}}>
                                                        SUBMIT
                                                    </Typography>
                                            </Item>
                                    </Link>
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Item>
                </Stack>
            </Paper>
        </Box>
    </div>
    </Fragment>
};

export default UserRegistration;
