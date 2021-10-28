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

function HashtagDisplay(props) {
    const items = props.AvailableHashtags;
    const displayItems = items.map((item) => (
            <MenuItem value={{item}}>{item}</MenuItem>
    ));
    return <div>{displayItems}</div>;
}


const CreatePost = () => {
    const [ChosenHashtags, setChosenHashtags] = useState([]);
    const [AvailableHashtags, setAvailableHashtags] = useState([]);

    const handleSelection = (event) => {
        const list = ChosenHashtags.concat(event.target.value);
        setChosenHashtags(list);

        setAvailableHashtags({
            ...AvailableHashtags.filter((r) => r !== event.target.value),
        });
    }
    
    const handleClick = () => {
    
    }
    
    const handleDelete = () => {
        
    }


    function Chips(props) {
        const chips = props.ChosenHashtags;
        const postChips = chips.map((chip) => (
            <Item><Chip label={chip} onClick={handleClick} onDelete={handleDelete}/></Item>
        ));
        return <div>{postChips}</div>;
    }
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
            <Stack spacing={4}>
              <Item
                sx={{
                  maxWidth: '100%',
                  color: 'white',
                  bgcolor: 'black',
                  opacity: '0.94',
                  height: '100%',
                  borderRadius: '20px',
                  padding: '0',
                }}
              >
                <Paper
                  sx={{
                    maxWidth: '100%',
                    bgcolor: 'black',
                    opacity: '0.94',
                    height: '100%',
                    borderRadius: '20px',
                    padding: '10px',
                    color: 'white',
                  }}
                >
                    {/*fix image source for avatar */}
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <Avatar alt='Remy Sharp' src='../Images/profilePic.png' sx={{ height: '60px', width: '60px' }}/>
                        </Grid>
                    {/* change alignment to left*/}
                        <Grid item xs={2} sx={{alignItem: 'left', justifyContent: 'left'}}>
                            <Typography variant='h6' gutterBottom component='div'>My name</Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <TextField placeholder="Whatcha thinking?" multiline rows={4} fullWidth sx={{backgroundColor: 'white', borderRadius: '15px',}}/>
                    <br />
                    <br />
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-filled-label" sx={{backgroundColor: 'white', color: 'black'}}>Hashtags</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={ChosenHashtags}
                                    onChange={handleSelection}
                                    sx={{backgroundColor: 'white', color: 'black'}}
                                >
                                <HashtagDisplay props={AvailableHashtags} />
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={8}>
                            <Stack direction="row">
                                {/*<Chips props={ChosenHashtags} />*/}
                                
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
              </Item>
              <br />
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatePost;
