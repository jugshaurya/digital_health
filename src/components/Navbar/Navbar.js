import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// export default function Navbar() {
//   const [value, setValue] = React.useState('one');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         aria-label="secondary tabs example">
//         <Tab value="one" label="Home" />
//         <Tab value="two" label="Log In" />
//         <Tab value="three" label="Sign Up" />
//       </Tabs>
//     </Box>
//   );
// }
import React, {Component} from 'react'
import NavbarItems from './NavbarItems'
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <div className="NavbarItems">
                <div className="NavbarLogo">
                    <h1>Health ID Card</h1>
                    <HealthAndSafetyIcon fontSize="large" color="action"/>
                </div>
                <div className="NavbarLinks">
                    <ul>
                        {NavbarItems.map((item,index)=>{
                        return (<li>
                                    <a className={item.cName} href={item.url}>
                                        {item.itemName}
                                    </a>
                                </li> 
                            )}
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar