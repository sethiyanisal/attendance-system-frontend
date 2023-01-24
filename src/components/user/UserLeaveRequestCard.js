import React, { useEffect, useState } from 'react';
import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import {Typography} from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';


const UserLeaveRequestCard = () => {

  const { auth } = useAuthContext();
  const [leaveData, setLeave] = useState();

  useEffect(() => {
    const userID = auth.user.id;
    const token = auth.user.token;
      leaveRequestService
        .getLeaveRequestsById(userID, token)
        .then((res) => {
          setLeave(res.data.data);
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
            <td>{item.leavetype}</td>
            <td>{item.subject}</td>
            <td>
              <div className='c-badge c-badge--sm c-badge-yellow invert-true'>Pending</div>
            </td>
            <td>
              <button className="pf-btn pf-btn-link " type="submit">
                View
              </button>
            </td>
          </tr>
        )
      })
    ):(
      <tbody></tbody>
    )}
        
    </>
  )
}

export default UserLeaveRequestCard;