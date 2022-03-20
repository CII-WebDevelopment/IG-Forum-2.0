import React from "react";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import "../feed/feedNav.css";

const feedNav = () => {
  const boxStyle = {
    backgroundColor: "#17252A",
    color: "white",
    fontWeight: "bold",
    padding: "5px",
    height: "2.75rem",
  };

  const navbarOuterStack = {
    justifyContent: "space-around",
    height: "100%",
  };

  const navSearchBar = {};

  return (
    <>
      <Box sx={boxStyle}>
        <Stack
          sx={navbarOuterStack}
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Typography className="nav_link">Logo</Typography>
          <Typography className="nav_link">Explore</Typography>
          <input
            placeholder="Search Me?"
            style={navSearchBar}
            className="navSearchBar"
          />
          <Typography className="nav_link">My Feed</Typography>
          <Typography className="nav_link">My Profile</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default feedNav;
