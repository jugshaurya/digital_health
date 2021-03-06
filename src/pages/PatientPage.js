import * as React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PatientVaccination from '../components/Patient/PatientVaccination';
import PatientMedicalHistory from '../components/Patient/PatientTable';
import PatientTips from '../components/Patient/PatientTips';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PatientPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const token = JSON.parse(localStorage.getItem("token"))

  return (
    <Box sx={{ width: '100%' }}>
      <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#f0f0f0", color: "purple", fontSize: "1.2rem" }}>
        <p>
          Patient Name : {token.name}
        </p>
        <p>
          Patient Health ID : {token.id}
        </p>
        <p>
          Patient Email : {token.email}
        </p>

      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Medical History" {...a11yProps(0)} />
          <Tab label="Vaccination History" {...a11yProps(1)} />
          <Tab label="Tips/Suggestion" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PatientMedicalHistory />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PatientVaccination />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "70vw" }}>
          <PatientTips />
          <PatientTips />
          <PatientTips />
        </div>
      </TabPanel>
    </Box>
  );
}
