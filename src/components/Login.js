import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import image from './../images/logo.png';

function Login() {
  return (
    <MDBContainer className="my-5">

      <MDBCard className='w-50 mx-auto'>
        <MDBRow className='my-0'>
          <MDBCol>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
              <MDBCardImage src={image} alt="login form" className='rounded-start w-25 mx-auto'/>
              </div>

              <h5 className="fw-normal mt-0 pb-5" style={{letterSpacing: '1px'}}>Welcome to <span className="text-success">OnTime !</span></h5>

                <MDBInput wrapperClass='mb-4' placeholder='Email' id='formControlLg' type='email' size="md"/>
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="md"/>

              <MDBBtn className="mb-4 px-5" color='dark' size='md'>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;