import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdminTable from '../components/Admin/AdminTable';
import AdminVisuals from '../components/Admin/AdminVisuals';

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

export default function AdminPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const token = JSON.parse(localStorage.getItem('token'));
  return (
    <Box sx={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f0f0f0',
          color: 'purple',
          fontSize: '1.2rem',
        }}
      >
        <p>Admin Name : {token.name}</p>
        <p>Admin ID : {token.id}</p>
        <p>Admin Email : {token.email}</p>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Search Medical Record" {...a11yProps(0)} />
          <Tab label="Visualizations" {...a11yProps(1)} />
          {/* <Tab label="Tips/Suggestion" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AdminTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminVisuals />
      </TabPanel>
    </Box>
  );
}
