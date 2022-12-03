import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Dashboard, ExitToAppOutlined, PunchClockRounded, Watch } from '@mui/icons-material';
import Image from './../../images/logo.png';
import { Grid } from '@mui/material';


const UserSideBar = () => {
  return (
        <Grid item xs={2} sx={{ height: '100%' }}>
        <Box sx={{
                width:'100%',
                flexDirection: 'column',
                borderRight:1,
                height:'100%',
                paddingTop: 2,
            }}>

            <Box
              sx={{
                width: 100,
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                margin:'auto',
                marginBottom:0,
    
              }}
            >
              <img src={Image} alt="logo" />
            </Box>
            <Divider variant="middle" sx={{backgroundColor:"grey"}} />
            <List>
                <ListItem divider>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: "grey" }}>
                            <Dashboard/>
                        </ListItemIcon>
                        <ListItemText  primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
                <ListItem divider>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: "grey" }}>
                            <PunchClockRounded/>
                        </ListItemIcon>
                        <ListItemText  primary="Punch Time" />
                    </ListItemButton>
                </ListItem>
                <ListItem divider>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: "grey" }}>
                            <Watch/>
                        </ListItemIcon>
                        <ListItemText  primary="Time Cards" />
                    </ListItemButton>
                </ListItem>
                <ListItem divider>
                    <ListItemButton>
                        <ListItemIcon sx={{ color: "grey" }}>
                            <ExitToAppOutlined/>
                        </ListItemIcon>
                        <ListItemText  primary="Leave Requests" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
        </Grid>
  )
}

export default UserSideBar;