import * as React from 'react';
import { useState } from 'react';
import '../pages/login.css';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
//import theme from '../../theme';
import { Stack } from '@mui/material';
/*
export default function ScrollableTabsButtonForce() {
    const [value, setValue] = React.useState(0);
}
  */
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: 'white',
}));

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (username, password, e) => {
    setUsername(username);
    setPassword(password);
    console.log(username);
    console.log(password);
  };

  return (
    <div className='container background-div'>
      <div className='container-styling'>
        <Box
          sx={{
            maxWidth: '100%',
            bgcolor: 'black',
            opacity: '0.84',
            color: 'black',
            maxHeight: '8%',
          }}
        >
          <Stack
            direction='row'
            spacing={2}
            justifyContent='right'
            alignItem='right'
            padding='0'
            sx={{
              maxWidth: 1000,
              maxHeight: 50,
            }}
          >
            {/* insert logo */}

            <Item sx={{ backgroundColor: 'black', color: 'tertiary' }}>
              <div className='text-field' sx={{ color: 'white' }}>
                <TextField
                  style={{
                    backgroundColor: "black",
                  }}
                  InputProps={{
                    style: {
                      color: "white"
                    }
                  }}
                  id='filled-basic'
                  label='Username'
                  variant='outlined'
                  color='tertiary'
                  name='username'
                  size='small'
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  sx={{
                    margin: '10',
                    width: '90',
                    height: '50%',
                    color: 'white',
                    borderColor: 'white',
                  }}
                  FormHelperTextProps={{
                    style: { backgroundColor: 'red', color: 'tertiary' },
                    disabled: true
                  }}
                />
              </div>
            </Item>

            <Item sx={{ backgroundColor: 'black' }}>
              <TextField
                style={{
                  backgroundColor: "black",
                }}
                InputProps={{
                  style: {
                    color: "white",
                  }
                }}
                id='filled-basic'
                label='Password'
                variant='outlined'
                color='tertiary'
                size='small'
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                border='none'
              />
            </Item>

            <Item sx={{ backgroundColor: 'black' }}>
              <Button
                variant='contained'
                onClick={(event) => {
                  handleChange(username, password, event);
                }}
                size='small'
              >
                LOG IN
              </Button>
            </Item>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default LogIn;
