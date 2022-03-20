import React from "react";
import { Box } from "@material-ui/core";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import "./feedComments.css";

const FeedComments = () => {
  return (
    <Box className="feedComments_outerBox">
      <Stack className="feedComments_stack">
        <Stack
          className="feedComments_userCommentPrompt"
          direction="row"
          spacing={2}
        >
          <span className="feedComments_userPfp"></span>
          <input type="text" className="feedComments_userInput" />
          <Button>Comment</Button>
        </Stack>

        <hr />
        <br />
        <Stack
          className="feedComments_otherComment"
          direction="row"
          spacing={2}
        >
          <span className="feedComments_otherPfp"></span>

          <Typography className="feedComments_otherComment">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae fuga quibusdam autem illum accusamus maxime maiores sunt non
            tempora? Neque beatae aliquid, sed quidem optio ad harum
            reprehenderit dolorum!
          </Typography>
        </Stack>
        <Stack
          className="feedComments_otherComment"
          direction="row"
          spacing={2}
        >
          <span className="feedComments_otherPfp"></span>

          <Typography className="feedComments_otherComment">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae fuga quibusdam autem illum accusamus maxime maiores sunt non
            tempora? Neque beatae aliquid, sed quidem optio ad harum
            reprehenderit dolorum!
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FeedComments;
