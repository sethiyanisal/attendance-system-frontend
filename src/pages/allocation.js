import * as React from 'react';
import allocatedLeavesService from '../routes/allocatedLeavesServiceRoutes';
const { auth } = useAuthContext();
const navigateTo = useNavigate();
const navigateBack = () => {
    // 👇️ navigate back
    navigateTo('/user/leaverequests');};


const handleSubmit = async (e) => {
    e.preventDefault();

    let leaves = {
        annualleaves: 7,
        casualleaves: 7,
        bdayleaves: 1,
        pdleaves: 6,
      };
        
   
    try {
        const token = auth.user.token;
        allocatedLeavesService
        .postLeaveAllocation (token, leaves)
            .then((res) => {
            console.log("Successfully added a leave request");
            navigateTo("/user/leaverequests");
            })
            .catch((error) => {
            console.log(error);
            });
        
    } catch (err) {
        console.log(err) ;
    }
}
 

export default function Allocation() {

  const [value, setValue] = React.useState([null, null]);


 

  return (
    
    <handleSubmit/>
    
  );}