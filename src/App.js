import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RequireAuth from './components/RequireAuth';
import Missing from './components/Missing';
import Dashboard from './pages/Dsahboard';
import UserDashboard from './pages/user/UserDashboard';
import Layout from './components/Layout';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserTimecard from './pages/user/UserTimeCard';
import AdminTimeCard from './pages/admin/AdminTimeCard';
import AdminLeaveRequests from './pages/admin/AdminLeaveRequests';
import UserLeaverequest from './pages/user/UserLeaveRequest';
import UserTimePunch from './pages/user/UserTimePunch';
import UserLeaveRequestForm from './pages/user/UserLeaveRequestForm';
import UserViewLeave from './pages/user/UserViewLeave';
import AdminViewLeave from './pages/admin/AdminViewLeave';
import AdminLeaveManagement from './pages/admin/AdminLeaveManagement';
import AdminLeaveAllocation from './pages/admin/AdminLeaveAllocation';

const ROLES = {
  "User": 2080,
  "Admin": 5150
}

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />} >
        
        {/* public routes */}
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<SignUp />}></Route>

        <Route element={<RequireAuth allowedRole={[ROLES.User]}/>}>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
          <Route path="/user/timecard" element={<UserTimecard />}></Route>
          <Route path="/user/leaverequest" element={<UserLeaverequest />}></Route>
          <Route path="/user/timepunch" element={<UserTimePunch />}></Route>
          <Route path="/user/leaverequests/leaverequestform" element={<UserLeaveRequestForm />}></Route>
          <Route path="/user/leaverequest/userviewleave" element={<UserViewLeave/>}></Route>
        </Route>

        <Route element={<RequireAuth allowedRole={[ROLES.Admin]}/>}>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}></Route>
          <Route path="/admin/timecards" element={<AdminTimeCard/>}></Route>
          <Route path="/admin/leaverequests" element={<AdminLeaveRequests/>}></Route>
          <Route path="/admin/leaverequests/adminviewleave" element={<AdminViewLeave/>}></Route>
          <Route path="/admin/adminleavemanagement" element={<AdminLeaveManagement/>}></Route>
          <Route path="/admin/adminleavemanagement/allocation" element={<AdminLeaveAllocation/>}></Route>
        </Route>

        <Route path="/*" element={<Missing />} />

      </Route>
    </Routes>
    </div>
  );
}

export default App;
