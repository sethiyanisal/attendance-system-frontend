import { Divider, FormControl, InputLabel, MenuItem, Select, TextareaAutosize} from '@mui/material';
import { Box } from '@mui/system';
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
const AdminLeaveAllocationCard = () => {

    const navigateTo = useNavigate();
    const { auth } = useAuthContext();
    const [allocationData, setAllocation] = useState();
    const {state} = useLocation()
   
    const {location} = useLocation();
    const [userAnnualLeaves, setAnnualLeaves] = useState();
    const [userCasualLeaves, setCasualLeaves] = useState();
    const [userBDayLeaves, setBDayLeaves] = useState();
    const [userPDLeaves, setPDLeaves] = useState();
    const navigateBack = () => {
        // 👇️ navigate back
        navigateTo('/admin/adminleavemanagement');
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
    
        let allocation = {
            annualleaves: userAnnualLeaves,
            casualleaves: userCasualLeaves,
            bdayleaves: userBDayLeaves,
            pdleaves: userPDLeaves

        };

        try {
            const allocationID = state.id;
            const token = auth.user.token;
            allocatedLeavesService
                .editLeaveAllocationById(allocationID,token, allocation)
                .then((req ,res) => {
                console.log("Updated Successfully");
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
                       <Box component="form" noValidate onSubmit={handleSubmit}   sx={{  
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
                               <Typography variant="h6" noWrap component="div">
                                Leave Management
                                </Typography>
                                <Divider/>
                                <Box    sx={{
                            margin:2,
                          }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Leave Types</StyledTableCell>
            <StyledTableCell align="center">Current Allocated Amount</StyledTableCell>
            <StyledTableCell align="center">New Allocation Amount</StyledTableCell>
           
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
       <TableBody>
        <TableRow>
       <StyledTableCell align="center">
               Annual Leaves
              </StyledTableCell>
              <StyledTableCell align="center">{item?.annualleaves}</StyledTableCell>
              <StyledTableCell align="center">
      <div>
        <TextField
         fullWidth
         multiline
         label="Enter New-Value"
         InputProps={{
             inputComponent: TextareaAutosize
         }}
         value={userAnnualLeaves}
         onChange={(e) => setAnnualLeaves(e.target.value)}
          
         
          
        />
        
      </div>
              </StyledTableCell>
              <StyledTableCell align="center">
              <Button
              type="submit"
              variant="contained">
                Change</Button></StyledTableCell>
              </TableRow> 
              <TableRow>
       <StyledTableCell align="center">
               Casual Leaves
              </StyledTableCell>
              <StyledTableCell align="center">{item?.casualleaves}</StyledTableCell>
              <StyledTableCell align="center">
      <div>
        <TextField
         fullWidth
         multiline
         label="Enter New-Value"
         InputProps={{
             inputComponent: TextareaAutosize
         }}
         value={userCasualLeaves}
         onChange={(e) => setCasualLeaves(e.target.value)}
          
         
          
        />
        
      </div>
              </StyledTableCell>
              <StyledTableCell align="center">
              <Button
              type="submit"
              variant="contained">
                Change</Button></StyledTableCell>
              </TableRow> 
              <TableRow>
       <StyledTableCell align="center">
               Bday Leaves
              </StyledTableCell>
              <StyledTableCell align="center">{item?.bdayleaves}</StyledTableCell>
              <StyledTableCell align="center">
      <div>
        <TextField
         fullWidth
         multiline
         label="Enter New-Value"
         InputProps={{
             inputComponent: TextareaAutosize
         }}
         value={userBDayLeaves}
         onChange={(e) => setBDayLeaves(e.target.value)}
          
         
          
        />
        
      </div>
              </StyledTableCell>
              <StyledTableCell align="center">
              <Button
              type="submit"
              variant="contained">
                Change</Button></StyledTableCell>
              </TableRow> 

              <TableRow>
       <StyledTableCell align="center">
               PD Leaves
              </StyledTableCell>
              <StyledTableCell align="center">{item?.pdleaves}</StyledTableCell>
              <StyledTableCell align="center">
      <div>
        <TextField
         fullWidth
         multiline
         label="Enter New-Value"
         InputProps={{
             inputComponent: TextareaAutosize
         }}
         value={userPDLeaves}
         onChange={(e) => setPDLeaves(e.target.value)}
          
         
          
        />
        
      </div>
              </StyledTableCell>
              <StyledTableCell align="center">
              <Button
              type="submit"
              variant="contained">
                Change</Button></StyledTableCell>
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

export default AdminLeaveAllocationCard;