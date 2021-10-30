import * as React from 'react';
import '../pages/login.css';
import { styled } from '@mui/material/styles';
import NavBar from './navBar'
import SideBar from './sideBar';
import { Grid, Paper, Avatar, Typography, Stack, TextField, Chip } from '@mui/material';
import { useState } from 'react';
import { InputLabel, Box, Select, MenuItem, FormControl } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: 'black',
}));



const UserRegistration = () => {
    
  return (
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
                        }}><Typography variant='h5'>User Registration</Typography>
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
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',}}>
                                            <Typography variant='h6'>First Name: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',}}>
                                            <TextField id="first name" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '200px'}}/>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '80%',borderRadius: '20px',}}>
                                <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',}}>
                                            <Typography variant='h6'>Last Name: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',}}>
                                            <TextField id="first name" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '200px'}}/>
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
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '100%',borderRadius: '20px',}}>
                                    <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>
                                            <Typography variant='h6'>College Email ID: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>
                                            <TextField id="college-id" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '400px'}}/>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '100%',borderRadius: '20px',marginLeft: '20px'}}>
                                <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>
                                            <Typography variant='h6'>Year: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>
                                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} sx={{bgcolor: 'white'}}>
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
                            <Grid item xs={3}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '100%',borderRadius: '20px',}}>
                                <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>
                                            <Typography variant='h6'>Branch: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>
                                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} sx={{bgcolor: 'white'}}>
                                                    <MenuItem value="">
                                                        <em>Choose</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>CSE</MenuItem>
                                                    <MenuItem value={2}>ECE</MenuItem>
                                                    <MenuItem value={3}>EEE</MenuItem>
                                                    <MenuItem value={4}>MECH</MenuItem>
                                                    <MenuItem value={4}>MME</MenuItem>
                                                    <MenuItem value={4}>Chemical</MenuItem>
                                                    <MenuItem value={4}>BioTech</MenuItem>
                                                    <MenuItem value={4}>Civil</MenuItem>
                                                </Select>
                                                <FormHelperText>Without label</FormHelperText>
                                            </FormControl>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid>
                        </Grid>
                    </Item>
                </Stack>
            </Paper>
        </Box>
    </div>
  );
};

export default UserRegistration;
