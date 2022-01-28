import * as React from 'react';
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

const EditProfile = () => {
    
    const [Clubs, setClubs] = useState([]);
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setClubs(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

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
                        }}><Typography variant='h5'>EDIT PROFILE</Typography>
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
                            <Grid item xs={5}>
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
                            <Grid item xs={3}>
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
                            <Grid item xs={3}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '100%',borderRadius: '20px',}}>
                                <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',marginTop: '10px'}}>
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
                            <Grid item xs={11}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '100%',borderRadius: '20px',}}>
                                    <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',marginTop: '10px'}}>
                                            <Typography variant='h6'>College Email ID: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>
                                            <TextField id="college-id" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '700px'}}/>
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
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',}}>
                                            <Typography variant='h6'>GitHub Profile Link: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',}}>
                                            <TextField id="GitHub-link" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '300px'}}/>
                                        </Item>
                                    </Stack>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '80%',borderRadius: '20px',}}>
                                <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',}}>
                                            <Typography variant='h6'>LinkedIn Profile Link: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',}}>
                                            <TextField id="linkedin-link" label="" sx={{bgcolor: 'white', borderRadius: '10px', width: '300px'}}/>
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
                            <Grid item xs={12}>
                                <Item sx={{bgcolor: 'transparent',color: 'white',opacity: '0.94',maxWidth: '80%',borderRadius: '20px',}}>
                                    <Stack direction='row' spacing={2}>
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',marginTop: '10px'}}>
                                            <Typography variant='h6'>Bio: </Typography>
                                        </Item>
                                    {/*add value and onChange*/}
                                        <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '80%', borderRadius: '20px',}}>
                                            <TextField id="GitHub-link" label="" multiline maxRows={3} sx={{bgcolor: 'white', borderRadius: '10px', width: '800px'}}/>
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
                        <Stack direction='row'>
                                <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px', margin: '10px', marginTop: '20px'}}>
                                    <Typography variant='h6'>Choose all Clubs and Associations you are a part of: </Typography>
                                </Item>
                                <Item sx={{bgcolor: 'transparent', color: 'white',opacity: '0.94', maxWidth: '100%', borderRadius: '20px',}}>       
                                    <FormControl sx={{ m: 1, width: 550, borderRadius: '20px' }}>
                                        <InputLabel></InputLabel>
                                        <Select
                                        sx={{bgcolor: 'white', borderRadius: '20px'}}
                                        id="demo-multiple-chip"
                                        multiple
                                        value={Clubs}
                                        onChange={handleChange}
                                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                        >
                                        {allClubs.map((name) => (
                                            <MenuItem
                                            key={name}
                                            value={name}
                                            >
                                            {name}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Item>
                            </Stack>
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
                                    <Link href='save-changes' underline='none'>
                                            <Item sx={{height: '30px'}}>
                                                <Typography 
                                                    variant='h6'
                                                    gutterBottom
                                                    component='div'
                                                    sx={{color: 'white'}}>
                                                        SAVE CHANGES
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
  );
};

export default EditProfile;