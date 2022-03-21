import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
// import Flexbox from 'flexbox-react';
import "./userInfo.css";

const UserInfo = () => {
  const buttonsBox = {
    padding: "12px 0",
  };
  const name='ISHITA GUPTA';
  const clubs = ['Innovation Garage','Literary and Debating Club'];
  const skills = ['Web development']
  const hobbies = ['Badminton'];    
  const interests = ['Sleeping'];
  return (
    <Box className="userInfo_outerBox">
        <Stack
          direction="row"
          alignItems={"center"}
        >
            <span className="userInfo_pfp"></span>
            <Stack
                direction="column"
                justifyContent="space-between"
                alignItems={"left"}
            >
                <Box className="userInfo_name">{name}</Box>
                <Stack
                    direction="row"
                    alignItems={"center"}
                >
                    {clubs.map((club)=>(
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems={"center"}
                        >
                            <Box className="userInfo_text">{club}</Box>
                            <div class="vl"></div>  
                        </Stack>
                    ))}
                </Stack>
                <Stack
                    direction="row"
                    alignItems={"center"}
                >
                    <Stack
                        direction="row"
                        alignItems={"center"}
                    >
                        {hobbies.map((hobby)=>(
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems={"center"}
                            >
                                <Box className="userInfo_text">{hobby}</Box>
                                <div class="vl"></div>  
                            </Stack>
                        ))}
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems={"center"}
                    >
                        {skills.map((skill)=>(
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems={"center"}
                            >
                                <Box className="userInfo_text">{skill}</Box>
                                <div class="vl"></div>  
                            </Stack>
                        ))}
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems={"center"}
                    >
                        {interests.map((interest)=>(
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems={"center"}
                            >
                                <Box className="userInfo_text">{interest}</Box>
                                <div class="vl"></div>  
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
                    <Box className="buttonsBox" sx={buttonsBox}>
                        <Stack direction="row" justifyContent="center" spacing={2.5}>
                            {/* Display just enough tags so as to avoid wrapping */}
                            <span className="button">FOLLOWERS</span>
                            <span className="button">FOLLOWING</span>
                            <span className="button">EDIT PROFILE</span>
                        </Stack>
                    </Box>
            </Stack>
        </Stack>
    </Box>
  );
};

export default UserInfo;