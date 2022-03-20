import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./feedPost.css";

const FeedPost = (props) => {
  return (
    <Box className="feedPost_outerBox">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <span className="feedPost_profileDeets">
          <span className="feedPost_pfp"></span>
          <Typography>{props.name}</Typography>
        </span>
        <span className="feedPost_tag">{props.tag}</span>
      </Stack>
      <p className="feedPost_text">{props.content}</p>
      <Stack className="feedPost_footer" direction="row">
        <span className="feedPost_footer_wrapper">
          <Button
            classname="feedPost_footer_button"
            variant="outlined"
            startIcon={<DeleteIcon />}
            sx={{ color: "white" }}
          >
            Like
          </Button>
          <Button
            classname="feedPost_footer_button"
            variant="outlined"
            startIcon={<DeleteIcon />}
            sx={{ color: "white" }}
          >
            Comment
          </Button>
          <Button
            classname="feedPost_footer_button"
            variant="outlined"
            startIcon={<DeleteIcon />}
            sx={{ color: "white" }}
          >
            Share
          </Button>
        </span>
      </Stack>
    </Box>
  );
};

export default FeedPost;
