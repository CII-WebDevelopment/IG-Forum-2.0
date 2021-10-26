import * as React from 'react';
import '../pages/login.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//import theme from '../../theme';
import Navbar from './navBar';
import SideBar from './sideBar';
import { Avatar, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: 'black',
  }));


function PostList(props) {
    const posts = props.posts;
    const postItems = posts.map((post) =>
        <div>
        <Item sx={{maxWidth: '100%',
            color: 'white',
            bgcolor: 'black',
            opacity: '0.84',
            height: '100%',
            borderRadius: '20px',
            padding: '10px'}}>

            <Paper sx={{
                maxWidth: '100%',
                bgcolor: 'black',
                opacity: '0.84',
                height: '100%',
                borderRadius: '20px',
                padding: '20px',
                color: 'white'
                }} >
                {/*fix image source for avatar */}
                <Grid container spacing={5}>
                    <Grid item xs={5}>
                        <Avatar alt="Remy Sharp" src="../Images/profilePic.png" sx={{height: '70px', width: '70px'}} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h6' gutterBottom component='div'>{User[0]}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='h8' gutterBottom component='div'>Time</Typography>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Typography variant='h6' gutterBottom component='div'>Post Content</Typography>
                
                {/*Like share comment buttons */}
                {/*Comment redirect to a page with just post and the comments?*/}
                <br />
            </Paper>
            <br />
            <br />
        </Item>
        <br />
        </div>

    );
    return (
        <div>{postItems}</div>
    );
}

const posts = [[], [], []];

const User = ['Name', 'Year', 'Branch'];
const UserProfile = () => {
    

  return (
    <div className='container background-div'>
        <Navbar></Navbar>
        <Grid container spacing={4} >
            <Grid item xs={3}>
                <Item sx={{maxWidth: '100%',
                color: 'white',
          bgcolor: 'black',
          opacity: '0.84',
          height: '100%',
          padding: '0'}}><SideBar /></Item>
            </Grid> 
            <Grid item xs={9}>
                <br />
                <br />
                {/* fix the white color in this item sx, change to transparent*/}
                <Item sx={{bgcolor: 'white', color: 'white',opacity: '0.84', maxWidth: '80%', borderRadius: '20px',}}>
                    <Stack spacing={4}>
                        <Item sx={{maxWidth: '100%',
                            color: 'white',
                            bgcolor: 'black',
                            opacity: '0.84',
                            height: '100%',
                            borderRadius: '20px',
                            padding: '0'}}>

                            <Paper sx={{
                                maxWidth: '100%',
                                bgcolor: 'black',
                                opacity: '0.84',
                                height: '100%',
                                borderRadius: '20px',
                                padding: '20px',
                                color: 'white'
                                }} >
                                {/*fix image source for avatar */}
                                <Grid container spacing={5}>
                                    <Grid item xs={2}>
                                        <Avatar alt="Remy Sharp" src="../Images/profilePic.png" sx={{height: '130px', width: '130px'}} />
                                    </Grid>
                                    {/* change alignment to left*/}
                                    <Grid item xs={10}>
                                        <Typography variant='h2' gutterBottom component='div'>{User[0]}</Typography>
                                        <Typography variant='h5' gutterBottom component='div'>{User[1]} | {User[2]}</Typography>
                                    </Grid>
                                </Grid>
                                <br />
                                <br />
                                <Typography variant='h6' gutterBottom component='div'>----------User Bio----------</Typography>
                                
                            </Paper>
                        </Item>
                        <br />
                        <PostList posts={posts} />
                    </Stack>
                    
                </Item>
            </Grid>
        </Grid>
      
    </div>
  );
};

export default UserProfile;
