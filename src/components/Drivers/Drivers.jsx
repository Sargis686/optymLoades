import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from 'axios'
const Drivers=()=>{
    const [state, setState] = useState(null)
    
    useEffect(()=>{
        axios.get('https://randomuser.me/api/').then(res=>{
            setState(res.data.results)
        })
    },[])
    console.log(state);
    return(
        <Box width={'100%'} height={'calc(100vh - 20vh)'} padding={2} sx={{background:'white'}}>
            {
                state?.map(item=>{
                    return(
                        <Box>
                            <Typography>{item.email}</Typography>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default Drivers