import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import FeedPost from "../feed/FeedPost";
import { Typography } from "@mui/material";
import "./userPosts.css";

const UserPosts = () => {
  const tagsBox = {
    padding: "20px 0",
  };
  const postContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus mollitia adipisci perferendis. Explicabo, dolores velit. Magni, veniam pariatur. Sit doloremque iste ducimus ex, id sint hic quisquam libero sequi?";
  const tag = "Web Dev";
  return (
        <Box className="postsBox" justifyContent="center">
          <Stack className="postsStack">
            <FeedPost name={"Ishita Gupta"} content={postContent} tag={tag} />
          </Stack>
        </Box>
  );
};

export default UserPosts;