import Axios from "./axios";

const createTimeCard = (timecard, token) => {
    const headers = {
        'Authorization': 'Bearer ' +token 
      }

    return Axios.post("user/addtimecard", timecard, {headers: headers});
  };

  const completeTimeCard = (timecard, token, userID) => {
    const headers = {
        'Authorization': 'Bearer ' +token 
      }

    return Axios.put("user/edittimecard/"+userID, timecard, {headers: headers});
  };
  
  
  const TimePunchService = {
    createTimeCard,
    completeTimeCard
  };
  
  export default TimePunchService;