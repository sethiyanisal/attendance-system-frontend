import Axios from "./axios";

const getLeaveRequestsById = (userID, token) => {
  const headers = {
    // 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' +token 
  }
  return Axios.get("/user/leaverequestsbyid/" +userID, {headers: headers});
};

const viewLeaveRequestById = (leaveID, token) =>{
  const headers = {
    // 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' +token 
  }
  return Axios.get("/user/viewleaverequestbyid/" +leaveID, {headers: headers});
};


const getUserDetailsById = (userID, token) => {
  const headers = {
    // 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' +token 
  }
  return Axios.get("/user/userdetailsbyid/" +userID, {headers: headers});
};



const getAllLeaveRequests = (token) => {
  const headers = {
    'Authorization' : 'Bearer ' +token
  }
  return Axios.get("/user/viewallleaverequest",{headers:headers});
};


const postLeaveRequest = (token, leave) => {
  const headers = {
    'Authorization' : 'Bearer ' +token
  }
  return Axios.post("/user/requestleave", leave, {headers:headers});
}

const leaveRequestService = {
    getLeaveRequestsById,
    getUserDetailsById,
    getAllLeaveRequests,
    postLeaveRequest,
    viewLeaveRequestById
};



export default leaveRequestService;