import React from 'react';
import { Button, Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import {Typography} from '@mui/material';
import AdminLeaveRequestCard from './AdminLeaveRequestCard';
import AdminSideBar from './AdminSideBar';


const AdminLeaveRequestList = () => {
  return (
    <>
     <AdminSideBar/>
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
          
          </div>
      </div>
          <div className="container-fluid">
            <div className="l-table__container">
              <div className="l-table__wrapper">
                <table className="l-raw-table">
                    <thead>
                      <tr>
                        <th>Leave ID</th>
                        <th>Name</th>
                        <th>Leave Type</th>
                        <th>Subject</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <AdminLeaveRequestCard/>
                </table>
              </div>
            </div>      
          </div>
      </div>
    </div>
    </>
  )
}

export default AdminLeaveRequestList;