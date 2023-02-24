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

const UserService = {
  createUser,
  getAllUsers
};

export default UserService;