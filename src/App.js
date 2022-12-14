import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserDashboard from './components/user/UserDashboard';
import UserLeaveRequestList from './components/user/UserLeaveRequestList';
import UserLeaveRequestForm from './components/user/UserLeaveRequestForm';
// import TimeCard from './components/user/TimeCard';
// import PunchTime from './components/user/PunchTime';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
          {/* <Route path="/user/punchtime" element={<PunchTime/>}></Route> */}
          {/* <Route path="/user/timecards" element={<TimeCard />}></Route> */}
          <Route path="/user/leaverequests" element={<UserLeaveRequestList/>}></Route>
          <Route path="/user/leaverequests/leaverequestform" element={<UserLeaveRequestForm/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
