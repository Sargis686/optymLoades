import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile(){
    //ete frontum inch vor data chka uremn state-i mej nshanakum enq skzbnakanov null
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(()=>{
        axios.get('https://10.20.8.158:5002/api/v2/drivers/asset/to/load').then(res=>{
            setCurrentUser(res.data.results[0])
        })
    },[])
    console.log(currentUser);
    return(
        <Box width={'100%'} height={'calc(100vh - 20vh)'} padding={1} sx={{background:'white'}}> 
            <Box>
                <Typography>organization: {}</Typography>
                <Typography>account type: {}</Typography>
                {/* //ete currentUser-y null-chi  tox mer nshac key -y lini */}
                <Typography>email: {currentUser?.email}</Typography>
            </Box>
        </Box>
    )
}