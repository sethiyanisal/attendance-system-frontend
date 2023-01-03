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
import AdminDashboard from './components/admin/AdminDashboard';
import TimeCard from './components/user/TimeCard';
import PunchTime from './components/user/PunchTime';
import AdminTimeCard from './components/admin/AdminTimeCard';
import AdminLeaveRequestList from './components/admin/AdminLeaveRequestList';
import Layout from './components/Layout';

const ROLES = {
  'User': 2080,
  'Editor': 1984,
  'Admin': 5150
}



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
          <Route path="/user/punchtime" element={<PunchTime/>}></Route>
          <Route path="/user/timecards" element={<TimeCard />}></Route>
          <Route path="/user/leaverequests" element={<UserLeaveRequestList/>}></Route>
          <Route path="/user/leaverequests/leaverequestform" element={<UserLeaveRequestForm/>}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}></Route>
          <Route path="/admin/timecard" element={<AdminTimeCard/>}></Route>
          <Route path="/admin/leaverequests" element={<AdminLeaveRequestList/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
