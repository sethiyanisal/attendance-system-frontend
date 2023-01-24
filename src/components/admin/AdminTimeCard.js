import { Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import {Typography} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import DatePick from '../user/DatePick';
import AdminSideBar from './AdminSideBar';
import AdminPunchTable from './AdminPunchTable';


const AdminTimeCard = () => {
   
  return (
    <>
    <AdminSideBar/>
    <div className="l-app__body">
      <header className="l-header">
                <div className="l-header__wrapper">
                    <h4 className="heading-4">Time Card</h4>
                </div>
      </header>
      <div className="l-page ">
      <div className="l-page-header__heading">
                <div className="l-page__title-wrapper">
                  <div className="body-base--medium">Tiem cards</div>
                </div>
                <div className="l-page__actions">
                <button
                          type="submit"
                          className="pf-btn pf-btn-primary"
                        >
                          Print PDF
                        </button>
                </div>
        </div>
        <div className='container-fluid'>
        
        <div className="l-table__container">
          <div className='l-table-config'>
          <FormControl>
                  <DatePick/>   
            </FormControl>
          </div>
          <div className="l-table__wrapper">
            <AdminPunchTable/>
          </div>
        </div>
        </div>   
        </div>
    </div>
   </> 
  )
}

export default AdminTimeCard;