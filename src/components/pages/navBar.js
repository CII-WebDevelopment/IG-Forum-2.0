import * as React from 'react';
import {Fragment, useEffect} from 'react'
import { useState } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'
import '../pages/login.css';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import store from '../../store';
import { MapSharp } from '@material-ui/icons';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
}));

const Navbar = ({auth: {isAuthenticated, loading}}, logout) => {
  // const [Search, setSearch] = useState('');
 
  const authLinks = (
    <div className='container-styling'>
      <Paper
        sx={{
          width: '100%',
          bgcolor: 'black',
          opacity: '0.84',
          color: 'black',
          height: '50px',
        }}
      >
        <Stack
          direction='row'
          spacing={2}
          justifyContent='center'
          alignItem='center'
          padding='0'
        >
          {/*Insert logo here*/}
          <Item
            sx={{ backgroundColor: 'black', height: '10px', color: 'white' }}
          >
            <Box
              sx={{
                color: 'white',
                backgroundColor: 'black',
                height: '40px',
                width: '350px',
              }}
            >
              {'                      '}
              <faSearch />
              <TextField
                id='standard-basic'
                label='Search'
                size='small'
                variant='standard'
                sx={{
                  backgroundColor: 'white',
                  width: '350px',
                  height: '40px',
                }}
              />
            </Box>
          </Item>

          <Item sx={{ backgroundColor: 'black', height: '10px' }}>
            <Link href='#' underline='none'>
              <Typography
                variant='h6'
                gutterBottom
                component='div'
                sx={{ color: 'white', backgroundColor: 'black' }}
              >
                MY FEED
              </Typography>
            </Link>
          </Item>

          <Link href='##' underline='none'>
            <Item sx={{ backgroundColor: 'black', height: '10px' }}>
              <Typography
                variant='h6'
                gutterBottom
                component='div'
                sx={{ color: 'white' }}
              >
                ANNOUNCEMENTS
              </Typography>
            </Item>
          </Link>

          <Link href='###' underline='none'>
            <Item sx={{ backgroundColor: 'black', height: '10px' }}>
              <Typography
                variant='h6'
                gutterBottom
                component='div'
                sx={{ color: 'white' }}
              >
                EVENTS
              </Typography>
            </Item>
          </Link>
          <Link href='create-new-post' underline='none'>
              <Item sx={{ backgroundColor: 'black', height: '10px'}}>
                  <Typography 
                    variant='h6'
                    gutterBottom
                    component='div'
                    sx={{color: 'white'}}>
                        NEW POST
                    </Typography>
              </Item>
          </Link>
        {/* <a onClick={logout} href='#!'>Logout</a> */}
        </Stack>
      </Paper>
    </div>

  );
  const guestLinks = (
    <div className='container-styling'>
    <Paper
      sx={{
        width: '100%',
        bgcolor: 'black',
        opacity: '0.84',
        color: 'black',
        height: '50px',
      }}
    >
      <Stack
        direction='row'
        spacing={2}
        justifyContent='center'
        alignItem='center'
        padding='0'
      >
        {/*Insert logo here*/}
        <Item
          sx={{ backgroundColor: 'black', height: '10px', color: 'white' }}
        >
          <Box
            sx={{
              color: 'white',
              backgroundColor: 'black',
              height: '40px',
              width: '350px',
            }}
          >
            {'                      '}
            <faSearch />
            <TextField
              id='standard-basic'
              label='Search'
              size='small'
              variant='standard'
              sx={{
                backgroundColor: 'white',
                width: '350px',
                height: '40px',
              }}
            />
          </Box>
        </Item>        
      </Stack>
    </Paper>
  </div>
  );


  return (
    <div className='container-styling'>
      <Paper
        sx={{
          width: '100%',
          bgcolor: 'black',
          opacity: '0.84',
          color: 'black',
          height: '50px',
        }}
      >
        <Stack
          direction='row'
          spacing={2}
          justifyContent='center'
          alignItem='center'
          padding='0'
        >
          {/*Insert logo here*/}
          <Item
            sx={{ backgroundColor: 'black', height: '10px', color: 'white' }}
          >
            <Box
              sx={{
                color: 'white',
                backgroundColor: 'black',
                height: '40px',
                width: '350px',
              }}
            >
              {'                      '}
              {/* <faSearch />
              <TextField
                id='standard-basic'
                label='Search'
                size='small'
                variant='standard'
                sx={{
                  backgroundColor: 'white',
                  width: '350px',
                  height: '40px',
                }}
              /> */}
            </Box>
          </Item>

          {/* <Item sx={{ backgroundColor: 'black', height: '10px' }}>
            <Link href='#' underline='none'>
              <Typography
                variant='h6'
                gutterBottom
                component='div'
                sx={{ color: 'white', backgroundColor: 'black' }}
              >
                MY FEED
              </Typography>
            </Link>
          </Item>

          <Link href='##' underline='none'>
            <Item sx={{ backgroundColor: 'black', height: '10px' }}>
              <Typography
                variant='h6'
                gutterBottom
                component='div'
                sx={{ color: 'white' }}
              >
                ANNOUNCEMENTS
              </Typography>
            </Item>
          </Link>

          <Link href='###' underline='none'>
            <Item sx={{ backgroundColor: 'black', height: '10px' }}>
              <Typography
                variant='h6'
                gutterBottom
                component='div'
                sx={{ color: 'white' }}
              >
                EVENTS
              </Typography>
            </Item>
          </Link>
          <Link href='create-new-post' underline='none'>
              <Item sx={{ backgroundColor: 'black', height: '10px'}}>
                  <Typography 
                    variant='h6'
                    gutterBottom
                    component='div'
                    sx={{color: 'white'}}>
                        NEW POST
                    </Typography>
              </Item>
          </Link>
        //  <Link><a onClick={logout} href ="/login ">Logout</a></Link>  */}
      <h1>
      <Link to='/' underline='none'>
              <Item sx={{ backgroundColor: 'black', height: '10px'}}>
                  <Typography 
                    variant='h6'
                    gutterBottom
                    component='div'
                    sx={{color: 'white'}}>
                        CLOUD CAMPUS
                    </Typography>
              </Item>
          </Link>
      </h1>
      {!loading && (<Fragment>{isAuthenticated? authLinks : guestLinks}</Fragment>)}

        </Stack>
      </Paper>
    </div>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);
