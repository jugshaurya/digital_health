import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  start:{
    marginTop:'100vh',
  },
  container:{
    marginRight:'30px',
    height: '17vh',
  },
  grid: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    backgroundColor:'#F0F0F0',
    color: 'white',
    height: '17vh',
    padding: '0 30px',
    marginLeft:'30px',
  },

});

export default function HomePage() {
  const classes = useStyles();
    return(
      <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <h1>Health ID Card</h1>
            <p>Digital book for medical history, analysis, and suggestions</p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </Grid>
      <Grid container spacing={2} className={classes.start}>
        <Grid item xs={4}>
          <Item className={classes.grid}>
            <h3>Sign Up</h3>
            <p>Create your health ID by using your mobile no. or Aadhaar.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={classes.grid}>
            <h3>Personal Health Record</h3>
            <p>Login using your Health ID and view your medical history</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={classes.grid, classes.container}>
            <h3>Child Health ID</h3>
            <p>Create health ID for your child and keep health record right from birth.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={classes.grid}>
            <h3>access to doctors</h3>
            <p>Only doctors exmamining you can access your records.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={classes.grid}>
            <h3>Tips/Suggestions</h3>
            <p>Get suggestions on healthy / nutritional food habits and routine exercise or yoga.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={classes.grid, classes.container}>
            <h3>Routine chekups</h3>
            <p>Provide you details for next appointment</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className={classes.grid}>
            <h3>Vaccination record</h3>
            <p>View vaccination record and upcoming vaccinations list.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3></h3>
            <p></p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3></h3>
            <p></p>
          </Item>
        </Grid>
      </Grid>
      </>)
  }
