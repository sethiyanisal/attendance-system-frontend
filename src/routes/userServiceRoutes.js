import Axios from "./axios";

const createUser = (user) => {
  return Axios.post("/register", user);
};


const UserService = {
  createUser
};

export default UserService;