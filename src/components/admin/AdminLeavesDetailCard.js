import { Divider, FormControl, InputLabel, MenuItem, Select, TextareaAutosize} from '@mui/material';
import { Box } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import allocatedLeavesService from '../../routes/allocatedLeavesServiceRoutes';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor:'#2E3B55',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const theme = createTheme();
const AdminLeavesDetailCard = () => {

    const navigateTo = useNavigate();
    const { auth } = useAuthContext();
    const [allocationData, setAllocation] = useState();
    const {state} = useLocation()
   
    const {location} = useLocation();
    const [userLeaveStatus, setStatus] = useState();
    const navigateBack = () => {
        // 👇️ navigate back
        navigateTo('/admin/leaverequests');
      };
    useEffect(() => {
        const allocationID = state.id;
        const token = auth.user.token;
          allocatedLeavesService
            .viewLeaveAllocationById(allocationID,token)
            .then((res) => {
                setAllocation(res.data.data);
              console.log(res.data)
            })
            .catch((error) => {
              console.log(error);
            });
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        let leavestatus = {
            status: userLeaveStatus
        };

        try {
            const leaveID = state.id;
            const token = auth.user.token;
            leaveRequestService
                .editLeaveRequestById(leaveID,token, leavestatus)
                .then((req ,res) => {
                console.log("Updated Status Successfully");
                navigateTo("/admin/adminleavemanagement");
                })
                .catch((error) => {
                console.log(error);
                });
            
        } catch (err) {
            console.log(err) ;
        }
    }       
return (
    <>
    <Container>
           {[allocationData]?.map((item, index) => {
                   return(
                       <Box component="form" noValidate    sx={{  
                        marginTop:3,
                        width: 1000,
                        }}>
                        <Typography variant="h6" noWrap component="div">
                                User Details
                                </Typography>
                                
                               <Grid container spacing={4} 
                               sx={{  
                                marginTop:1,
                               
                                }}>
                               <Grid item xs={12} sm={4} alignItems='left'>
                               <Typography sx={{ }} variant="h6" component="div">
                          Name-{item?.postedBy.firstName || ""} {item?.postedBy.lastName || ""}
                        </Typography>
                      
                                  
                               </Grid>
                               <Grid item xs={12} sm={4}>
                               <Typography sx={{ }} variant="h6" component="div">
                          Designation-{item?.postedBy.employeeType || ""} 
                          </Typography>
                       
                                  
                               </Grid>
                               <Grid item xs={12} sm={4} alignItems='left'>
                               <Typography sx={{ }} variant="h6" component="div">
                          Employee Type-{item?.postedBy.employeeType || ""}
                        </Typography>
                      
                               </Grid>
                               
                              
                               <Grid item xs={12}>
                               <Box sx={{
                           marginTop:2,
                           marginLeft:2,
                           
                          
                        }}>
                          <Toolbar sx={{ justifyContent: "space-between" }}>
                          <ThemeProvider theme={theme}>
                          <Typography component="h1" variant="h5" sx={{
                            
                            textAlign:'left',
                            alignItems:'right',
                          fontFamily: 'BlinkMacSystemFont',
                          }}>
                             Leave Management
                          </Typography>
                        </ThemeProvider>
                               <div />
                               <Link  to= "/admin/adminleavemanagement/allocation" state= {{id:state.id}} style={{ textDecoration: "none" }} >
              <Button  variant="outlined" color="primary" sx={{
                marginLeft:'5',
              }}>
               Change Allocation
              </Button></Link>
                          </Toolbar>
                       
                        </Box>
                        <Divider/>
                                <Box sx={{
                            margin:2,
                          }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Leave Types</StyledTableCell>
            <StyledTableCell align="center">Allocated Amount</StyledTableCell>
            <StyledTableCell align="center">Used Amount</StyledTableCell>
            <StyledTableCell align="center">Leave Bal.</StyledTableCell>
           
          </TableRow>
        </TableHead>
       <TableBody>
        <TableRow>
       <StyledTableCell align="left">
               Annual Leaves
              </StyledTableCell>
              <StyledTableCell align="center">{item?.annualleaves}</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
              
              </TableRow> 
              <TableRow>
       <StyledTableCell align="left">
               Casual Leaves
              </StyledTableCell>
              <StyledTableCell align="center">{item?.casualleaves}</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>

              </TableRow> 
              <TableRow>
       <StyledTableCell align="left">
               Birthday Leaves
              </StyledTableCell>
              <StyledTableCell align="center">{item?.bdayleaves}</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
             
              </TableRow> 
              <TableRow>
       <StyledTableCell align="left">
               Professional Devlopment Leaves
              </StyledTableCell>
              <StyledTableCell align="center">{item?.pdleaves}</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
              
              </TableRow> 
       </TableBody>
      </Table>
    </TableContainer>
    </Box>
                            
                               </Grid>
                               </Grid>
                               {/* <Button
                            value="Accepted"
                            onClick={(e) => setStatus(e.target.value)}
                            type="submit"
                            variant="contained"
                            sx={{ mt: 4, mb: 4, mr: 0, width:'auto', borderRadius:10, marginRight:'2px', color: 'white', backgroundColor:'green', borderColor: 'black',
                            '&:hover': {
                            backgroundColor: '#393939',
                            color: 'white',
                            borderColor:'black'
                            },   
                            }}
                            >
                           Accept
                            </Button>
                            <Button
                             value="Declined"
                             onClick={(e) => setStatus(e.target.value)}
                            type="submit"
                            variant="contained"
                            sx={{ mt: 4, mb: 4, mr: 0, width:'auto', borderRadius:10, marginLeft:'2px', color: 'white', backgroundColor:'red', borderColor: 'black',
                            '&:hover': {
                            backgroundColor: '#393939',
                            color: 'white',
                            borderColor:'black'
                            },   
                            }}
                            >
                            Reject
                            </Button> */}
                           </Box>
                   )
               })}
           </Container>
   </>
 )
}

export default AdminLeavesDetailCard;