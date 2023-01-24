import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { ArrowBackIosNewOutlined, CardGiftcardOutlined, Dashboard, DashboardCustomizeOutlined, ExitToAppOutlined, LoginOutlined, PunchClockOutlined, PunchClockRounded, TimeToLeaveOutlined, TimeToLeaveRounded, Watch } from '@mui/icons-material';
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
    <div className="l-side-nav">
        <div className="l-side-nav__header">
        <img className="l-side-nav__logo" src={Image} alt="logo" />
        </div>
        <div className="l-side-nav__content">
            <div className="l-side-nav__nav-items">
            <List>
            <ListItem divider>
                <a className="c-menu-item" href="/user/dashboard">
                    <DashboardCustomizeOutlined/> Dashboard
                </a>
            </ListItem> 
            <ListItem divider>
            <a className="c-menu-item" href="/user/punchtime">
                <PunchClockRounded/>Punch Time
                </a>
            </ListItem>
            <ListItem divider>
            <a className="c-menu-item" href="/user/timecards">
                <CardGiftcardOutlined/>Time Cards
                </a>
            </ListItem>
            <ListItem divider>
            <a className="c-menu-item" href="/user/leaverequests">
                <TimeToLeaveOutlined/>Leave Requests
                </a>    
            </ListItem>  
               
            
            </List>
            </div>
            
            <List>
                    <div className="c-menu-item" onClick={handleClick}>
                    <ListItem divider> 
                    <LoginOutlined/>Logout
                    </ListItem>
                    </div>
            </List>
        </div>
    </div>
  )
}

export default UserSideBar;