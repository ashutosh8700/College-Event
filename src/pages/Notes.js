import React from 'react'
import { useState } from 'react';
import {
  Grid,
  Paper,
  TextField,
  Button,
  Avatar,
  Typography,
  Link,
} from "@mui/material";
//import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./App.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Notes() {
  const btn = { margin:'100px'}
  //const initialValues = {Eno:" ", Password:" "}
  //const [formValues,setFormValues] = useState();
  //const handleChange = (e) =>{
  //console.log(e.target)
  //}; 
  return (
    <div>
      <Grid>
      <Paper elevation={20} className="Paper">
        <Grid align="center">
          <Avatar className="avatar">
            
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Enrollement No."
          placeholder="Enter Enrollement no"
          name = "Eno"
          type="Int"
          fullWidth="True"
          required
          autocomplete="false"
          variant = "standard"
          //value = {formValues.Eno}
          //onChange = {handleChange }
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          name = "Password"
          fullWidth="True"
          variant = "standard"
          required
          //value = {formValues.Password}
          //onChange = {handleChange}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember Me"
        />

        <Button variant="contained" color="primary" className = 'btn' >
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot Password</Link>
        </Typography>
        <Typography>
          Do You have an Account ?<Link href="create"> Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
    </div>
  )
}
