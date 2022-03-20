import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import "./feedPost.css";
import FeedComments from "./FeedComments";
const primaryColor = "#3AAFA9";

const FeedPost = (props) => {
  const [liked, setLiked] = React.useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState(false);
  const likePost = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount + 1 : likeCount - 1);
  };
  const showComment = () => {
    setComment(!comment);
  };

  return (
    <>
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
              variant="filled"
              startIcon={<FavoriteIcon />}
              onClick={likePost}
              sx={{ color: "white", fontWeight: "bold" }}
            >
              {!liked ? "Like" : "Liked"} | <span>{likeCount}</span>
            </Button>
            <Button
              classname="feedPost_footer_button"
              variant="filled"
              startIcon={<CommentIcon />}
              onClick={showComment}
              sx={{ color: "white" }}
            >
              Comment
            </Button>
            <Button
              classname="feedPost_footer_button"
              variant="filled"
              startIcon={<SendIcon />}
              sx={{ color: "white" }}
            >
              Share
            </Button>
          </span>
        </Stack>
      </Box>
      {comment ? <FeedComments /> : ""}
    </>
  );
};

export default FeedPost;
