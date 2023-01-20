import React, { useEffect, useState } from 'react';
import { Button, Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import UserSideBar from './UserSideBar';
import {Typography} from '@mui/material';
import UserLeaveRequestCard from './UserLeaveRequestCard';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';

const UserLeaveRequestList = () => {
  

  // const { auth } = useAuthContext();
  // const [leaveData, setLeave] = useState();

  // useEffect(() => {
  //   const userID = auth.user.id;
  //   const token = auth.user.token;
  //     leaveRequestService
  //       .getLeaveRequestsById(userID, token)
  //       .then((res) => {
  //         setLeave(res.data.data);
  //         console.log(res.data)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  // }, []);

  return (
    <>
    <UserSideBar/>
    <div className="l-app__body">
      <header className="l-header">
                <div className="l-header__wrapper">
                    <h4 className="heading-4">Leave Requests</h4>
                </div>
                
      </header>
      <div className="l-page">
        <div className="l-page-header__heading">
          <div className="l-page__title-wrapper">
            <div className="body-base--medium">Leave request</div>
          </div>
          <div className="l-page__actions">
          <a
                  href='/user/leaverequests/leaverequestform'
                    type="submit"
                    className="pf-btn pf-btn-primary"
                  >
                    Request Leave
                  </a>
          </div>
      </div>
          <div className="container-fluid">
            <div className="l-table__container">
              <div className="l-table__wrapper">
                <table className="l-raw-table">
                    <thead>
                      <tr>
                        <th>Leave ID</th>
                        <th>Type</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <UserLeaveRequestCard/>
                </table>
              </div>
            </div>      
          </div>
      </div>
    </div>
    </>
  )
}

export default UserLeaveRequestList;