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

  const viewAllEmpLeaveAllocations = (token) => {
    const headers = {
      'Authorization' : 'Bearer ' +token
    }
    return Axios.get("/admin/viewallleavesallocation",{headers:headers});
  };

  const viewLeaveAllocationById = (allocationID, token) =>{
    const headers = {
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +token 
    }
    return Axios.get("/admin/viewleaveallocationbyid/" +allocationID, {headers: headers});
  };
  const editLeaveAllocationById = (allocationID, token, allocation) =>{
    const headers = {
      // 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +token 
    }
    return Axios.put("/admin/editleaveallocationbyid/" +allocationID, allocation, {headers: headers});
  };
const allocatedLeavesService = {
    addEmpLeaveTypes,
    viewEmpLeaveTypes,
    getEmpTypeLeavesById,
    postLeaveAllocation,
    viewAllEmpLeaveAllocations,
    viewLeaveAllocationById,
    editLeaveAllocationById
};



export default allocatedLeavesService;