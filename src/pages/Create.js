import { Avatar, Grid, Paper, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Form, Formik,ErrorMessage } from 'formik';
import "./Create.css";
//import * as Yup from 'yup';

export default function Create() {
  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px,auto" }
  const btn = { margin:'10px'}
  const initialValues = {
   Name:' ',
   Email:' ',
   PhoneNo:' ',
   Password:' '
  }
  
  //const validationSchema = Yup.object.shape({
    //name:Yup.string().required("Required"),
    //PhoneNo:Yup.string().required("required")
 //});
  const onSubmit = (values,prop) => {
    console.log(values)
  }
  return (
    <div>
      <Grid>
        <Paper elevation={20} className='paper' style={paperStyle}>
          <Grid align='center'>
            <Avatar className='avatar'>


            </Avatar>
            <h2>Sign Up </h2>
          </Grid>
          <Typography variant='caption' gutterBottom>
            Please fill up the form to creat an account
          </Typography>
          
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props)=>(
          <Form>
            <TextField fullWidth label='Name' name = "Name" value={props.values.Name} onChange={props.handleChange} helperText = {<ErrorMessage name='Name'/>}  variant="standard" placeholder='Enter Your Name' gutterBottom />
            <TextField fullWidth label='Email' name = "Email"  {...props.getFieldProps('Email')} variant="standard" gutterBottom />
            <TextField fullWidth label='PhoneNo' name = 'PhoneNo' {...props.getFieldProps('PhoneNo')} variant="standard" gutterBottom/>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
            <TextField fullWidth label='Password' name = 'Password' {...props.getFieldProps('Password')} variant="standard" />
            <TextField fullWidth label='Confirm Password' variant="standard" />
            <Button type="submit" variant = "contained" color='primary'   style = {btn}>Sign Up</Button>
          </Form>
          )}
          </Formik>

        </Paper>
      </Grid>
    </div>
  )
}
