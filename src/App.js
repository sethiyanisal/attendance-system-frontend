import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserDashboard from './components/user/UserDashboard';
import UserLeaveRequestList from './components/user/UserLeaveRequestList';
import UserLeaveRequestForm from './components/user/UserLeaveRequestForm';
import TimeCard from './components/user/TimeCard';
import PunchTime from './components/user/PunchTime';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Missing from './components/Missing';

const ROLES = {
  'User': 2080,
  'Editor': 1984,
  'Admin': 5150
}



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            
            {/* public routes */}
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<SignUp />}></Route>

            <Route element={<RequireAuth/>}>
              <Route path="/user/dashboard" element={<UserDashboard />}></Route>
              <Route path="/user/punchtime" element={<PunchTime/>}></Route>
              <Route path="/user/timecards" element={<TimeCard />}></Route>
              <Route path="/user/leaverequests" element={<UserLeaveRequestList/>}></Route>
              <Route path="/user/leaverequests/leaverequestform" element={<UserLeaveRequestForm/>}></Route>
            </Route>

            <Route path="/*" element={<Missing />} />

          </Route>
        </Routes>
    </div>
  );
}

export default App;
