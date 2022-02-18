import * as React from 'react';
import { Fragment } from "react";
import '../pages/login.css';
import { styled } from '@mui/material/styles';
import NavBar from './navBar'
import SideBar from './sideBar';
import { Grid, Paper, Avatar, Typography, Stack, TextField, Chip, Button, Link } from '@mui/material';
import { useState, useEffect } from 'react';
import { InputLabel, Box, Select, MenuItem, FormControl } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText'
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import theme from '../../theme'
import axios from 'axios'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: 'black',
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const allClubs = [
    'Literary and Debating Club',
    'News and Magazine Club',
    'Quiz Club',
    'Business Club',
    'Dance and Dramatics Club',
    'Music Club',
    'Painting Club',
    'Photography Club',
    'Value Education Club',
    'Robotics Club',
    'TedEx Club',
    'Innovation Garage',
    'CSE Association',
    'ECE Association',
    'ME Association',
    'Others'
]

//on registration, a profile will be created as well with all the default values set to empty strings
//except the 6 fields entered at registration. Need to add this part to userRegistration page, otherwise
//we get the issue of undefined user in the below fetch fxn since profile and important user info use diff databases
const EditProfile = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        const getUser = async()=>{
            try{
                const response = await axios.get('/api/profile/me');
                console.log(response);
                const myUser = response.data;
                setUser(myUser);
            } catch(error) {
                console.log(error);
            }
        };
        getUser();
    },[]);
    
    const [Clubs, setClubs] = useState([user.Clubs]);
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setClubs(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      }; 

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        rollNo: user.rollNo,
        regNo: user.regNo,
        joiningYear: user.joiningYear,
        branch: user.branch,
        GitProfileLink: user.GitProfileLink,
        LinkedInProfileLink: user.LinkedInProfileLink,
        bio: user.bio
    });
    const {name, email, regNo, rollNo, joiningYear, branch, GitProfileLink, LinkedInProfileLink, bio} = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})
    const onSubmit = async e => {
        e.preventDefault();
        const updatedUser = {
            name,
            email,
            rollNo,
            regNo,
            joiningYear,
            branch,
            GitProfileLink,
            LinkedInProfileLink,
            bio,
            Clubs
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'Application/json'
                }
            }
            const body = JSON.stringify(updatedUser);
            const res = await axios.post('/api/profile/', body, config);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data)
        }
    }

    return (
        <Fragment>
        <div className="container background-div" sx={{ bgcolor: "transparent" }}>
            {/* <NavBar></NavBar> */}
            <Box
            sx={{
                bgcolor: "transparent",
                justifyContent: "center",
            }}
            >
            <Paper
                sx={{
                maxWidth: "80%",
                color: "white",
                bgcolor: "black",
                opacity: "0.94",
                height: "100%",
                borderRadius: "20px",
                padding: "10px",
                margin: "1.5rem auto",
                padding: "2rem 3rem",
                justifyContent: "center",
                }}
            >
                <Stack>
                <Item
                    sx={{
                    bgcolor: "transparent",
                    color: "white",
                    opacity: "0.94",
                    maxWidth: "100%",
                    borderRadius: "20px",
                    margin: "2rem 0 0 0",
                    }}
                >
                    <Typography variant="h4">EDIT PROFILE</Typography>
                </Item>
                <br />
                <br />
                <br />
                <Item
                    sx={{
                    bgcolor: "transparent",
                    color: "white",
                    opacity: "0.94",
                    maxWidth: "100%",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "20px",
                    display: "flex",
                    marginBottom: "2rem",
                    }}
                >
                    <Grid container sx={{ width: "80%" }} spacing={1}>
                    <Grid item xs={12} md={6} sx={{ marginBottom: "0.5rem" }}>
                        <Stack
                        direction="column"
                        spacing={2}
                        sx={{ padding: "0 2rem" }}
                        >
                        <FormControl>
                            <TextField
                            id="standard-basic"
                            label="Full Name"
                            name= 'name'
                            defaultValue={user.name}
                            value={name}
                            onChange={e => onChange(e)}
                            variant="filled"
                            sx={{
                                color: "black",
                                fontWeight: "600",
                                backgroundColor: "white",
                                borderRadius: "5px",
                            }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                            id="standard-basic"
                            label="College Email ID"
                            name = 'email'
                            defaultValue={user.email}
                            value={email}
                            onChange={e => onChange(e)}
                            variant="filled"
                            sx={{
                                color: "black",
                                fontWeight: "600",
                                backgroundColor: "white",
                                borderRadius: "5px",
                            }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                            id="standard-basic"
                            label="Roll Number"
                            name= 'rollNo'
                            defaultValue={user.rollNo}
                            value={rollNo}
                            onChange={e => onChange(e)}
                            variant="filled"
                            sx={{
                                color: "black",
                                fontWeight: "600",
                                backgroundColor: "white",
                                borderRadius: "5px",
                            }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                            id="standard-basic"
                            label="Registration Number"
                            name= 'regNo'
                            defaultValue={user.regNo}
                            value={regNo}
                            onChange={e => onChange(e)}
                            variant="filled"
                            sx={{
                                color: "black",
                                fontWeight: "600",
                                backgroundColor: "white",
                                borderRadius: "5px",
                            }}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" >
                            Year of Study
                            </InputLabel>
                            <Select
                            sx={{ backgroundColor: "white" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name= 'joiningYear'
                            defaultValue={user.joiningYear}
                            value={joiningYear}
                            onChange={e => onChange(e)}
                            label="Year of Study"
                            >
                            <MenuItem value={1}>First</MenuItem>
                            <MenuItem value={2}>Second</MenuItem>
                            <MenuItem value={3}>Third</MenuItem>
                            <MenuItem value={4}>Fourth</MenuItem>
                            </Select>
                        </FormControl>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack
                        direction="column"
                        spacing={2}
                        sx={{ padding: "0 2rem" }}
                        >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" >
                            Branch
                            </InputLabel>
                            <Select
                            sx={{ backgroundColor: "white" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name= 'branch'
                            defaultValue={user.branch}
                            value={branch}
                            onChange={e => onChange(e)}
                            label="branch"
                            >
                                <MenuItem value={1}>CSE</MenuItem>
                                <MenuItem value={2}>ECE</MenuItem>
                                <MenuItem value={3}>EEE</MenuItem>
                                <MenuItem value={4}>MECH</MenuItem>
                                <MenuItem value={4}>MME</MenuItem>
                                <MenuItem value={4}>Chemical</MenuItem>
                                <MenuItem value={4}>BioTech</MenuItem>
                                <MenuItem value={4}>Civil</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <TextField
                            id="standard-basic"
                            label="Github profile link"
                            variant="filled"
                            name = 'GitProfileLink'
                            defaultValue={user.GitProfileLink}
                            value={GitProfileLink}
                            onChange={e => onChange(e)}
                            sx={{
                                color: "black",
                                fontWeight: "600",
                                backgroundColor: "white",
                                borderRadius: "5px",
                            }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                            id="standard-basic"
                            label="LinkedIn profile link"
                            variant="filled"
                            name = 'LinkedIn-profile-link'
                            defaultValue={user.LinkedInProfileLink}
                            value={LinkedInProfileLink}
                            onChange={e => onChange(e)}
                            sx={{
                                color: "black",
                                fontWeight: "600",
                                backgroundColor: "white",
                                borderRadius: "5px",
                            }}
                            />
                        </FormControl>  
                        <FormControl>
                            <TextField
                            id="standard-basic"
                            label="Bio"
                            variant="filled"
                            name = 'bio'
                            defaultValue={user.bio}
                            value={bio}
                            onChange={e => onChange(e)}
                            sx={{
                                color: "black",
                                fontWeight: "600",
                                backgroundColor: "white",
                                borderRadius: "5px",
                            }}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" >
                            Clubs and Associations (choose all that you are a part of)
                            </InputLabel>
                            <Select
                            sx={{ backgroundColor: "white" }}
                            labelId="demo-simple-select-label"
                            id="demo-multiple-chip"
                            name= 'clubs'
                            label="clubs"
                            defaultValue={user.Clubs}
                            multiple value={Clubs}
                            onChange={handleChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value}/>
                                    ))}
                                </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {allClubs.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        </Stack>
                    </Grid>
                    </Grid>
                </Item>

                <Button
                    size="large"
                    variant="contained"
                    sx={{
                    width: "20rem",
                    margin: "0 auto",
                    }}
                    onClick = {e => onSubmit(e)}
                >
                    SAVE CHANGES
                </Button>
                </Stack>
            </Paper>
            </Box>
        </div>
        </Fragment>
    );
};

export default EditProfile;