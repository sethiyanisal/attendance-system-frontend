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

  const getTimeCardsById = (token, userID) => {
    const headers = {
        'Authorization': 'Bearer ' +token 
      }

    return Axios.get("user/gettimecards/"+userID, {headers: headers});
  };

  const getAllTimeCards = (token) => {
    const headers = {
        'Authorization': 'Bearer ' +token 
      }

    return Axios.get("admin/getalltimecards/", {headers: headers});
  };
  
  
  const TimePunchService = {
    createTimeCard,
    completeTimeCard,
    getTimeCardsById,
    getAllTimeCards
  };
  
  export default TimePunchService;