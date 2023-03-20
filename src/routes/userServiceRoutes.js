import Axios from "./axios";

const createUser = (user) => {
  return Axios.post("/register", user);
};

const getAllUsers = (token) => {
  const headers = {
    'Authorization' : 'Bearer ' +token
  }
  return Axios.get("/admin/getallusers",{headers:headers});
};

const getAllEmployees = (token) => {
  const headers = {
    'Authorization' : 'Bearer ' +token
  }
  return Axios.get("/admin/getallemployees",{headers:headers});
};

const UserService = {
  createUser,
  getAllUsers,
  getAllEmployees
};

export default UserService;