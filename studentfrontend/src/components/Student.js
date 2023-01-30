import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Table, Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StudentTextFields() {
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [students, setStudents] = React.useState([]);

    const submitStudent = (e) => {
        e.preventDefault();
        const student = { name, address };
        console.log(student);

        fetch("http://localhost:8080/student/add",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            }).then(() => {
                console.log("New student added");
            })
            setName('');
            setAddress('');

    }

    React.useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result)
            })
    })

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    textAlign: 'center'
                }}
                noValidate
                autoComplete="off"
            >
                <Typography textAlign="center"> Add Student </Typography>
                <TextField id="outlined-basic" label="Student Name" variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <TextField id="outlined-basic" label="Student Address" variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} />

            </Box>
            <Button onClick={submitStudent}>Submit</Button>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Student Name</TableCell>
                            <TableCell >Student Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow
                                key={student.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}