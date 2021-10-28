import * as React from 'react';
import { useState } from 'react';
import '../pages/login.css';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
}));

const Navbar = () => {
  const [Search, setSearch] = useState('');
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
        </Stack>
      </Paper>
    </div>
  );
};

export default Navbar;
