import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import { Divider } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
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

// const handleClick = () => {
//   setOpen(!open);
// };

// const listHashtags = hashtags.map((hashtag) => {
//   return (
//     <div>
//       <ListItemButton onClick={handleClick}>
//         <ListItemText primary='hashtag1' />

//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={close} timeout='auto' unmountOnExit>
//         <List component='div' disablePadding>
//           {hashtag.map((each) => {
//             return (
//               <>
//                 <ListItemButton sx={{ pl: 4 }}>
//                   <ListItemText primary={each} />{' '}
//                 </ListItemButton>

//                 <ListItemButton sx={{ pl: 4 }}>
//                   <ListItemText primary={hashtag[0]}></ListItemText>{' '}
//                 </ListItemButton>
//               </>
//             );
//           })}
//         </List>{' '}
//       </Collapse>{' '}
//     </div>
//   );
// });

const SideBar = () => {
  const [Firstname, setFirstname] = useState('My');
  const [Lastname, setLastname] = useState('Name');

  return (
    <div className='container-styling'>
      <Paper
        sx={{
          maxWidth: '20%',
          bgcolor: 'white',
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
                {hashtags.map((hashtag) => {
                  return (
                    <div>
                      {' '}
                      <ListItemButton>
                        <ListItemText primary='hashtag1' />
                      </ListItemButton>{' '}
                      <Collapse timeout='auto' unmountOnExit>
                        {' '}
                        <List component='div' disablePadding>
                          {' '}
                          {hashtag.map((each) => {
                            return (
                              <>
                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemText primary={each} />{' '}
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemText
                                    primary={hashtag[0]}
                                  ></ListItemText>{' '}
                                </ListItemButton>
                              </>
                            );
                          })}
                        </List>{' '}
                      </Collapse>{' '}
                    </div>
                  );
                })}
              </List>
            </nav>
          </Item>
        </Stack>{' '}
      </Paper>{' '}
    </div>
  );
};

export default SideBar;
