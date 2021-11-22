import * as React from 'react';
import checkup from '../images/checkup.svg';
import childHealth from '../images/childHealth.svg';
import doctor from '../images/doctor.svg';
import homepage from '../images/homepage.svg';
import login from '../images/login.svg';
import research from '../images/research.svg';
import security from '../images/security.svg';
import signup from '../images/signup.svg';
import tips from '../images/tips.svg';
import vaccRecord from '../images/vaccRecord.svg';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'white',
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const Items = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  container: {
    marginRight: '30px',
    height: '35vh',
    marginLeft: '30px',
  },
  mainImage: {
    marginTop: '4em',
    padding: '10px',
    paddingLeft: '0',
    marginLeft: '0',
    margin: '10px',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none !important',
    // marginLeft:'50px',
  },
  gridImage: {
    height: '17vh',
  },
  grid: {
    color: 'black',
    height: '35vh',
    padding: '20px 30px',
    marginLeft: '30px',
    border: '1px solid gray',
    borderTop: '20px solid darkslategray',
    borderRadius: '20px',
  },
  grid2: {
    marginTop: '2em',
    color: 'black',
    height: '35vh',
    padding: '20px 30px',
    marginLeft: '30px',
    // border: '1px solid gray',
    // borderTop: '20px solid darkslategray',
    borderRadius: '20px',
  },
  pp: {
    fontSize: '20px',
    color: 'rgba(0,0,0,0.8)',
    fontFamily: 'monospace',
  },
  cardSection: {
    marginTop: '100px',
  },
  cardHeading: {
    // border: '3px solid red',
    marginTop: '20px',
    fontSize: '4em',
    paddingLeft: '20px',
  },
  bb: {
    borderBottom: '5px double green',
  },
  logBut: {
    fontSize: '4em',
    border: '3px solid darkslategray',
    borderRadius: 10,
  },
  logButA: {
    textDecoration: 'none',
    color: 'black',
    padding: '1em',
  },
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className={classes.mainImage}
      >
        <Grid item xs={6}>
          <Item>
            <h2
              style={{
                color: '#446F2D',
                fontSize: '8em',
                marginTop: '1em',
                marginBottom: '-0.3em',
              }}
            >
              Health ID Card
            </h2>
            <h3
              style={{
                color: 'black',
                fontSize: '4em',
              }}
            >
              Digital book for medical history, analysis, and suggestions
            </h3>
            <button className={classes.logBut}>
              <a
                href="/login
              "
                className={classes.logButA}
              >
                Login to continue
              </a>
            </button>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{ marginLeft: '60px' }}>
            <img alt="some" src={homepage} className={classes.mainImage} />
          </Item>
        </Grid>
      </Grid>

      <Grid container className={classes.cardHeading}>
        <h3 className={classes.bb}>Features</h3>
      </Grid>

      {/* data card section */}
      <Grid container spacing={2} className={classes.cardSection}>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img alt="some" src={signup} className={classes.gridImage} />
            <h2>Sign Up</h2>
            <p className={classes.pp}>
              Create your health ID by using your mobile no. or Aadhaar.
            </p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img alt="some" src={login} className={classes.gridImage} />
            <h3>Personal Health Record</h3>
            <p className={classes.pp}>
              Login using your Health ID and view your medical history
            </p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img alt="some" src={childHealth} className={classes.gridImage} />
            <h3>Child Health ID</h3>
            <p className={classes.pp}>
              Create health ID for your child and keep health record right from
              birth.
            </p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img alt="some" src={doctor} className={classes.gridImage} />
            <h3>access to doctors</h3>
            <p className={classes.pp}>
              Only doctors exmamining you can access your records.
            </p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img alt="some" src={tips} className={classes.gridImage} />
            <h3>Tips/Suggestions</h3>
            <p className={classes.pp}>
              Get suggestions on healthy / nutritional food habits and routine
              exercise or yoga.
            </p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img alt="some" src={checkup} className={classes.gridImage} />
            <h3>Routine chekups</h3>
            <p className={classes.pp}>
              Provide you details for next appointment
            </p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img alt="some" src={vaccRecord} className={classes.gridImage} />
            <h3>Vaccination record</h3>
            <p className={classes.pp}>
              View vaccination record and upcoming vaccinations list.
            </p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img alt="some" src={research} className={classes.gridImage} />
            <h3>Data Anaylsis</h3>
            <p className={classes.pp}>
              It will help govt. to improve health sector at national level by
              insights from data collected
            </p>
          </Items>
        </Grid>
        <Grid item xs={4}>
          <Items className={classes.grid}>
            <img alt="some" src={security} className={classes.gridImage} />
            <h3>Security</h3>
            <p className={classes.pp}>
              Your health data is kept encrypted using blockchain
            </p>
          </Items>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        elevation={0}
        style={{ backgroundColor: 'rgba(0,0,0,0.8)', marginTop: '8em' }}
      >
        <Grid item xs={4}>
          <Item
            style={{ height: '25vh', color: 'white' }}
            className={classes.grid2}
          >
            <h2>Address</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            style={{ height: '25vh', color: 'white' }}
            className={classes.grid2}
          >
            <h2>Important Links</h2>
            <a style={{ color: 'white' }} href="/">
              Lorem ipsum, or lipsum as
            </a>
            <br />
            <a style={{ color: 'white' }} href="/">
              Lorem ipsum, or lipsum as
            </a>{' '}
            <br />
            <a style={{ color: 'white' }} href="/">
              Lorem ipsum, or lipsum as
            </a>{' '}
            <br />
            <a style={{ color: 'white' }} href="/">
              Lorem ipsum, or lipsum as
            </a>{' '}
            <br />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            style={{ height: '25vh', color: 'white' }}
            className={(classes.container, classes.grid2)}
          >
            <h2>Policies</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book
            </p>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
