import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from './../images/logo.png';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../routes/axios';
import allocatedLeavesService from '../routes/allocatedLeavesServiceRoutes';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const theme = createTheme();
const REGISTER_URL = "/register";


export default function SignUp() {

    const navigateTo = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
//User Details
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactnum, setContactNum] = useState("");
    const [employeeType, setEmpType] = useState('64018c4974df026c16a62189');
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [userRole, setUserRole] = useState("2080");
//Leave types
    const [empTypeLeaves, setEmpTypeLeaves] = useState("");
    const [leaveTypes, setLeaveTypes] = useState();
    // const [AnnualLeaves, setannualleaves] = useState("");
    // const [CasualLeaves, setcasualleaves] = useState("");
    // const [BDayLeaves, setbdayleaves] = useState("");
    // const [PDLeaves, setpdleaves] = useState("");

  
    
    
    //Call Employee Types
    useEffect(() => { 
    allocatedLeavesService
    .viewEmpLeaveTypes()
    .then((res) => {
      setLeaveTypes(res.data);
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
    });      
    }, []);

    const handleChange = async (e) => {
   
      setEmpType(e.target.value);
      try {
          const empTypeID = employeeType;
            allocatedLeavesService
              .getEmpTypeLeavesById(empTypeID)
              .then((res) => {
                setEmpTypeLeaves(res.data);
                console.log(res.data);
                try {
                  
                } catch (err) {
                  
                }
               
              })
              .catch((err) => {
                console.log(err);
              });             
      } catch (error) {
        console.log(error);
      }};
      
    
      console.log(empTypeLeaves);
      console.log(employeeType);
  
   
    
  
  
   
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
   
    const handleSubmit = async (e) => {
      e.preventDefault();
     
      
      try {
        //Post User Signup Form
        const response = await Axios.post(REGISTER_URL,
              JSON.stringify({ firstName, lastName, email, contactnum, employeeType, password, conpassword, userRole }),
              {
                  headers: { 'Content-Type': 'application/json' },
              }
          );
          navigateTo("/user/dashboard");
          // TODO: remove console.logs before deployment
          console.log(JSON.stringify(response?.data));
         
          //Allocating Default User Type leaves for the user
          const AnnualLeaves = empTypeLeaves.annualleaves;
      const CasualLeaves = empTypeLeaves.casualleaves;
      const BDayLeaves = empTypeLeaves.bdayleaves;
      const PDLeaves = empTypeLeaves.pdleaves;
         
            let leaves ={
              annualleaves:AnnualLeaves,
             casualleaves:CasualLeaves,
              bdayleaves:BDayLeaves,
              pdleaves:PDLeaves,
            };  
          try {
            const token = response?.data.token;
              allocatedLeavesService
                  .postLeaveAllocation(token, leaves)
                  .then((res) => {
                  console.log("Successfully added a leave request and registration");
                  navigateTo("/user/dashboard");
                  })
                  .catch((error) => {
                  console.log(error);
                  });              
          } catch (err) {
              console.log(err) ;
          }
          //console.log(JSON.stringify(response))
          setSuccess(true);
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 409) {
              setErrMsg('Username Taken');
          }
          else {
              setErrMsg('Registration Failed')
          }         
      }
  }
  


//Call Leaves Allocation By Employe Types

 
 
 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main"  sx={{paddingTop: 4, paddingBottom: 4,}}>
        <CssBaseline />
        <Box
              sx={{
                width: 150,
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                margin:'auto',
                marginBottom:0,
    
              }}
            >
              <img src={Image} alt="logo" sx={{}} />
        </Box>
        <Box sx={{
                width: 600,
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                margin:'auto',
                }}
                >
        <Typography component="h1" variant="h5" sx={{fontWeight:'bold',}}>
            Sign up to OnTime!
        </Typography>
        <Typography component="h1" variant="h5">
          <Link href="#" variant="body2" underline="hover" color="inherit">
                  Already have an account? Sign in
          </Link>
        </Typography>
        </Box>
        <Box
          sx={{
            width: 600,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:'auto',
          }}
        >
          <Card sx={{marginTop: 4, borderRadius:3,}}>
          <CardContent>
          <Box component="form" noValidate  onSubmit={handleSubmit}  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  ref={userRef}
                  autoComplete="off"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  ref={userRef}
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  ref={userRef}
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactnum"
                  label="Contact Number"
                  name="contactnum"
                  ref={userRef}
                  autoComplete="off"
                  value={contactnum}
                  onChange={(e) => setContactNum(e.target.value)}
                />
              </Grid>
             

              <Grid item xs={8}>
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Employee Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={employeeType}
          label="Employee Type"
          onChange={handleChange}
         
        >{leaveTypes?.map((item, index) => (
          <MenuItem key={index} value={item._id}>{item.employeetype}</MenuItem>
          ))}
          </Select> 
      </FormControl>
    </Box>
               </Grid>

              <Grid item xs={4}>
              <Box sx={{
                paddingTop:1, 
                minWidth: 120
               }}>
              <Button
              
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
       
      >
        Options
      </Button>
      </Box>
              </Grid>
             
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  ref={userRef}
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conpassword"
                  label="Confirm Password"
                  type="password"
                  id="conpassword"
                  ref={userRef}
                  autoComplete="off"
                  value={conpassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />
              </Grid>
                {/* <TextField
                  name="role"
                  type="hidden"
                  id="role"
                  value="2080"
                /> */}
            </Grid>
            <Button
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2, width:200, borderRadius:15,  color: 'black', borderColor: 'black',
              '&:hover': {
                backgroundColor: '#DCDCDC',
                color: 'balck',
                borderColor:'black'
            },   
            }}
            >
              Sign Up
            </Button>
          </Box>
          </CardContent>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}