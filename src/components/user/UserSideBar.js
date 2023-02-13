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
import { NetworkLocked, PunchClockOutlined, DashboardCustomizeOutlined,  LoginOutlined, PunchClockRounded} from '@mui/icons-material';
import { useLogout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

  export default function UserSidebar() {
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
        <List>
         
        <ListItem disablePadding>
          <ListItemButton href="/user/dashboard">
            <ListItemIcon>
              <DashboardCustomizeOutlined /> 
            </ListItemIcon>
            <ListItemText>
            Dashboard
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/user/timecard">
            <ListItemIcon>
              <PunchClockOutlined /> 
            </ListItemIcon>
            <ListItemText>
            Time Card
            </ListItemText>
          </ListItemButton >
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/user/timepunch">
            <ListItemIcon>
              <PunchClockRounded /> 
            </ListItemIcon>
            <ListItemText>
            PunchTime
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/user/leaverequest">
            <ListItemIcon>
              <NetworkLocked /> 
            </ListItemIcon>
            <ListItemText>
            Leave Requests
            </ListItemText>
          </ListItemButton>
        </ListItem>
      
        <ListItem>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <LoginOutlined/> 
            </ListItemIcon>
            <ListItemText>
            Logout
            </ListItemText>
          </ListItemButton>
        </ListItem>
    </List>
      
    );
}