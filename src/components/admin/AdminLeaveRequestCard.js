import React, { useEffect, useState } from 'react';
import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import {Typography} from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const AdminLeaveRequestCard = () => {
  const { auth } = useAuthContext();
  const [leaveData, setLeave] = useState();
  const navigate = useNavigate();
  const navigateview = useNavigate();
  


  useEffect(() => {
    
    const token = auth.user.token;
      leaveRequestService
        .getAllLeaveRequests(token)
        .then((res) => {
          setLeave(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });

        
  }, []);
  

  return (
    <>
    {leaveData ? (
      leaveData.map((item, index) =>{
        
        
        return(                
 <tr key={index}>
 <td> {index+1}</td>
 <td>{item?.postedBy.firstName}</td>
 <td>{item.leavetype}</td>
 <td>{item.subject}</td>
 <td>
 <Link to= "/admin/leaverequests/viewleaverequests" 
        state= {{id:item._id}} style={{ textDecoration: "none" }}>
   <button className="pf-btn pf-btn-link "  >
     View
   </button>
   </Link>
   
 </td>
</tr>
)
})
):  
<tbody></tbody> 
 } </>
  )
}

export default AdminLeaveRequestCard;