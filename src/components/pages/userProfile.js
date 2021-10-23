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
import Navbar from './navBar';
import SideBar from './sideBar';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
}));

const UserProfile = () => {
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
      <Navbar></Navbar>
      <SideBar />
    </div>
  );
};

export default UserProfile;
