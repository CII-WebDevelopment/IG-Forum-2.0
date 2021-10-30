import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess } from '@material-ui/icons';
import { ExpandMore } from '@material-ui/icons';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const hashtags = [
  ['Coding', 'first', 'second'],
  ['Research', 'uno', 'des'],
];

const SideBar = () => {
  const [Firstname, setFirstname] = useState('My');
  const [Lastname, setLastname] = useState('Name');
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='container-styling'>
      <Paper
        sx={{
          maxWidth: '100%',
          bgcolor: 'black',
          opacity: '0.84',
          height: '100%',
        }}
      >
        <Stack
          spacing={2}
          justifyContent='center'
          alignItem='center'
          padding='0'
          sx={{ color: 'white', bgcolor: 'black' }}
        >
          {' '}
          {/* insert logo */}{' '}
          <Item sx={{ color: 'white', bgcolor: 'black' }}>
            <Typography variant='h4' gutterBottom component='div'>
              {' '}
              {Firstname} {Lastname}{' '}
            </Typography>{' '}
          </Item>
          <Item sx={{ color: 'white', bgcolor: 'black' }}>
            <Typography variant='h5' gutterBottom component='div' sx={{}}>
              Hashtags{' '}
            </Typography>{' '}
          </Item>
          <Item sx={{ color: 'white', bgcolor: 'black' }}>
            <nav aria-label='secondary mailbox folders'>
              <List>
                <ListItemButton component='a' href='#simple-list'>
                  <ListItemText primary='Spam' />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary='Inbox' />
                  {open ? <ExpandMore /> : <ExpandLess />}
                </ListItemButton>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary='Starred' />
                    </ListItemButton>
                  </List>

                  <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText primary='Starred' />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </nav>
          </Item>
        </Stack>{' '}
      </Paper>{' '}
    </div>
  );
};

export default SideBar;
