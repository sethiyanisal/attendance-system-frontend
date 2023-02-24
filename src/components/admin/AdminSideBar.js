import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { NetworkLocked, PunchClockOutlined, DashboardCustomizeOutlined,  LoginOutlined} from '@mui/icons-material';
import { useLogout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import {Container, createTheme,ThemeProvider } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const theme = createTheme({
  primary: {
    position:'absolute',
   alignProperty:'bottom',
  },
 
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

    

  export default function AdminSidebar() {
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
      
<Grid sx={{ 
  justifyContent: "space-between",
  height:"100%"           
            }}>
        <div className="l-side-nav__content">
        <div className="l-side-nav__nav-items">
  <List>
<ListItem disablePadding>
          <ListItemButton href="/admin/dashboard">
            <ListItemIcon>
              <DashboardCustomizeOutlined /> 
            </ListItemIcon>
            <ListItemText>
            Dashboard
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/admin/timecards">
            <ListItemIcon>
              <PunchClockOutlined /> 
            </ListItemIcon>
            <ListItemText>
            Time Card
            </ListItemText>
          </ListItemButton>
        </ListItem>
       
        <ListItem  disablePadding>
          <ListItemButton  href="/admin/leaverequests">
            <ListItemIcon>
              <NetworkLocked /> 
            </ListItemIcon>
            <ListItemText>
            Leave Requests
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton  href="/admin/adminleavemanagement">
            <ListItemIcon>
              <ManageAccountsIcon /> 
            </ListItemIcon>
            <ListItemText>
            Leave Management
            </ListItemText>
          </ListItemButton>
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
        
</Grid>
        
      
   
    )
}