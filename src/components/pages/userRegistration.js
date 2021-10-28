import * as React from 'react';
import '../pages/login.css';
import { styled } from '@mui/material/styles';
import NavBar from './navBar'
import SideBar from './sideBar';
import { Grid, Paper, Avatar, Typography, Stack, TextField, Chip } from '@mui/material';
import { useState } from 'react';
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    color: 'black',
}));



const UserRegistration = () => {
    
  return (
    <div className='container background-div'>
        <NavBar />
        <Grid container spacing={4} sx={{height: '100%', width: '100%'}}>
        <Grid item xs={3}>
          <Item
            sx={{
              maxWidth: '100%',
              color: 'white',
              bgcolor: 'black',
              opacity: '0.84',
              height: '100%',
              padding: '0',
              border: '1px solid red',
            }}
          >
            <SideBar />
          </Item>
        </Grid>
        <Grid item xs={9}>
          <br />
          <br />
          <Item
            sx={{
              bgcolor: 'transparent',
              color: 'white',
              opacity: '0.94',
              maxWidth: '80%',
              borderRadius: '20px',
            }}
          >
                <Paper sx={{
                    maxWidth: '100%',
                    bgcolor: 'black',
                    opacity: '0.94',
                    height: '100%',
                    borderRadius: '20px',
                    padding: '20px',
                    color: 'white',
                  }}>
                      <Typography variant="h5">User Registration</Typography>
                      <br />
                      
                </Paper>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatePost;
