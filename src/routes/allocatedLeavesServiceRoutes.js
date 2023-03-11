import Axios from "./axios";

const addEmpLeaveTypes = (token, empLeaveType) => {
  const headers = {
    // 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' +token 
  }
  return Axios.post("/admin/addemployeeleavetypes", empLeaveType, {headers: headers});
};

const viewEmpLeaveTypes = (token) =>{
  const headers = {
    // 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' +token 
  }
  return Axios.get("/admin/viewemployeeleavetypes" , {headers: headers});
};

const getEmpTypeLeavesById = (empTypeID) => {
 
  return Axios.get("/admin/getemployeetypeleaves/" +empTypeID);
};

const postLeaveAllocation = (token, leaves) => {
    const headers = {
      'Authorization' : 'Bearer ' +token
    }
    return Axios.post("/admin/leavesallocation", leaves, {headers:headers});
  }



const allocatedLeavesService = {
    addEmpLeaveTypes,
    viewEmpLeaveTypes,
    getEmpTypeLeavesById,
    postLeaveAllocation
};



export default allocatedLeavesService;