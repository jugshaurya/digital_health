import * as React from 'react';
import checkup from '../images/checkup.svg'
import childHealth from '../images/childHealth.svg'
import doctor from '../images/doctor.svg'
import homepage from '../images/homepage.svg'
import login from '../images/login.svg'
import medication from '../images/medication.svg'
import research from '../images/research.svg'
import security from '../images/security.svg'
import signup from '../images/signup.svg'
import tips from '../images/tips.svg'
import vaccRecord from '../images/vaccRecord.svg'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'white',
  backgroundColor: 'transparent',
  boxShadow:'none',

}));
const Items = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles({
  container:{
    marginRight:'30px',
    height: '35vh',
    marginLeft:'30px',
  },
  mainImage:{
    height :'50vh',
    border:'0',
    boxShadow: 'none !important',
    // marginLeft:'50px',
  },
  gridImage:{
    height :'17vh',
  },
  grid: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    borderRadius: 3,
    // backgroundColor:'#F0F0F0',
    color: 'black',
    height: '35vh',
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.mainImage}>
        <Grid item xs={6}>
          <Item className={classes.mainImage}>
            <h1 style={{fontSize:'50px',color:'#446F2D',marginLeft:'20px'}}>Health ID Card</h1>
            <h1 style={{color:'black',align:'left',marginLeft:'20px'}}>Digital book for medical history, analysis, and suggestions</h1>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{marginLeft:'60px'}}>
            <img src={homepage} className={classes.mainImage}/>
          </Item>
        </Grid>
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
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img src={signup} className={classes.gridImage}/>
            <h3>Sign Up</h3>
            <p>Create your health ID by using your mobile no. or Aadhaar.</p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img src={login} className={classes.gridImage}/>
            <h3>Personal Health Record</h3>
            <p>Login using your Health ID and view your medical history</p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid, classes.container}>
          <img src={childHealth} className={classes.gridImage}/>
            <h3>Child Health ID</h3>
            <p>Create health ID for your child and keep health record right from birth.</p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
          <img src={doctor} className={classes.gridImage}/>
            <h3>access to doctors</h3>
            <p>Only doctors exmamining you can access your records.</p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
          <img src={tips} className={classes.gridImage}/>
            <h3>Tips/Suggestions</h3>
            <p>Get suggestions on healthy / nutritional food habits and routine exercise or yoga.</p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid, classes.container}>
          <img src={checkup} className={classes.gridImage}/>
            <h3>Routine chekups</h3>
            <p>Provide you details for next appointment</p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
          <img src={vaccRecord} className={classes.gridImage}/>
            <h3>Vaccination record</h3>
            <p>View vaccination record and upcoming vaccinations list.</p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
          <img src={research} className={classes.gridImage}/>
            <h3>Data Anaylsis</h3>
            <p>It will help govt. to improve health sector at national level by insights from data collected</p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid, classes.container}>
          <img src={security} className={classes.gridImage}/>
            <h3>Security</h3>
            <p>Your health data is kept encrypted using blockchain</p>
          </Items>
        </Grid>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={2} elevation={0} style={{height:'35vh',backgroundColor:'#62A04B'}} >
        <Grid item xs={4}>
          <Item style={{height:'25vh',color:'white'}} className={classes.grid}>
            <h3>Address</h3>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
               graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century
                who is thought to have scrambled parts of Cicero's De Finibus
               Bonorum et Malorum for use in a type specimen book</p>
          </Item>
        </Grid>
        <Grid item xs={4} >
          <Item style={{height:'25vh',color:'white'}} className={classes.grid}>
            <h3>Important Links</h3>
            <a style={{color:'white'}} href="/">Lorem ipsum, or lipsum as it is sometimes known</a>
            <a style={{color:'white'}} href="/">Lorem ipsum, or lipsum as it is sometimes known</a>
            <a style={{color:'white'}} href="/">Lorem ipsum, or lipsum as it is sometimes known</a>
            <a style={{color:'white'}} href="/">Lorem ipsum, or lipsum as it is sometimes known</a>
          </Item>
        </Grid>
        <Grid item xs={4} >
          <Item style={{height:'25vh',color:'white'}} className={classes.container, classes.grid}>
            <h3>Policies</h3>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
               graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century
                who is thought to have scrambled parts of Cicero's De Finibus
               Bonorum et Malorum for use in a type specimen book</p>
          </Item>
        </Grid>
        
      </Grid>
      </>)
  }
