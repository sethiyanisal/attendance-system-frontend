import Axios from "./axios";

const createTimeCard = (timecard, token) => {
    const headers = {
        'Authorization': 'Bearer ' +token 
      }

    return Axios.post("user/addtimecard", timecard, {headers: headers});
  };
  
  
  const TimePunchService = {
    createTimeCard
  };
  
  export default TimePunchService;