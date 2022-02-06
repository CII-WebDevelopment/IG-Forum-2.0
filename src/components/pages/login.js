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
import { axios } from 'axios';
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
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
    const {username,password} = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})
    const onSubmit = async e => {
        e.preventDefault();
        const user = {
            username,
            password
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'Application/json'
                }
            }
            const body = JSON.stringify(user);
            const res = await axios.post('/api/auth/user-login', body, config);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data)
        }
    }

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
                  value={username}
                  onChange={e => onChange(e)}
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
                  label='Password'
                  variant='outlined'
                  color='tertiary'
                  type='password'
                  name='password'
                  size='small'
                  value={password}
                  onChange={e => onChange(e)}
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
              <Button
                variant='contained'
                size='small'
                onClick = {e => onSubmit(e)}
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