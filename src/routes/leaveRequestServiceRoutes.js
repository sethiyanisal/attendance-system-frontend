import Axios from "./axios";

const getLeaveRequestsById = (userID, token) => {
  const headers = {
    // 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' +token 
  }
  return Axios.get("/user/leaverequestsbyid/" +userID, {headers: headers});
};


const leaveRequestService = {
    getLeaveRequestsById
};

export default leaveRequestService;