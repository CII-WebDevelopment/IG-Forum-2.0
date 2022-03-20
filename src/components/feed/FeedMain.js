import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import FeedPost from "./FeedPost";
import { Typography } from "@mui/material";
import "./feedMain.css";

const FeedMain = () => {
  const tagsBox = {
    padding: "20px 0",
  };
  const postContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus mollitia adipisci perferendis. Explicabo, dolores velit. Magni, veniam pariatur. Sit doloremque iste ducimus ex, id sint hic quisquam libero sequi?";
  const tag = "Web Dev";
  return (
    <Box>
      <Stack>
        <Box className="tagsBox" sx={tagsBox}>
          <Stack direction="row" justifyContent="center" spacing={3}>
            {/* Display just enough tags so as to avoid wrapping */}
            <span className="tag">WEB DEV</span>
            <span className="tag">APP DEV</span>
          </Stack>
        </Box>
        <Box className="postsBox" justifyContent="center">
          <Stack className="postsStack">
            <FeedPost name={"Ishita Gupta"} content={postContent} tag={tag} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default FeedMain;
