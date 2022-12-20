import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Dashboard, ExitToAppOutlined, PunchClockRounded, Watch } from '@mui/icons-material';
import Image from './../../images/logo.png';
import { Grid } from '@mui/material';


const UserSideBar = () => {
  return (
        <Grid item xs={2} sx={{ height: 'auto' }}>
            <Box sx={{
                    width:'full',
                    flexDirection: 'column',
                    marginRight:0,
                    height:1,
                    position:'fixed'
                }}>

                <Box sx={{
                    width:1,
                    flexDirection: 'column',
                    paddingTop:2,
                    marginRight:0
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
                            <ListItemButton href="/user/dashboard">
                                <ListItemIcon sx={{ color: "grey" }}>
                                    <Dashboard/>
                                </ListItemIcon>
                                <ListItemText  primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem divider>
                            <ListItemButton href="/user/punchtime">
                                <ListItemIcon sx={{ color: "grey" }}>
                                    <PunchClockRounded/>
                                </ListItemIcon>
                                <ListItemText  primary="Punch Time" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem divider>
                            <ListItemButton href="/user/timecards">
                                <ListItemIcon sx={{ color: "grey" }}>
                                    <Watch/>
                                </ListItemIcon>
                                <ListItemText  primary="Time Cards" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem divider>
                            <ListItemButton href="/user/leaverequests">
                                <ListItemIcon sx={{ color: "grey" }}>
                                    <ExitToAppOutlined/>
                                </ListItemIcon>
                                <ListItemText  primary="Leave Requests" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Grid>
  )
}

export default UserSideBar;