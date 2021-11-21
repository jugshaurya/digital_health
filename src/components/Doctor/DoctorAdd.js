import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function DoctorAdd() {

    const [name, setname] = useState()
    const [id, setid] = useState()
    const [doctorname, setdoctorname] = useState()
    const [doctorid, setdoctorid] = useState()
    const [region, setregion] = useState()
    const [status, setstatus] = useState()
    const [hospital, sethospital] = useState()
    const [date, setdate] = useState()
    const [medication, setmedication] = useState()
    const [disease, setdisease] = useState()

    const add = () => {
        console.log("ADD")
    }
    return (
        <div style={{ backgroundColor: "dadada", padding: "5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
            <TextField
                required
                id="outlined-required"
                label="Patient Name"
                defaultValue="Patient Name"
                onChange={(e) => setname(e.target.value)}
            />

            <TextField
                required
                id="outlined-required"
                label="Health ID"
                defaultValue="Health ID"
                onChange={(e) => setid(e.target.value)}
            />


            <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2021-11-21"
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setdate(e.target.value)}
            />

            <TextField
                required
                id="outlined-required"
                label="Doctor Name"
                defaultValue="Doctor Name"
                onChange={(e) => setdoctorname(e.target.value)}
            />

            <TextField
                required
                id="outlined-required"
                label="Doctor ID"
                defaultValue="Doctor ID"
                onChange={(e) => setdoctorid(e.target.value)}
            />
            <TextField
                required
                id="outlined-required"
                label="Hospital Name"
                defaultValue="Hospital Name"
                onChange={(e) => sethospital(e.target.value)}
            />

            <TextField
                required
                id="outlined-required"
                label="Region"
                defaultValue="Region"
                onChange={(e) => setregion(e.target.value)}
            />
            <TextField
                required
                id="outlined-required"
                label="Disease"
                defaultValue="Disease"
                onChange={(e) => setdisease(e.target.value)}
            />

            <TextField
                required
                id="outlined-required"
                label="Medication"
                defaultValue="Medication"
                onChange={(e) => setmedication(e.target.value)}
            />
            <TextField
                required
                id="outlined-required"
                label="Status"
                defaultValue="status"
                onChange={(e) => setstatus(e.target.value)}
            />

            <Button variant="contained" onClick={add}>Add Record</Button>
            {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Login Failed"
        action={action}
      /> */}
        </div>
    )
}
