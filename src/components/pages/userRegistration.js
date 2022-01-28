import * as React from "react";
import { Fragment } from "react";
import "../pages/login.css";
import { styled } from "@mui/material/styles";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import { FormLabel } from "@material-ui/core";
import { InputBase } from "@mui/material";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Stack,
  TextField,
  Chip,
  Button,
} from "@mui/material";
import { useState } from "react";
import { InputLabel, Box, Select, MenuItem, FormControl } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import theme from "../../theme";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "black",
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

const allClubs = ["LDC", "IG"];

const UserRegistration = () => {
  const [Clubs, setClubs] = useState([]);
  const [formData, setFormData] = useState();
  const [year, setYear] = useState();
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setClubs(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Fragment>
      <div className="container background-div" sx={{ bgcolor: "transparent" }}>
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
              margin: "4rem auto",
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
                <Typography variant="h4">USER REGISTRATION</Typography>
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
                          variant="filled"
                          sx={{
                            color: "black",
                            fontWeight: "600",
                            backgroundColor: "white",
                            borderRadius: "5px",
                          }}
                        />
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
                        <InputLabel id="demo-simple-select-label">
                          Year of Study
                        </InputLabel>
                        <Select
                          sx={{ backgroundColor: "white" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={year}
                          label="Year of Study"
                          onChange={handleYear}
                        >
                          <MenuItem value={1}>First</MenuItem>
                          <MenuItem value={2}>Second</MenuItem>
                          <MenuItem value={3}>Third</MenuItem>
                          <MenuItem value={4}>Fourth</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <TextField
                          id="standard-basic"
                          label="Password"
                          variant="filled"
                          type="password"
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
                          label="Confirm Password"
                          type="password"
                          variant="filled"
                          sx={{
                            color: "black",
                            fontWeight: "600",
                            backgroundColor: "white",
                            borderRadius: "5px",
                          }}
                        />
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
              >
                REGISTER
              </Button>
              <Typography
                sx={{
                  margin: "0 auto",
                  paddingTop: "1rem",
                  fontSize: "1.2rem",
                }}
              >
                Already Have An Account?
                <a
                  href="/login"
                  style={{
                    color: "white",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Login{" "}
                </a>
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </div>
    </Fragment>
  );
};

export default UserRegistration;
