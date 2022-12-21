import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Dashboard, ExitToAppOutlined, LoginOutlined, PunchClockRounded, Watch } from '@mui/icons-material';
import Image from './../../images/logo.png';
import { Grid } from '@mui/material';
import { borderRight } from '@mui/system';
import { useLogout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';


const UserSideBar = () => {

const navigateTo = useNavigate();
const { logout } = useLogout();

const handleClick = () => {
    
    try {
        const response = logout();
        navigateTo("/");
    } catch (err) {
    }
}
  
  return (
        <Grid item xs={2} sx={{ height:'full' }}>
            <Box sx={{
                    width:'16.6667%',
                    paddingTop:2,
                    flexDirection: 'column',
                    height:1,
                    position:'fixed',
                    borderRight:1,
                }}>

                {/* <Box sx={{
                    width:1,
                    flexDirection: 'column',
                    paddingTop:2,
                    marginRight:0
                }}> */}

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
                    <Box sx={{
                        marginTop:35
                    }}>
                    <List>
                        <ListItem>
                        <ListItemButton onClick={handleClick}>
                                <ListItemIcon sx={{ color: "grey" }}>
                                    <LoginOutlined/>
                                </ListItemIcon>
                                <ListItemText  primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    </Box>
                {/* </Box> */}
            </Box>
        </Grid>
  )
}

export default UserSideBar;