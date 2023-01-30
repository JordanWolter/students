import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

export default function StudentTextFields() {
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');

    const submitStudent = (e) => {
        e.preventDefault();
        const student = {name, address};
        console.log(student);
    }

  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      textAlign: 'center'}}
      noValidate
      autoComplete="off"
    >
        <Typography textAlign="center"> Add Student </Typography>
      <TextField id="outlined-basic" label="Student Name" variant="outlined" 
      value={name}
      onChange={(e)=>setName(e.target.value)}/>

      <TextField id="outlined-basic" label="Student Address" variant="outlined" 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
     
    </Box>
    <Button onClick={submitStudent}>Submit</Button>
    </>
  );
}